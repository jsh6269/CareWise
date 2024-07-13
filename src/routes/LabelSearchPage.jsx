import React from "react";
import { useState, useEffect } from "react";
import careLabelTab from "../mappingData/Carelabel-tab.json";
import LabelCard from "../components/LabelCard";

// 세탁기호 찾기
const LabelSearchPage = () => {
  // 90px 246px 406px 569px
  const xloc = ["90px", "246px", "406px", "569px", "740px"];
  const [tab, setTab] = useState(0);
  const [labelLst, setLabelLst] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const changeTab = (key) => {
    setTab(key);
  };

  useEffect(() => {
    const tabMenu = ["세탁", "건조", "표백", "세제", "다림질"];
    setLabelLst(careLabelTab[tabMenu[tab]]);
  }, [tab]);

  useEffect(() => {
    setLabelLst(careLabelTab["세탁"]);
  }, []);

  return (
    <div className="w-[1222px]">
      <div className="relative w-[826px] h-[90px] mx-[3px] my-[70px] top-0 left-0">
        <p className="top-[65px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-xl absolute left-0 tracking-[0] leading-[normal] whitespace-nowrap">
          다른 모양이지만 같은 의미로 쓰이는 기호들도 같이 볼 수 있어요.
        </p>
        <div className="w-[822px] top-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[40px] absolute left-0 tracking-[0] leading-[normal] whitespace-nowrap">
          다양한 세탁기호들을 찾아보세요.
        </div>
      </div>
      <LabelCard label={selectedLabel} />
      <div className="w-[1222px] h-[900px] top-0 left-0">
        <div className="relative h-[900px] rounded-[20px]">
          <div className="absolute w-[1043px] h-1 top-[126px] left-[90px] bg-[#d9d9d9]" />
          <div
            className="absolute w-40 h-1 top-[126px] bg-[#363636]"
            style={{ left: xloc[tab] }}
          />
          <div className="inline-flex items-center gap-[100px] px-[50px] py-0 absolute top-[76px] left-[91px]">
            <div
              className="relative w-14 h-9 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 cursor-pointer"
              onClick={() => changeTab(0)}
            >
              세탁
            </div>
            <div
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 cursor-pointer"
              onClick={() => changeTab(1)}
            >
              건조
            </div>
            <div
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 cursor-pointer"
              onClick={() => changeTab(2)}
            >
              표백
            </div>
            <div
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 cursor-pointer"
              onClick={() => changeTab(3)}
            >
              세제
            </div>
            <div
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 cursor-pointer"
              onClick={() => changeTab(4)}
            >
              다림질
            </div>
          </div>
          <div className="absolute w-[1222px] h-[899px] top-0 left-0 rounded-[20px] border-2 border-solid border-[#d9d9d9]" />
          <div className="absolute w-[1160px] h-[690px] left-[-24px] top-[147px] overflow-y-auto">
            {labelLst.map((img_name) => (
              <div className="relative w-[115px] h-[115px] mt-[51px] ml-[100px] inline-block cursor-pointer">
                <div className="relative w-[115px] h-[115px] grid place-items-center cursor-pointer">
                  <img
                    className="absolute max-w-[115px] max-h-[115px]"
                    alt="Group"
                    src={`https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/${img_name}`}
                    onClick={() => {
                      setSelectedLabel(img_name);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelSearchPage;
