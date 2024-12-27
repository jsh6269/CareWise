import { useState } from "react";
import { ReactComponent as AccessoryIcon } from "../assets/images/icons/accessory.svg";
import { ReactComponent as DressIcon } from "../assets/images/icons/dress.svg";
import { ReactComponent as HangerIcon } from "../assets/images/icons/hanger2.svg";
import { ReactComponent as JacketIcon } from "../assets/images/icons/jacket.svg";
import { ReactComponent as PantsIcon } from "../assets/images/icons/pants.svg";
import { ReactComponent as ShirtIcon } from "../assets/images/icons/Tshirt.svg";
import ex1 from "../assets/images/icons/1.png";
import ex2 from "../assets/images/icons/2.png";
import ex3 from "../assets/images/icons/3.png";
import ex4 from "../assets/images/icons/4.png";
import ex5 from "../assets/images/icons/5.png";

const ClosetPage = () => {
  // 아이콘 클릭 상태 관리
  const [selectedItem, setSelectedItem] = useState(null);

  // 각 아이템 클릭 시 상태 업데이트
  const handleClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item); // 같은 아이템을 클릭하면 닫히도록
  };

  return (
    <div className="relative h-[1200px] w-[1440px]">
      {/* Header Section */}
      <div className="ml-[180px] mt-[40px] font-semibold text-[#3f3f3f] text-[35px]">
        내 옷장
        <p className="mt-4 font-normal text-[#757575] text-[17px]">
          내 옷의 세탁법을 필요할 때마다 찾아보세요!
        </p>
      </div>

      {/* Horizontal Bar */}
      <div className="ml-[180px] mt-10 w-[1047px] h-[19px] bg-[#F6F6F6] drop-shadow relative">
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
            <span className="text-[#757575] text-[15px] mt-[65px]">상의</span>
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
            <span className="text-[#757575] text-[15px] mt-2">하의</span>
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
            <span className="text-[#757575] text-[15px] mt-[70px]">아우터</span>
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
            <span className="text-[#757575] text-[15px] mt-2">원피스</span>
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
            <span className="text-[#757575] text-[15px] mt-[18px]">잡화류</span>
          </button>
        </div>
      </div>

      {/* 카드 부분 */}
      <div className="ml-[180px] mt-[320px]">
        {selectedItem === "shirt" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f] mb-[30px]">
              상의
            </h3>
            <div className="image-grid">
              <div className="image-item">
                <img src={ex1} alt="shirt 1" />
                <p className="text-sm text-[#3F3F3F] mt-2">나이키 맨투맨</p>
              </div>
              <div className="image-item">
                <img src={ex2} alt="shirt 2" />
                <p className="text-sm text-[#3F3F3F] mt-2">핑크색 니트</p>
              </div>
              <div className="image-item">
                <img src={ex3} alt="shirt 3" />
                <p className="text-sm text-[#3F3F3F] mt-2">흰색 셔츠</p>
              </div>
              <div className="image-item">
                <img src={ex4} alt="shirt 4" />
                <p className="text-sm text-[#3F3F3F] mt-2">체크 셔츠</p>
              </div>
              <div className="image-item">
                <img src={ex5} alt="shirt 5" />
                <p className="text-sm text-[#3F3F3F] mt-2">무탠다드 후드</p>
              </div>
            </div>
          </div>
        )}

        {selectedItem === "pants" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f] mb-[30px]">
              하의
            </h3>
            <div className="image-grid">
              <div className="image-item">
                <img src={ex3} />
                <p className="text-sm text-[#3F3F3F] mt-2">플리츠 스커트</p>
              </div>
              <div className="image-item">
                <img src={ex5} alt="shirt 5" />
                <p className="text-sm text-[#3F3F3F] mt-2">트레이닝 반바지</p>
              </div>
            </div>
          </div>
        )}
        {selectedItem === "jacket" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f] mb-[30px]">
              아우터
            </h3>
            <div className="image-grid">
              <div className="image-item">
                <img src={ex1} />
                <p className="text-sm text-[#3F3F3F] mt-2">스웨이드 자켓</p>
              </div>
              <div className="image-item">
                <img src={ex4} />
                <p className="text-sm text-[#3F3F3F] mt-2">검정색 코트</p>
              </div>
              <div className="image-item">
                <img src={ex5} />
                <p className="text-sm text-[#3F3F3F] mt-2">블레이저</p>
              </div>
            </div>
          </div>
        )}
        {selectedItem === "dress" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f] mb-[30px]">
              원피스
            </h3>
            <div className="image-grid">
              <div className="image-item">
                <img src={ex1} />
                <p className="text-sm text-[#3F3F3F] mt-2">
                  무탠다드 pk 원피스
                </p>
              </div>
              <div className="image-item">
                <img src={ex2} />
                <p className="text-sm text-[#3F3F3F] mt-2">자라 니트 원피스</p>
              </div>
              <div className="image-item">
                <img src={ex3} />
                <p className="text-sm text-[#3F3F3F] mt-2">잠옷</p>
              </div>
              <div className="image-item">
                <img src={ex5} />
                <p className="text-sm text-[#3F3F3F] mt-2">
                  검정색 정장 원피스
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedItem === "accessory" && (
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-xl text-[#3f3f3f] mb-[30px]">
              잡화류
            </h3>
            <div className="image-item">
              <img src={ex2} />
              <p className="text-sm text-[#3F3F3F] mt-2">아크네 머플러</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClosetPage;
