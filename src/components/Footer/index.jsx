import React from "react";
import logo from "../../assets/images/title.png";
import likelion_logo from "../../assets/images/likelion.png";

const Footer = () => {
  return (
    <div className="flex w-[1440px] items-center justify-between px-[45px] py-[30px] relative">
      <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
        <img
          className="relative w-16 h-[68px] object-cover"
          alt="likelion"
          src={likelion_logo}
        />
        <img
          className="relative w-44 h-[46px] object-cover"
          alt="carewise"
          src={logo}
        />
      </div>
      <div className="flex flex-col w-[272px] items-start gap-2.5 relative">
        <div className="w-[272px] mt-[-1.00px] text-[#3f3f3f] text-lg relative [font-family:'Inter-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
          서울대학교 멋쟁이사자처럼 12기
        </div>
        <div className="self-stretch text-[#757575] text-[13px] relative [font-family:'Inter-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
          김시현 ｜ 김지원｜&nbsp;&nbsp;장수한｜&nbsp;&nbsp;최윤희
        </div>
      </div>
    </div>
  );
};

export default Footer;
