import React from "react";
import { useState, useEffect } from "react";
import careLabelTab from "../mappingData/Carelabel-tab.json";
import LabelCard from "../components/LabelCard";

// 세탁기호 찾기
const LabelSearchPage = () => {
  const xloc = ["90px", "290px", "460px", "630px", "830px"];
  const xwidth = ["200px", "170px", "170px", "200px", "290px"];
  const [tab, setTab] = useState(0);
  const [labelLst, setLabelLst] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const changeTab = (key) => {
    setTab(key);
  };

  useEffect(() => {
    const tabMenu = ["물세탁", "건조", "표백", "다림질", "드라이클리닝"];
    setLabelLst(careLabelTab[tabMenu[tab]]);
  }, [tab]);

  useEffect(() => {
    setLabelLst(careLabelTab["물세탁"]);
  }, []);

  return (
    <div className="w-[1222px]">
      <div className="relative w-[826px] h-[90px] mx-[3px] mt-[39px] mb-[66px] top-0 left-0">
        <p className="top-[65px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-xl absolute left-0 tracking-[0] leading-[normal] whitespace-nowrap">
          다른 모양이지만 같은 의미로 쓰이는 기호들도 같이 볼 수 있어요.
        </p>
        <p className="w-[822px] top-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[40px] absolute left-0 tracking-[0] leading-[normal] whitespace-nowrap">
          다양한 세탁기호들을 찾아보세요.
        </p>
      </div>
      <LabelCard label={selectedLabel} />
      <section className="w-[1222px] h-[990px] top-0 left-0">
        <div className="relative h-[900px] rounded-[20px]">
          <div className="absolute w-[1030px] h-1 top-[126px] left-[90px] bg-[#d9d9d9]" />
          <div
            className="absolute h-1 top-[126px] bg-[#363636]"
            style={{ left: xloc[tab], width: xwidth[tab] }}
          />
          <div className="inline-flex items-center gap-[110px] px-[55px] py-0 absolute top-[76px] left-[91px]">
            <li
              className="relative w-fit h-9 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 list-none cursor-pointer"
              onClick={() => changeTab(0)}
            >
              물세탁
            </li>
            <li
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 list-none cursor-pointer"
              onClick={() => changeTab(1)}
            >
              건조
            </li>
            <li
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 list-none cursor-pointer"
              onClick={() => changeTab(2)}
            >
              표백
            </li>
            <li
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 list-none cursor-pointer"
              onClick={() => changeTab(3)}
            >
              다림질
            </li>
            <li
              className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap z-10 list-none cursor-pointer"
              onClick={() => changeTab(4)}
            >
              드라이클리닝
            </li>
          </div>
          <div className="absolute w-[1222px] h-[960px] top-0 left-0 rounded-[20px] border-2 border-solid border-[#d9d9d9]" />
          <section className="absolute w-[1160px] h-[750px] left-[3px] top-[147px] flex flex-wrap gap-0 content-start justify-start overflow-y-auto">
            {labelLst.map((img_name) => (
              <li
                key={img_name}
                className="relative w-[145px] h-[145px] mt-[36px] ml-[73px] grid place-items-center cursor-pointer list-none"
                style={{
                  // borderColor: "#B3B3B3",
                  // borderWidth: selectedLabel === img_name ? "3px" : "0px",
                  backgroundColor:
                    selectedLabel === img_name ? "#b3b3b3" : "#ffffff",
                }}
              >
                <span className="relative w-[115px] h-[115px] grid place-items-center cursor-pointer">
                  <img
                    className="absolute max-w-[115px] max-h-[115px]"
                    alt="Group"
                    src={`https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/${img_name}`}
                    onClick={() => {
                      if (selectedLabel === img_name) {
                        setSelectedLabel(null);
                      } else {
                        setSelectedLabel(img_name);
                      }
                    }}
                  />
                </span>
              </li>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default LabelSearchPage;
