import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setCustomInput("");
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (customInput) {
        setSelectedOption(customInput);
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [customInput]);

  const handleInputChange = (e) => {
    setCustomInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSelectedOption(customInput);
      setCustomInput("");
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="border border-[#3F3F3F] w-[226px] h-[47px] rounded-md shadow cursor-pointer flex items-center justify-center"
        onClick={handleToggle}
      >
        <span className={"text-[#757575] text-[20px]"}>
          {selectedOption || placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-[15px] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
          >
            <path d="M7 6.25L0.75 0H13.25L7 6.25Z" fill="#3F3F3F" />
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className="absolute z-10 px-[7px] py-[15px] bg-white border border-[#3F3F3F] mt-[22.5px] w-[360px] rounded-md shadow max-h-[411px] overflow-y-auto left-1/2 transform -translate-x-1/2">
          <li className="px-4 py-2">
            <input
              type="text"
              value={customInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="직접 입력하기"
              className="bg-[#EBEBEB] border border-[#757575] rounded w-full h-[50px] p-2 placeholder:text-[18px] placeholder:text-[#757575] focus:outline-none focus:border-[#757575] focus:ring-0"
            />
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              className="flex text-[18px] text-[#3F3F3F] items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              <div className="w-[30px] h-[30px] mr-[25px] flex items-center">
                <img
                  src={
                    selectedOption === option.label
                      ? "https://s3-alpha-sig.figma.com/img/3475/b7a2/1f23084167c3aa866345d8908992dc9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DnTXyj6hzG8mo6tip0xLvuYwIIjfb6~6aMNUrKYGp3qYX1SMQl0isulo0SOprUmV17kR2r1hi332ACN9nT6qkz87AXRXeYdYtui-yvBBuwVmQR-v7EqaFPdBF2oH1cV2R4AGJHgoG1UjkX~ZpX5K66ZNllIDizdm9HXVDaJnhQ4LVV1vrbIqWZBOVZEESQ7OcBWsAgqRKFGGxp9FZk4gLtq~z3RR1iLVuCtGjiX4AP5D6ya0JgB91r0IjST26TyOeY8dEAj0Yked0SzxuWQTumSkkPT89OysHqUXQFtmCthaYjKG7SA-9s6jti5E5ZHrL9~sY~6AQUsDi8xxuk9r7g__"
                      : "https://s3-alpha-sig.figma.com/img/555d/5ec3/5e60ad107162aa76e07d596006c0303d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A8WcBiQYB0hm6xrvFWj29Ba538dpam1WFRn-i29iIgE4hNopnnI1iqC9A6lMfUuF3uoyuUMhITS9~RXdZAepChc26iNM-0pDBUO8~1KLTLQ2sRc6E69i4JnNcpAHJNJfODti0F5Emi3V~9HJdLiiPMe-wn4q-0rL0Jq77tb7IzickvJafn5jpiWcXDRGD5M~-0x3es2s-I7R-dLxlwF85b5h1zgEmQuqiiE7QR1xWxkt2IFjvm4qW~Da2p6l2hhi-ssbxxMRoRraRuTVcezclstfvNv9vZ1sYrje6MoD0OoXZMKuCqg0tQfW0peUVtyiK3YvxTCZJr5H0IDqt9mZAA__"
                  }
                  className="w-5 h-5 cursor-pointer"
                  alt="checkbox"
                />
              </div>
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
