import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const clothesoptions = [
  { label: "재킷" },
  { label: "코트" },
  { label: "파카" },
  { label: "패딩" },
  { label: "트렌치코트" },
  { label: "윈드브레이커" },
  { label: "청바지" },
  { label: "반바지" },
  { label: "치노 팬츠" },
  { label: "레깅스" },
  { label: "치마" },
  { label: "미니스커트" },
  { label: "롱스커트" },
  { label: "점프수트" },
  { label: "오버롤" },
  { label: "슬랙스" },
  { label: "원피스" },
  { label: "양말" },
  { label: "스타킹" },
  { label: "장갑" },
  { label: "스카프" },
  { label: "비니" },
  { label: "캡모자" },
  { label: "트레이닝복" },
  { label: "수영복" },
  { label: "요가복" },
  { label: "스키복" },
  { label: "등산복" },
  { label: "레인코트" },
  { label: "러닝복" },
];

const garmentoptions = [
  { label: "면" },
  { label: "린넨" },
  { label: "울" },
  { label: "실크" },
  { label: "폴리에스터" },
  { label: "나일론" },
  { label: "아크릴" },
  { label: "레이온" },
  { label: "스판덱스" },
  { label: "캐시미어" },
  { label: "모헤어" },
  { label: "알파카" },
  { label: "앙고라" },
  { label: "폴리우레탄" },
  { label: "모달" },
  { label: "텐셀" },
  { label: "아세테이트" },
  { label: "트리아세테이트" },
  { label: "노멕스" },
  { label: "케블라" },
  { label: "플리스" },
  { label: "네오프렌" },
];

const CareSearchPage = () => {
  const [customInput1, setCustomInput1] = useState("");
  const [customInput2, setCustomInput2] = useState("");
  const [customInput3, setCustomInput3] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange1 = (e) => {
    setCustomInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setCustomInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setCustomInput3(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Handle enter key press logic if needed
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1373px] relative">
        <div className="absolute inter-semi-bold w-[822px] top-[39px] left-[110px] text-[#3f3f3f] text-[40px] whitespace-nowrap">
          헷갈리는 의복 세탁/관리법, AI에게 물어보세요.
          <p className="absolute inter-regular top-[65px] text-[#757575] text-xl left-0 whitespace-nowrap">
            다른 모양이지만 같은 의미로 쓰이는 기호들도 같이 볼 수 있어요.
          </p>
        </div>

        <div className="relative w-[441px] h-[582px] mt-[335px] ml-[499px] items-center">
          <img
            className="absolute"
            style={{
              opacity: "var(--sds-size-stroke-border)",
              backgroundImage: "url(<path-to-image>)",
              boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            src={`https://s3-alpha-sig.figma.com/img/cc16/a19c/5a0b743438973d3baa4e5fb0dd5d417c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkealoRLai8WAHexT9Y8oqKduTorFbrkgaWBlndJMQbrPBlHkaH52nUa~T0IBCab4fJp5KVmUfpzR6o26aWe8ilOVAK43SKKTPDBE-bzcDHMWfZ1ccxc86lOX1vUXwQ~qaTJH7AGnpjv2AkVU7A0jO0tHMG4n0SPybFLyHkgBoquMspkAh2DQE2QUyOKsYz1PXLfOulae309psKtmPiBAQsf4~FfzfPANqjPtAs~UPhDVap1VgltJA0srSn8jxOZx~WfWYp4QLuSzZgeb9buuUmLXNVOXCw1Ezj2Z~3-N5I0XGq-wkJArYRhRYkLuoAvMbYAdj51hzVC-nIG3xNL8A__`}
          />

          <div className="absolute mt-[156px] ml-[108px]">
            <h1 className="text-[#3A3A3A] text-[20px] font-normal tracking-[10px] ml-[12px] mb-[18px]">
              &lt;의복의 종류&gt;
            </h1>
            <Dropdown options={clothesoptions} placeholder="의복 선택" />
          </div>
          <div className="absolute mt-[290px] mb-[71px] ml-[60px]">
            <h1 className="text-[#3A3A3A] text-[20px] font-normal tracking-[10px] ml-[48px] mb-[18px]">
              &lt;섬유 혼용률&gt;
            </h1>
            <div className="flex items-center mb-[19.5px]">
              <Dropdown options={garmentoptions} placeholder="섬유1 선택" />
              <input
                type="text"
                value={customInput1}
                onChange={handleInputChange1}
                onKeyPress={handleKeyPress}
                className="border border-[#3F3F3F] ml-[7px] mr-[5px] w-[65px] h-[47px] rounded-md bg-transparent text-[#3F3F3F] pl-5"
              />
              <p className="text-[16pt] text-[#757575]">%</p>
            </div>
            <div className="flex items-center mb-[19.5px]">
              <Dropdown
                options={[{ label: "-" }, ...garmentoptions]}
                placeholder="섬유2 선택"
              />
              <input
                type="text"
                value={customInput2}
                onChange={handleInputChange2}
                onKeyPress={handleKeyPress}
                className="border border-[#3F3F3F] ml-[7px] mr-[5px] w-[65px] h-[47px] rounded-md bg-transparent text-[#3F3F3F] pl-5"
              />
              <p className="text-[16pt] text-[#757575]">%</p>
            </div>
            <div className="flex items-center">
              <Dropdown
                options={[{ label: "-" }, ...garmentoptions]}
                placeholder="섬유3 선택"
              />
              <input
                type="text"
                value={customInput3}
                onChange={handleInputChange3}
                onKeyPress={handleKeyPress}
                className="border border-[#3F3F3F] ml-[7px] mr-[5px] w-[65px] h-[47px] rounded-md bg-transparent text-[#3F3F3F] pl-5"
              />
              <p className="text-[16pt] text-[#757575]">%</p>
            </div>
          </div>
        </div>
        <button className="absolute mt-[54px] ml-[574px] w-[288px] h-[48px] border-[#757575] border-2 rounded-lg text-[#3F3F3F] text-[16px]">
          검색결과 보기
        </button>
      </div>
    </div>
  );
};

export default CareSearchPage;
