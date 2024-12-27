import questionMark from "../assets/images/icons/ph_question.svg";
import arrow from "../assets/images/icons/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 세탁기호 분석 결과
const LabelExResultPage = () => {
  const carelabelInfo = require("../mappingData/Carelabel-info.json");
  const location = useLocation();
  const resultInfo = { ...location.state };

  const navigate = useNavigate();

  const handleRegisterToCloset = () => {
    navigate("/closet-create"); // /closet-create 페이지로 이동
  };

  return (
    carelabelInfo && (
      <div className="w-[1440px] relative bg-white flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="w-[822px] h-[47px] left-[197px] top-[50px] absolute text-neutral-700 text-[40px] font-semibold font-['Inter']">
            세탁기호 분석 결과예요:
          </div>
          <button
            onClick={handleRegisterToCloset} // 클릭 시 /closet-create 페이지로 이동
            className="w-[221px] h-[44px] ml-[594px] mt-[52px] text-[13px] bg-[#2C2C2C] text-white rounded-md hover:bg-[#474747] focus:outline-none"
          >
            검색기록 옷장에 등록하기
          </button>
        </div>

        {resultInfo && resultInfo.image && (
          <img
            alt="carelabel"
            className="h-[393px] relative top-[161px] shadow"
            src={resultInfo.image}
          />
        )}

        {resultInfo && resultInfo.result && (
          <div className="top-[263px] ml-[120px] mb-[360px] relative flex-col justify-start items-start gap-[18px] inline-flex">
            {resultInfo.result.map((n, index) => (
              <div
                key={index}
                className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex"
              >
                <img
                  alt="carelabel icon"
                  className="w-[110px] h-[110px]"
                  src={carelabelInfo[n].image}
                />
                <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
                  {carelabelInfo[n].info}
                </div>
              </div>
            ))}
            <button
              className="w-[616px] h-[67px] left-[412px] mt-20 -ml-6 rounded-lg border-2 border-neutral-400 justify-center items-center gap-5 inline-flex"
              onClick={() => {
                navigate("/label-search");
              }}
            >
              <div className="h-[30px] justify-center items-center gap-2 flex">
                <img
                  alt="question mark"
                  className="w-[30px] h-[30px] relative"
                  src={questionMark}
                />
                <div className="text-center text-neutral-400 text-xl font-normal font-['Inter'] leading-tight">
                  더 많은 세탁기호의 뜻이 궁금하다면
                </div>
                <img
                  alt="arrow"
                  className="w-[28px] h-[21.97px] relative"
                  src={arrow}
                />
              </div>
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default LabelExResultPage;
