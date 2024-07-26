import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { Loading, RecogFail } from "../components/Modal/index.jsx";
import { CareLabelSearchAPI, CareSearchAPI } from "../chatgpt.js";

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
  clothes,
  garment1,
  garment2,
  garment3,
  setClothes,
  setGarment1,
  setGarment2,
  setGarment3,
  customInput1,
  customInput2,
  customInput3,
  handleInputChange1,
  handleInputChange2,
  handleInputChange3,
  handleKeyPress,
  setCurrentView,
  handleSearchButtonClick,
  error,
}) => {
  return (
    <div className="relative h-[1024px] w-[1440px]">
      <div className="absolute left-[180px] top-[40px] font-semibold text-[#3f3f3f] text-[40px]">
        헷갈리는 의복 세탁/관리법, AI에게 물어보세요.
        <p className="mt-4 font-normal text-[#757575] text-lg">
          의복의 종류, 섬유 혼용률을 분석해서 적절한 관리법을 알려드려요!
        </p>
      </div>
      <div className="absolute grid grid-cols-2 top-[198px] left-[506px] justify-center gap-[30px] mb-4">
        <div>
          <input
            type="radio"
            name="viewoption"
            id="view1"
            value="view1"
            className="peer hidden"
            onChange={() => setCurrentView("view1")}
            checked
          />
          <label
            htmlFor="view1"
            className="block text-[14px] cursor-pointer select-none rounded-3xl px-10 py-2 text-center bg-white border-[#A4A4A4] border peer-checked:bg-[#b6b6b6] peer-checked:text-white"
          >
            케어라벨 입력하기
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="viewoption"
            id="view2"
            value="view2"
            className="peer hidden"
            onChange={() => setCurrentView("view2")}
          />
          <label
            htmlFor="view2"
            className="block text-[14px] cursor-pointer select-none rounded-3xl px-8 py-2 text-center bg-white border-[#A4A4A4] border peer-checked:bg-[#c5c5c5] peer-checked:text-white"
          >
            직접 검색하기
          </label>
        </div>
      </div>
      <div className="relative top-[265px] left-[499px] w-[441px] h-[582px] items-center">
        <img
          className="absolute"
          style={{
            opacity: "var(--sds-size-stroke-border)",
            backgroundImage: "url(<path-to-image>)",
            boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          src="https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/back_label_asset.png"
          alt="container"
        />
        <div className="absolute mt-[160px] ml-[108px]">
          <h1 className="text-[#3A3A3A] text-[20px] font-normal tracking-[10px] ml-[12px] mb-[18px]">
            &lt;의복의 종류&gt;
          </h1>
          <Dropdown
            options={clothesoptions}
            placeholder="의복 선택"
            selectedOption={clothes}
            setSelectedOption={(x) => {
              setClothes(x);
            }}
          />
        </div>
        <div className="absolute mt-[290px] mb-[71px] ml-[60px]">
          <h1 className="text-[#3A3A3A] text-[20px] font-normal tracking-[10px] ml-[48px] mb-[18px]">
            &lt;섬유 혼용률&gt;
          </h1>
          <div className="flex items-center mb-[19.5px]">
            <Dropdown
              options={garmentoptions}
              placeholder="섬유1 선택"
              selectedOption={garment1}
              setSelectedOption={(x) => {
                setGarment1(x);
              }}
            />
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
              selectedOption={garment2}
              setSelectedOption={(x) => {
                setGarment2(x);
              }}
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
              selectedOption={garment3}
              setSelectedOption={(x) => {
                setGarment3(x);
              }}
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

      <div className="absolute top-[895px] left-[50%] transform -translate-x-1/2 w-[288px]">
        <button
          className="w-full h-[48px] border-[#757575] border-2 rounded-lg text-[#3F3F3F] text-[16px] font-medium bg-white"
          onClick={handleSearchButtonClick}
        >
          검색결과 보기
        </button>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

const View2 = ({ setCurrentView, handleSearchButtonClick2 }) => {
  return (
    <div className="relative w-[1440px] h-[700px]">
      <div className="absolute left-[180px] top-[40px] font-semibold text-[#3f3f3f] text-[40px]">
        헷갈리는 의복 세탁/관리법, AI에게 물어보세요.
        <p className="mt-4 font-normal text-[#757575] text-lg">
          기본 세탁법, 얼룩 제거, 특수 소재 등 의복 관리에 대한 어떤 질문이든
          물어볼 수 있어요.
        </p>
      </div>
      <div className="absolute grid grid-cols-2 top-[198px] left-[506px] justify-center gap-[30px] mb-4">
        <div>
          <input
            type="radio"
            name="viewoption"
            id="view1"
            value="view1"
            class="peer hidden"
            onChange={() => setCurrentView("view1")}
          />
          <label
            for="view1"
            class="block text-[14px] cursor-pointer select-none rounded-3xl px-10 py-2 text-center bg-white border-[#A4A4A4] border peer-checked:bg-[#b6b6b6]  peer-checked:text-white"
          >
            케어라벨 입력하기
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="viewoption"
            id="view2"
            value="view2"
            class="peer hidden"
            onChange={() => setCurrentView("view2")}
            checked
          />
          <label
            for="view2"
            class="block text-[14px] cursor-pointer select-none rounded-3xl px-8 py-2 text-center bg-white border-[#A4A4A4] border peer-checked:bg-[#c5c5c5]  peer-checked:text-white"
          >
            직접 검색하기
          </label>
        </div>
      </div>
      <textarea
        className="absolute left-[180px] top-[265px] px-[25px] py-[20px] w-[1060px] h-[130px] border-2 border-[#E5E5E5] bg-[#F2F2F2] rounded-xl text-[17px] placeholder-[#757575] overflow-auto"
        placeholder="니트류에 대한 관리법을 알려줘, 스타킹에 올이 나갔어, 셔츠에 잉크를 쏟았어!"
      ></textarea>
      <button
        className="absolute top-[445px] left-[50%] transform -translate-x-1/2 w-[288px] h-[48px] border-[#757575] border-2 rounded-lg text-[#3F3F3F] text-[16px]"
        onClick={handleSearchButtonClick2}
      >
        검색결과 보기
      </button>
    </div>
  );
};

const CareSearchPage = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("view1");
  const [clothes, setClothes] = useState("");
  const [garment1, setGarment1] = useState("");
  const [garment2, setGarment2] = useState("");
  const [garment3, setGarment3] = useState("");
  const [customInput1, setCustomInput1] = useState("");
  const [customInput2, setCustomInput2] = useState("");
  const [customInput3, setCustomInput3] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(false);

  const [error, setError] = useState("");

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
      // 필요 시 엔터 키 입력 처리
    }
  };

  const validateInputs = () => {
    const sum = [customInput1, customInput2, customInput3]
      .map(Number)
      .reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);

    if (sum !== 100) {
      setError("섬유 혼용률의 합을 100%로 맞춰주세요!");
      return false;
    }

    setError("");
    return true;
  };

  async function handleSearchButtonClick1() {
    if (!validateInputs()) {
      alert("섬유 혼용률의 합을 100%로 맞춰주세요");
      return;
    }

    const input = [
      clothes,
      garment1,
      customInput1,
      garment2,
      customInput2,
      garment3,
      customInput3,
    ];

    //test
    console.log(input);

    if (null in input) {
      alert("Please fill in the form");
      return;
    }

    setIsLoading(true);

    try {
      const result = await CareLabelSearchAPI(input);
      if (result[1].length > 0) {
        navigate("/care-result", {
          state: { input: input, result: result },
        });
      } else {
        setIsLoading(false);
        setRetry(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      setRetry(true);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSearchButtonClick2 = () => {
    if (!validateInputs()) {
      return;
    }
  };

  return (
    <div className="h-auto">
      {currentView === "view1" ? (
        <View1
          clothes={clothes}
          garment1={garment1}
          garment2={garment2}
          garment3={garment3}
          setClothes={(x) => {
            setClothes(x);
          }}
          setGarment1={(x) => {
            setGarment1(x);
          }}
          setGarment2={(x) => {
            setGarment2(x);
          }}
          setGarment3={(x) => {
            setGarment3(x);
          }}
          customInput1={customInput1}
          customInput2={customInput2}
          customInput3={customInput3}
          handleInputChange1={handleInputChange1}
          handleInputChange2={handleInputChange2}
          handleInputChange3={handleInputChange3}
          handleKeyPress={handleKeyPress}
          setCurrentView={setCurrentView}
          handleSearchButtonClick={handleSearchButtonClick1}
          error={error}
        />
      ) : (
        <View2
          setCurrentView={setCurrentView}
          handleSearchButtonClick={handleSearchButtonClick2}
        />
      )}
      <Loading isLoading={isLoading} />
      <RecogFail
        retry={retry}
        setRetry={(x) => {
          setRetry(x);
        }}
      />
    </div>
  );
};

export default CareSearchPage;
