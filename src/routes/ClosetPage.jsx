import { useState } from "react";
import { ReactComponent as AccessoryIcon } from "../assets/images/icons/accessory.svg";
import { ReactComponent as DressIcon } from "../assets/images/icons/dress.svg";
import { ReactComponent as HangerIcon } from "../assets/images/icons/hanger2.svg";
import { ReactComponent as JacketIcon } from "../assets/images/icons/jacket.svg";
import { ReactComponent as PantsIcon } from "../assets/images/icons/pants.svg";
import { ReactComponent as ShirtIcon } from "../assets/images/icons/Tshirt.svg";

const ClosetPage = () => {
  // 아이콘 클릭 상태 관리
  const [selectedItem, setSelectedItem] = useState(null);

  // 각 아이템 클릭 시 상태 업데이트
  const handleClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item); // 같은 아이템을 클릭하면 닫히도록
  };

  return (
    <div className="relative h-[1024px] w-[1440px]">
      {/* Header Section */}
      <div className="ml-[180px] mt-[40px] font-semibold text-[#3f3f3f] text-[35px] dark:text-white">
        내 옷장
        <p className="mt-4 font-normal text-[#757575] text-[17px] dark:text-white">
          내 옷의 세탁법을 필요할 때마다 찾아보세요!
        </p>
      </div>

      {/* Horizontal Bar */}
      <div className="ml-[180px] mt-10 w-[1047px] h-[19px] bg-[#F6F6F6] drop-shadow relative">
        {/* Hangers and Icons */}
        <div className="flex justify-between">
          {/* Hanger 1 - Shirt */}
          <button
            className="relative flex flex-col items-center"
            onClick={() => handleClick("shirt")}
          >
            <HangerIcon
              className={`w-[112px] h-[113px] transition duration-200 ${selectedItem === "shirt" ? "selected" : ""}`}
            />
            <ShirtIcon
              className={`icon drop-shadow hover:animate-shake-hover mt-[-71px] w-[147px] h-[124px] transition duration-200 ${selectedItem === "shirt" ? "selected" : ""}`}
            />
            <span className="text-[#757575] text-[15px] mt-[65px] dark:text-white">
              상의
            </span>
          </button>

          {/* Hanger 2 - Pants */}
          <button
            className="relative flex flex-col items-center"
            onClick={() => handleClick("pants")}
          >
            <HangerIcon
              className={`w-[112px] h-[113px] transition duration-200 ${selectedItem === "pants" ? "selected" : ""}`}
            />
            <PantsIcon
              className={`icon drop-shadow hover:animate-shake-hover mt-[-43px] w-[155px] h-[155px] transition duration-200 ${selectedItem === "pants" ? "selected" : ""}`}
            />
            <span className="text-[#757575] text-[15px] mt-2 dark:text-white">
              하의
            </span>
          </button>

          {/* Hanger 3 - Jacket */}
          <button
            className="relative flex flex-col items-center"
            onClick={() => handleClick("jacket")}
          >
            <HangerIcon
              className={`w-[112px] h-[113px] transition duration-200 ${selectedItem === "jacket" ? "selected" : ""}`}
            />
            <JacketIcon
              className={`icon drop-shadow hover:animate-shake-hover mt-[-78px] w-[139px] h-[127px] transition duration-200 ${selectedItem === "jacket" ? "selected" : ""}`}
            />
            <span className="text-[#757575] text-[15px] mt-[70px] dark:text-white">
              아우터
            </span>
          </button>

          {/* Hanger 4 - Dress */}
          <button
            className="relative flex flex-col items-center"
            onClick={() => handleClick("dress")}
          >
            <HangerIcon
              className={`w-[112px] h-[113px] transition duration-200 ${selectedItem === "dress" ? "selected" : ""}`}
            />
            <DressIcon
              className={`icon drop-shadow hover:animate-shake-hover mt-[-71px] w-[188px] h-[183px] transition duration-200 ${selectedItem === "dress" ? "selected" : ""}`}
            />
            <span className="text-[#757575] text-[15px] mt-2 dark:text-white">
              원피스
            </span>
          </button>

          {/* Hanger 5 - Accessory */}
          <button
            className="relative flex flex-col items-center"
            onClick={() => handleClick("accessory")}
          >
            <HangerIcon
              className={`w-[112px] h-[113px] transition duration-200 ${selectedItem === "accessory" ? "selected" : ""}`}
            />
            <AccessoryIcon
              className={`icon drop-shadow hover:animate-shake-hover mt-[-60px] w-[178px] h-[162px] transition duration-200 ${selectedItem === "accessory" ? "selected" : ""}`}
            />
            <span className="text-[#757575] text-[15px] mt-[18px] dark:text-white">
              잡화류
            </span>
          </button>
        </div>
      </div>

      {/* 카드 부분 */}
      <div className="ml-[180px] mt-[320px]">
        {selectedItem === "shirt" && (
          <div className="p-4 bg-white ">
            <h3 className="font-semibold text-xl text-[#3f3f3f]">상의</h3>
          </div>
        )}
        {selectedItem === "pants" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f]">하의</h3>
          </div>
        )}
        {selectedItem === "jacket" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f]">아우터</h3>
          </div>
        )}
        {selectedItem === "dress" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f]">원피스</h3>
          </div>
        )}
        {selectedItem === "accessory" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f]">잡화류</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosetPage;
