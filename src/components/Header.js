import { useState } from "react";
import { Link } from "react-router-dom";

import MenuModal from "./MenuModal";
import SearchModal from "./SearchModal";

import LogoSVG from "../assets/icons/logo";
import NewSVG from "../assets/icons/new";
import BetaSVG from "../assets/icons/beta";
import SearchSVG from "../assets/icons/search";
import NotificationSVG from "../assets/icons/notification";

const MyHeader = () => {
  const [menuModalState, setMenuModalState] = useState(false);
  const [searchModalState, setSearchModalState] = useState(false);
  const socialUser = localStorage.getItem("socialUser");
  const emailUser = localStorage.getItem("emailUser");

  // 모달창 on/off
  const menuSwitchModal = () => {
    setMenuModalState((current) => !current);
  };

  const searchSwitchModal = () => {
    setSearchModalState((current) => !current);
  };

  return (
    <header className="border-gray fixed z-10 h-[50px] w-full border-b-[1px] border-solid bg-white">
      <nav className="header-r mx-auto flex h-full max-w-[1060px] justify-between text-[13px]">
        <div className="flex items-center gap-4">
          <button onClick={menuSwitchModal}>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75"
              alt="hamberger menu"
              height="14"
              className="h-[14px] w-[17px] object-contain"
            />
          </button>
          <Link to="/">
            <LogoSVG />
          </Link>
        </div>
        <ul className="flex h-full items-center">
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/incomplete" className="flex gap-1">
              채용
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/incomplete" className="flex gap-1">
              이벤트
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/incomplete" className="flex gap-1">
              직군별 연봉
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/cv" className="flex gap-1">
              이력서
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/incomplete" className="flex gap-1">
              커뮤니티
              <NewSVG />
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/incomplete" className="flex gap-1">
              프리랜서
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/ai" className="flex gap-1">
              AI 합격예측
              <BetaSVG />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <button onClick={searchSwitchModal}>
              <SearchSVG />
            </button>

            {socialUser || emailUser ? (
              <div className="flex items-center justify-center gap-4">
                <button>
                  <NotificationSVG />
                </button>
                <button>
                  <div class="h-7 w-7 rounded-full border-[3px] border-solid border-[#e9e9e9] bg-[url('https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png')] bg-cover"></div>
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="font-semibold">회원가입/로그인</button>
              </Link>
            )}
          </div>
          <div className="text-[#e1e2e3]">|</div>
          <div>
            <button className="border-gray rounded-full border-[1px] px-3 py-[6px] text-[11px] text-[#666666] hover:bg-[#e1e2e4]">
              기업 서비스
            </button>
          </div>
        </div>
      </nav>
      {menuModalState && <MenuModal />}
      {searchModalState && <SearchModal />}
    </header>
  );
};

export default MyHeader;
