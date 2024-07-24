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

const View1 = ({
  customInput1,
  customInput2,
  customInput3,
  handleInputChange1,
  handleInputChange2,
  handleInputChange3,
  handleKeyPress,
  setCurrentView,
}) => {
  return (
    <div className="relative h-[1024px] w-[1440px]">
      <div className="absolute left-[180px] top-[40px] font-semibold text-[#3f3f3f] text-[40px]">
        헷갈리는 의복 세탁/관리법, AI에게 물어보세요.
        <p className="mt-4 font-normal text-[#757575] text-lg">
          의복의 종류, 섬유 혼용률을 분석해서 적절한 관리법을 알려드려요!
        </p>
      </div>
      <div className="absolute top-[200px] left-[567px] justify-center gap-[40px] mb-4">
        <label className="text-[15px] text-[#757575] mx-2 cursor-pointer">
          <input
            type="radio"
            name="viewOption"
            value="view1"
            checked
            onChange={() => setCurrentView("view1")}
            className="mr-[15px]"
          />
          케어라벨 입력하기
        </label>
        <label className="text-[15px] text-[#757575] mx-2 cursor-pointer">
          <input
            type="radio"
            name="viewOption"
            value="view2"
            onChange={() => setCurrentView("view2")}
            className="mr-[15px]"
          />
          직접 검색하기
        </label>
      </div>
      <div className="relative top-[250px] left-[499px] w-[441px] h-[582px] items-center">
        <img
          className="absolute"
          style={{
            opacity: "var(--sds-size-stroke-border)",
            backgroundImage: "url(<path-to-image>)",
            boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          src={`https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/back_label_asset.png`}
          alt="container"
        />
        <div className="absolute mt-[160px] ml-[108px]">
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
      <button className="absolute top-[880px] left-[50%] transform -translate-x-1/2 w-[288px] h-[48px] border-[#757575] border-2 rounded-lg text-[#3F3F3F] text-[16px]">
        검색결과 보기
      </button>
    </div>
  );
};

const View2 = ({ setCurrentView }) => {
  return (
    <div className="relative w-[1440px] h-[700px]">
      <div className="absolute left-[180px] top-[40px] font-semibold text-[#3f3f3f] text-[40px]">
        헷갈리는 의복 세탁/관리법, AI에게 물어보세요.
        <p className="mt-4 font-normal text-[#757575] text-lg">
          기본 세탁법, 얼룩 제거, 특수 소재 등 의복 관리에 대한 어떤 질문이든
          물어볼 수 있어요.
        </p>
      </div>
      <div className="absolute top-[200px] left-[567px] justify-center gap-[40px] mb-4">
        <label className="text-[15px] text-[#757575] mx-2 cursor-pointer">
          <input
            type="radio"
            name="viewOption"
            value="view1"
            onChange={() => setCurrentView("view1")}
            className="mr-[15px]"
          />
          케어라벨 입력하기
        </label>
        <label className="text-[15px] text-[#757575] mx-2 cursor-pointer">
          <input
            type="radio"
            name="viewOption"
            value="view2"
            checked
            onChange={() => setCurrentView("view2")}
            className="mr-[15px]"
          />
          직접 검색하기
        </label>
      </div>
      <textarea
        className="absolute left-[180px] top-[250px] px-[25px] py-[20px] w-[1060px] h-[130px] border-2 border-[#E5E5E5] bg-[#F2F2F2] rounded-xl text-[17px] placeholder-[#757575] overflow-auto"
        placeholder="니트류에 대한 관리법을 알려줘, 스타킹에 올이 나갔어, 셔츠에 잉크를 쏟았어!"
      ></textarea>
      <button className="absolute top-[430px] left-[50%] transform -translate-x-1/2 w-[288px] h-[48px] border-[#757575] border-2 rounded-lg text-[#3F3F3F] text-[16px]">
        검색결과 보기
      </button>
    </div>
  );
};

const CareSearchPage = () => {
  const [currentView, setCurrentView] = useState("view1");
  const [customInput1, setCustomInput1] = useState("");
  const [customInput2, setCustomInput2] = useState("");
  const [customInput3, setCustomInput3] = useState("");

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
    <div className="h-auto">
      {currentView === "view1" ? (
        <View1
          customInput1={customInput1}
          customInput2={customInput2}
          customInput3={customInput3}
          handleInputChange1={handleInputChange1}
          handleInputChange2={handleInputChange2}
          handleInputChange3={handleInputChange3}
          handleKeyPress={handleKeyPress}
          setCurrentView={setCurrentView}
        />
      ) : (
        <View2 setCurrentView={setCurrentView} />
      )}
    </div>
  );
};

export default CareSearchPage;
