import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/title.png";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/dark-slice";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <header className="w-[1440px] h-[100px]">
      <div className="fixed z-50 flex w-[1440px] h-[100px] items-center gap-[180px] px-[110px] py-[30px] bg-white dark:bg-black">
        <Link to="/">
          <img
            className="relative w-[226px] h-[53px] mt-[-2.00px] mb-[-2.00px] object-cover dark:invert"
            alt="Element"
            src={logo}
            onClick={scrollTop}
          />
        </Link>
        <nav className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
          <Link to="/">
            <p className="header-menu dark:text-white" onClick={scrollTop}>
              HOME
            </p>
          </Link>
          <Link to="/care-search">
            <p className="header-menu dark:text-white" onClick={scrollTop}>
              관리법 검색
            </p>
          </Link>
          <Link to="/label-ex">
            <p className="header-menu dark:text-white" onClick={scrollTop}>
              세탁기호 분석
            </p>
          </Link>
          <Link to="/label-search">
            <p className="header-menu dark:text-white" onClick={scrollTop}>
              세탁기호 찾기
            </p>
          </Link>
        </nav>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="absolute right-16"
        >
          {darkMode ? (
            <FiMoon className="w-8 h-8 p-1 invert" />
          ) : (
            <FiSun className="w-8 h-8 p-1" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
