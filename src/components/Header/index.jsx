import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/title.png";

const Header = () => {
  return (
    <div className="w-[1440px] h-[100px]">
      <div className="fixed z-50 flex w-[1440px] h-[100px] items-center gap-[180px] px-[110px] py-[30px] bg-white">
        <a href="/">
          <img
            className="relative w-[226px] h-[53px] mt-[-2.00px] mb-[-2.00px] object-cover"
            alt="Element"
            src={logo}
          />
        </a>
        <div className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
          <Link to="/">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              HOME
            </div>
          </Link>
          <Link to="/care-search">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              관리법 검색임시
            </div>
          </Link>
          <Link to="/label-ex">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              세탁기호 분석
            </div>
          </Link>
          <Link to="/label-search">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              세탁기호 찾기
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[1440px] h-[100px]">box</div>
    </div>
  );
};

export default Header;
