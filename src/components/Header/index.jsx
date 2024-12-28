import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/title.png";
import alert from "../../assets/images/icons/alert.png";
import closet from "../../assets/images/icons/closet.png";
import profile from "../../assets/images/icons/profile.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/dark-slice";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header = ({ isAuthenticated, onLogout }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <header className="w-full max-w-[1440px] mx-auto h-[85px]">
      <div className="fixed z-50 flex items-center justify-between w-[1440px] h-[85px] pr-[109px] pl-[20px] py-[22px] bg-white dark:bg-black">
        <nav className="flex items-center gap-[30px]">
          <Link to="/">
            <p className="header-menu text-[17px] dark:text-white">HOME</p>
          </Link>
          <Link to="/qna-board">
            <p className="header-menu text-[17px] dark:text-white">
              QnA 커뮤니티
            </p>
          </Link>
          <Link to="/label-ex">
            <p className="header-menu text-[17px] dark:text-white">
              세탁기호 분석
            </p>
          </Link>
          <Link to="/label-search">
            <p className="header-menu text-[17px] dark:text-white">
              세탁기호 찾기
            </p>
          </Link>
        </nav>
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img
            className="w-[168px] h-[40px] object-cover dark:invert"
            alt="Element"
            src={logo}
          />
        </Link>

        {isAuthenticated ? (
          <nav className="flex items-center gap-[30px]">
            <p
              className="header-menu text-[17px] cursor-pointer dark:text-white"
              onClick={onLogout}
            >
              로그아웃
            </p>
            <Link to="/">
              <img
                className="h-[18px] object-cover dark:invert"
                alt="Alert"
                src={alert}
              />
            </Link>
            <Link to="/closet">
              <img
                className="h-[18px] object-cover dark:invert"
                alt="Closet"
                src={closet}
              />
            </Link>
            <Link to="/user">
              <img
                className="h-[18px] object-cover dark:invert"
                alt="Profile"
                src={profile}
              />
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-[30px]">
            <Link to="/auth/login">
              <p className="header-menu text-[17px] dark:text-white">로그인</p>
            </Link>
            <Link to="/auth/signup">
              <p className="header-menu text-[17px] dark:text-white">
                회원가입
              </p>
            </Link>
          </nav>
        )}
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="absolute right-8"
        >
          {darkMode ? (
            <FiMoon className="w-8 h-8 p-1 invert" />
          ) : (
            <FiSun className="w-8 h-8 p-1" />
          )}
        </button>
      </div>
      <div className="w-full h-[85px] bg-gray-200"></div>
    </header>
  );
};

export default Header;
