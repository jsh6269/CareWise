import questionMark from "../assets/images/icons/ph_question.svg";
import arrow from "../assets/images/icons/arrow.svg";
import { useLocation } from "react-router-dom";

// 세탁기호 분석 결과
const LabelExResultPage = () => {
  const carelabelInfo = require("../mappingData/Carelabel-info.json");
  const location = useLocation();
  const resultInfo = { ...location.state };
  console.log(resultInfo.result);

  return (
    <div className="w-[1440px] h-[1752px] relative bg-white flex">
      <img
        alt="carelabel"
        className="w-[736px] h-[393px] left-[352px] top-[181px] absolute shadow"
        src={resultInfo.image}
      />
      <div className="w-[822px] h-[47px] left-[197px] top-[50px] absolute text-neutral-700 text-[40px] font-semibold font-['Inter']">
        세탁기호 분석 결과예요:
      </div>

      <div className="h-[810px] left-[352px] top-[663px] absolute flex-col justify-start items-start gap-[18px] inline-flex">
        {resultInfo.result.map((n) => (
          <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
            <img
              alt="carelabel icon"
              className="w-[110px] h-[110px]"
              src={carelabelInfo.n.image}
            />
            <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
              {carelabelInfo.n.info}
            </div>
          </div>
        ))}
      </div>

      <button className="w-[616px] h-[67px] left-[412px] top-[1571px] absolute rounded-lg border-2 border-neutral-400 justify-center items-center gap-5 inline-flex">
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
  );
};

export default LabelExResultPage;
