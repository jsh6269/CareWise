import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupDetailsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    nickname: "",
    confirmPassword: "",
  });

  const fieldNames = {
    username: "아이디",
    email: "이메일",
    nickname: "닉네임",
  };

  // 중복 확인 함수
  const checkDuplicate = (field, value) => {
    const existingMockData = {
      username: ["user1"],
      email: ["test@example.com"],
      nickname: ["nickname1"],
    };

    if (existingMockData[field]?.includes(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `이미 존재하는 ${fieldNames[field]}입니다.`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  // 비밀번호 확인 함수
  const validatePasswordMatch = () => {
    if (formData.password && formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          formData.password !== formData.confirmPassword
            ? "비밀번호가 일치하지 않습니다."
            : "",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  // `formData`의 password나 confirmPassword가 변경될 때 validatePasswordMatch 호출
  useEffect(() => {
    validatePasswordMatch();
  }, [formData.password, formData.confirmPassword]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // 중복 확인이 필요한 필드
    if (name === "username" || name === "email" || name === "nickname") {
      checkDuplicate(name, value);
    }
  };

  // 회원가입 요청 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(errors).some((error) => error !== "")) {
      console.log("모의 회원가입 요청:", formData);
      navigate("/auth/signup/confirm");
    }
  };

  return (
    <div className="w-[1440px] h-[1024px] flex justify-center bg-white dark:bg-black">
      <div className="w-[1045px] h-[830px] px-[61px] mt-[170px] shadow-custom-light rounded-2xl bg-white dark:bg-zinc-800 flex flex-col">
        <h2 className="text-[25px] mt-[64px] font-semibold dark:text-white">
          회원가입
        </h2>

        <label
          htmlFor="username"
          className="text-[16px] font-medium text-gray-700 mt-[42px] dark:text-white"
        >
          아이디
        </label>
        <input
          id="username"
          name="username"
          required
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="아이디를 입력하세요"
          className={`w-full h-12 px-[16px] text-[14px] mt-[6px] border ${
            errors.username ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300`}
        />
        {errors.username && (
          <p className="text-red-500 text-[12px] mt-1">{errors.username}</p>
        )}

        <label
          htmlFor="email"
          className="text-[16px] font-medium text-gray-700 mt-[29px] dark:text-white"
        >
          이메일
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
          className={`w-full h-12 px-[16px] text-[14px] mt-[6px] border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300`}
        />
        {errors.email && (
          <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
        )}

        <label
          htmlFor="password"
          className="text-[16px] font-medium text-gray-700 mt-[29px] dark:text-white"
        >
          비밀번호
        </label>
        <input
          id="password"
          name="password"
          required
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
          className="w-full h-12 px-[16px] text-[14px] mt-[6px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        <label
          htmlFor="confirmPassword"
          className="text-[16px] font-medium text-gray-700 mt-[29px] dark:text-white"
        >
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          required
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호를 다시 입력하세요"
          className={`w-full h-12 px-[16px] text-[14px] mt-[6px] border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-[12px] mt-1">
            {errors.confirmPassword}
          </p>
        )}

        <label
          htmlFor="nickname"
          className="text-[16px] font-medium text-gray-700 mt-[29px] dark:text-white"
        >
          닉네임 {"("}최대 10글자{")"}
        </label>
        <input
          id="nickname"
          name="nickname"
          required
          type="text"
          value={formData.nickname}
          onChange={handleChange}
          maxLength={10}
          placeholder="닉네임을 입력하세요"
          className={`w-full h-12 px-[16px] text-[14px] mt-[6px] border ${
            errors.nickname ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300`}
        />
        {errors.nickname && (
          <p className="text-red-500 text-[12px] mt-1">{errors.nickname}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-[332px] h-[44px] mt-[65px] ml-[329px] text-[13px] bg-[#2C2C2C] dark:bg-zinc-600 dark:hover:bg-zinc-500 text-white rounded-md hover:bg-[#474747] focus:outline-none dark:text-white"
        >
          회원가입하기
        </button>
      </div>
    </div>
  );
};

export default SignupDetailsPage;
