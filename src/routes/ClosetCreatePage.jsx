import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import { ReactComponent as AccessoryIcon } from "../assets/images/icons/accessory.svg";
import { ReactComponent as DressIcon } from "../assets/images/icons/dress.svg";
import { ReactComponent as JacketIcon } from "../assets/images/icons/jacket.svg";
import { ReactComponent as PantsIcon } from "../assets/images/icons/pants.svg";
import { ReactComponent as ShirtIcon } from "../assets/images/icons/Tshirt.svg";
import image from "../assets/images/icons/1.png";

const ClosetCreatePage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  const handleModalClose = () => {
    setShowModal(false); // 모달 닫기
    navigate("/closet"); // /closet 페이지로 이동
  };

  const handleModalOpen = () => {
    setShowModal(true); // 모달 열기
  };

  return (
    <div className="relative h-[1024px] w-[1440px] flex flex-col items-start ml-[180px] mt-[40px]">
      <h1 className="font-semibold text-[#3f3f3f] text-[35px]">
        옷장 등록하기
      </h1>
      <p className="mt-4 font-normal text-[#757575] text-[17px]">
        내 옷의 세탁법을 옷장에 등록해서 필요할 때마다 꺼내볼 수 있어요.
      </p>
      <img
        className="h-[284px] mt-[30px] object-cover"
        alt="image sample"
        src={image}
      />
      <p className="mt-8 text-[#3f3f3f] text-[18px]">
        옷의 이름을 입력해주세요
      </p>
      <input
        type="text"
        placeholder="나이키 반바지, 폴로 니트..."
        className="h-12 w-[955px] px-[16px] text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 mt-2"
      />

      <p className="mt-8 text-[#3f3f3f] text-[18px]">
        옷의 종류를 선택해주세요
      </p>
      <div className="flex mt-6 gap-[50px]">
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleSelectType("shirt")}
            className={`element flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg ${
              selectedType === "shirt" ? "bg-[#B3B3B3]" : "bg-white"
            }`}
          >
            <ShirtIcon className="w-[70px] h-[70px] clothes" />
          </div>
          <p className="mt-3 text-sm text-[#3f3f3f]">상의</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleSelectType("pants")}
            className={`element flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg ${
              selectedType === "pants" ? "bg-[#B3B3B3]" : "bg-white"
            }`}
          >
            <PantsIcon className="w-[70px] h-[70px] clothes" />
          </div>
          <p className="mt-3 text-sm text-[#3f3f3f]">하의</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            onClick={() => handleSelectType("dress")}
            className={`element flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg ${
              selectedType === "dress" ? "bg-[#B3B3B3]" : "bg-white"
            }`}
          >
            <DressIcon className="w-[70px] h-[70px] clothes" />
          </div>
          <p className="mt-3 text-sm text-[#3f3f3f]">원피스</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            onClick={() => handleSelectType("jacket")}
            className={`element flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg ${
              selectedType === "jacket" ? "bg-[#B3B3B3]" : "bg-white"
            }`}
          >
            <JacketIcon className="w-[70px] h-[70px] clothes" />
          </div>
          <p className="mt-3 text-sm text-[#3f3f3f]">아우터</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            onClick={() => handleSelectType("accessory")}
            className={`element flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg ${
              selectedType === "accessory" ? "bg-[#B3B3B3]" : "bg-white"
            }`}
          >
            <AccessoryIcon className="w-[70px] h-[70px] clothes" />
          </div>
          <p className="mt-3 text-sm text-[#3f3f3f]">잡화류</p>
        </div>
      </div>

      <button
        onClick={handleModalOpen} // 버튼 클릭 시 모달 열기
        type="submit"
        className="w-[221px] h-[44px] mt-[100px] ml-[594px] text-[13px] bg-[#2C2C2C] text-white rounded-md hover:bg-[#474747] focus:outline-none"
      >
        옷장에 등록하기
      </button>

      {/* 모달 */}
      {showModal && (
        <div className="element fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] h-[200px] flex flex-col items-center justify-center">
            <p className="mt-2 text-[#757575] text-center">
              옷이 옷장에 등록되었어요!
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleModalClose} // closet 페이지로 이동
                className="px-4 py-2 w-[200px] bg-[#AEAEAE] text-white rounded-md hover:bg-[#757575]"
              >
                내 옷장 가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClosetCreatePage;
