import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import kakao from "../assets/images/icons/kakao.png";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dummyAccount = { username: "yunheec", password: "yunhee0421" };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === dummyAccount.username &&
      password === dummyAccount.password
    ) {
      // 로그인 성공 시 onLogin 호출
      onLogin(); // 로그인 상태 변경
      navigate("/"); // 홈으로 리디렉션
    } else {
      alert("로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="w-[1440px] h-[1024px] flex justify-center bg-white dark:bg-black">
      <div className="w-[385px] h-[478px] px-[56px] mt-[170px] shadow-custom-light rounded-2xl bg-white dark:bg-black flex flex-col gap-4">
        <h2 className="text-[25px] mt-[64px] font-semibold dark:text-white">
          로그인
        </h2>

        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-12 mt-[20px] px-[16px] text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-[16px] text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <button
          type="submit"
          onClick={handleLogin}
          className="w-full h-[44px] mt-4 text-[13px] bg-[#2C2C2C] text-white rounded-md hover:bg-[#474747] focus:outline-none"
        >
          로그인
        </button>

        <button className="w-full h-[44px] bg-[#FEE500] text-[13px] text-[#2C2C2C] rounded-md hover:bg-[#d4c00b] focus:outline-none flex items-center justify-center gap-2">
          <img src={kakao} alt="kakao" className="w-[20px] h-[16px]" />
          카카오로 로그인
        </button>

        <div className="flex justify-center items-center text-[11px] mt-4 gap-2">
          <p className="text-[#757575] dark:text-white">계정이 없으신가요?</p>
          <Link
            to="/auth/signup"
            className="text-[#222222] underline dark:text-white"
          >
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
