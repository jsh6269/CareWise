// 관리법 검색 결과
import { useLocation } from "react-router-dom";
import shirt from "../../src/assets/images/icons/shirt.png";

const Text = (text) => {
  return (
    <p>
      {text.split("\n").map((txt) => (
        <span key={txt}>
          {txt}
          <br />
        </span>
      ))}
    </p>
  );
};

const CareResultPage = () => {
  const carelabelInfo = require("../mappingData/Carelabel-info.json");
  const location = useLocation();
  const resultInfo = { ...location.state };

  return (
    resultInfo && (
      <div className="w-[1440px] relative bg-white">
        <div className="flex items-center justify-center border-2 border-[#A4A4A4] rounded-lg w-[1043px] h-[149px] mt-[71px] ml-[199px] shadow">
          <img
            className="w-[90px] h-[75px] mr-[20px]"
            alt="shirt"
            src={shirt}
          />
          <div className="text-[25px] text-[#3F3F3F]">
            {`섬유 혼용률 [${resultInfo.input[1]} ${resultInfo.input[2]}%, ${resultInfo.input[3]} ${resultInfo.input[4]}%, ${resultInfo.input[5]} ${resultInfo.input[6]}%]의 [${resultInfo.input[0]}]`}
          </div>
        </div>
        <div className="flex-col">
          <div className="left-[197px] relative mt-20">
            <div className="w-[822px] h-[47px] text-neutral-700 text-[40px] font-semibold font-['Inter']">
              해당 의복에 대한 관리법이에요:
            </div>
            <div className=" mt-[30px] px-[35px] py-[44px] w-[1043px] border-2 border-[#E5E5E5] bg-[#F2F2F2] rounded-xl text-[20px] text-[#757575]">
              {Text(resultInfo.result[0])}
            </div>
          </div>

          <div className="left-[197px] relative mt-20">
            <div className="w-[822px] h-[47px]  text-neutral-700 text-[40px] font-semibold font-['Inter']">
              해당 의복에 많이 쓰이는 세탁기호예요:
            </div>
            {resultInfo && (
              <div className=" mt-[80px] mb-[60px] flex-col justify-start items-start gap-[18px] inline-flex">
                {resultInfo.result[1].map((n) => (
                  <div className="self-stretch h-[120px] justify-start items-center gap-[110px] inline-flex">
                    <img
                      className="w-[120px] h-[120px]"
                      src={carelabelInfo[n].image}
                    />
                    <div className="w-[506px] h-[38px] text-neutral-500 text-[27px] font-medium font-['Inter']">
                      {carelabelInfo[n].info}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CareResultPage;
