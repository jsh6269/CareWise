import React from "react";
import logo from "../../assets/images/title.png";

const Header = () => {
  return (
    <div className="fixed z-50 flex w-[1440px] h-[100px] items-center gap-[180px] px-[110px] py-[30px] bg-white">
      <img
        className="relative w-[226px] h-[53px] mt-[-2.00px] mb-[-2.00px] object-cover"
        alt="Element"
        src={logo}
      />
      <div className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
          HOME
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
          관리법 검색
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
          세탁기호 분석
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f3f3f] text-[16px] text-sm tracking-[0] leading-[normal]">
          세탁기호 찾기
        </div>
      </div>
    </div>
  );
};

export default Header;
