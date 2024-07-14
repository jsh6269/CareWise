import React from "react";
import logo from "../../assets/images/title.png";
import likelion_logo from "../../assets/images/likelion.png";

const Footer = () => {
  return (
    <footer className="flex w-[1440px] h-[128px] items-center justify-between px-[45px] py-[30px] relative">
      <span className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
        <a href="https://snulion-web.vercel.app/">
          <img
            className="relative w-16 h-[68px] object-cover"
            alt="likelion"
            src={likelion_logo}
          />
        </a>
        <a href="/">
          <img
            className="relative w-44 h-[46px] object-cover"
            alt="carewise"
            src={logo}
          />
        </a>
      </span>
      <span className="flex flex-col w-[272px] items-start gap-2.5 relative">
        <p className="w-[272px] mt-[-1.00px] text-[#3f3f3f] text-lg relative [font-family:'Inter-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
          서울대학교 멋쟁이사자처럼 12기
        </p>
        <ul className="self-stretch text-[#757575] text-[13px] relative [font-family:'Inter-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
          <a href="https://github.com/sisihae">김시현</a>
          ｜&nbsp;&nbsp;<a href="https://github.com/jj1kim">김지원</a>
          ｜&nbsp;&nbsp;<a href="https://github.com/jsh6269">장수한</a>
          ｜&nbsp;&nbsp;<a href="https://github.com/yunheeec">최윤희</a>
        </ul>
      </span>
    </footer>
  );
};

export default Footer;
