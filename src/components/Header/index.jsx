import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/title.png";

const Header = () => {
  return (
    <header className="w-[1440px] h-[100px]">
      <div className="fixed z-50 flex w-[1440px] h-[100px] items-center gap-[180px] px-[110px] py-[30px] bg-white">
        <a href="/">
          <img
            className="relative w-[226px] h-[53px] mt-[-2.00px] mb-[-2.00px] object-cover"
            alt="Element"
            src={logo}
          />
        </a>
        <nav className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
          <Link to="/">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              HOME
            </p>
          </Link>
          <Link to="/care-search">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              관리법 검색
            </p>
          </Link>
          <Link to="/label-ex">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              세탁기호 분석
            </p>
          </Link>
          <Link to="/label-search">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
              세탁기호 찾기
            </p>
          </Link>
        </nav>
      </div>
      <span className="w-[1440px] h-[100px]">box</span>
    </header>
  );
};

export default Header;
