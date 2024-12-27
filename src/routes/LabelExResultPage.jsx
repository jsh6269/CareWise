import questionMark from "../assets/images/icons/ph_question.svg";
import arrow from "../assets/images/icons/arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 세탁기호 분석 결과
const LabelExResultPage = () => {
  const carelabelInfo = require("../mappingData/Carelabel-info.json");
  const location = useLocation();
  const resultInfo = { ...location.state };

  // useEffect(() => {
  //   console.log("Location state:", location.state);
  // }, [location.state]);

  const navigate = useNavigate();

  return (
    carelabelInfo && (
      <div className="w-[1440px] relative bg-white flex flex-col items-center justify-center dark:invert">
        <div className="w-[822px] h-[47px] left-[197px] top-[50px] absolute text-neutral-700 text-[40px] font-semibold font-['Inter']">
          세탁기호 분석 결과예요:
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
            {resultInfo.result.result.map((pred, index) => (
              <div
                key={index}
                className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex"
              >
                {/* 탐지된 객체 이미지 */}
                <img
                  alt="Detected object"
                  className="w-[110px] h-[110px]"
                  src={pred.img} // 서버에서 반환된 `img` 키 사용
                />
                {/* 탐지된 객체 클래스 이름 */}
                <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
                  {pred.desc}
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
                  alt="question mark"
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
