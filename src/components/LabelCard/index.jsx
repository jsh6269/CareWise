import React from "react";
import careLabelInfo from "../../mappingData/Carelabel-info.json";

const Text = ({ text }) => {
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

const subText = (same) => {
  if (same.length > 0)
    return (
      <p className="h-[22px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#7a7a7a] text-xl whitespace-nowrap relative self-stretch mt-[-1.00px] text-center tracking-[0] leading-[normal]">
        동일한 의미의 기호들
      </p>
    );
};

const LabelCard = ({ label }) => {
  if (label == null) {
    return <div></div>;
  }
  const name = label.slice(0, -4);
  const similar = [
    name.concat("(2).png"),
    name.concat("(3).png"),
    name.concat("(4).png"),
  ];
  const same = similar.filter((item) => careLabelInfo[item]);

  return (
    <article className="flex flex-col w-[1222px] h-[360px] items-start justify-center gap-2.5 px-[89px] py-[115px] mb-[84px] relative bg-white rounded-[20px] border-2 border-solid border-[#d9d9d9]">
      <div className="justify-center gap-[74px] flex-[0_0_auto] mt-[-14.50px] mb-[-14.50px] flex items-center relative">
        <span className="realative w-[203px] h-[203px] ml-[70px] grid place-items-center">
          <img
            className="absolute max-w-[203px] max-h-[203px] object-cover"
            alt="High heat"
            src={`https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/${label}`}
          />
        </span>
        <section className="flex-col justify-center gap-[23px] w-[680px] flex items-center relative">
          <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#393939] text-[38px] relative self-stretch mt-[-1.00px] text-center tracking-[0] leading-[normal]">
            <Text text={careLabelInfo[label].info} />
          </div>
          <div className="flex-col w-[361px] gap-[23px] flex-[0_0_auto] flex items-center relative">
            {subText(same)}
            <div className="gap-[47px] self-stretch w-full justify-center flex items-center relative">
              {same.map((sim) => (
                <span
                  key={sim}
                  className="realative w-[89px] h-[89px] grid place-items-center"
                >
                  <img
                    className="absolute max-w-[89px] max-h-[89px] object-cover"
                    alt="High heat"
                    src={`https://carelabel-asset.s3.ap-northeast-2.amazonaws.com/${sim}`}
                  />
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default LabelCard;
