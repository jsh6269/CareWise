import kakao from "../assets/images/icons/kakao.png";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth/signup/details");
  };
  return (
    <div className="w-[1440px] h-[1024px] flex justify-center bg-white dark:bg-black">
      <div className="w-[385px] h-[348px] px-[56px] mt-[170px] shadow-custom-light rounded-2xl bg-white dark:bg-zinc-700 flex flex-col gap-4">
        <h2 className="text-[25px] mt-[64px] font-semibold dark:text-white">
          회원가입
        </h2>
        <button
          onClick={handleButtonClick}
          className="w-full h-[44px] mt-4 text-[13px] bg-[#2C2C2C] text-white rounded-md hover:bg-[#474747] focus:outline-none"
        >
          일반 회원가입
        </button>

        <button className="w-full h-[44px] bg-[#FEE500] text-[13px] text-[#2C2C2C] rounded-md hover:bg-[#d4c00b] focus:outline-none flex items-center justify-center gap-2">
          <img src={kakao} alt="kakao" className="w-[20px] h-[16px]" />
          카카오로 회원가입
        </button>

        <div className="flex justify-center items-center text-[11px] mt-4 gap-2">
          <p className="text-[#757575] dark:text-white">이미 회원이신가요?</p>
          <Link
            to="/auth/login"
            className="text-[#222222] underline dark:text-white"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
