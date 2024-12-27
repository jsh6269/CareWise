import kakao from "../assets/images/icons/kakao.png";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth/signup/details");
  };
  return (
    <div className="w-[1440px] h-[1024px] flex justify-center bg-white">
      <div className="w-[1044px] h-[422px] mt-[170px] shadow-custom-light rounded-2xl bg-white justify-center items-center flex flex-col gap-[20px]">
        <h2 className="text-[25px] font-semibold">회원가입이 완료되었어요!</h2>
        <div className="flex justify-center items-center text-[#757575] text-[15px] flex flex-col mt-4 gap-2">
          <p>이메일 인증 후, 케어와이즈의 기능을 활용해보세요.</p>
          <p>메일로 전송된 링크를 눌러서 인증해주세요.</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
