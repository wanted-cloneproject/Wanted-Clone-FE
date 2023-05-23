import { useState } from "react";
import { Link } from "react-router-dom";

import MenuModal from "./MenuModal";
import SearchModal from "./SearchModal";

const MyHeader = () => {
  const [menuModalState, setMenuModalState] = useState(false);
  const [searchModalState, setSearchModalState] = useState(false);
  const socialLoginUser = localStorage.getItem("user");
  const emailUser = localStorage.getItem("email");

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
            <svg width="74" height="21" viewBox="0 0 140 32">
              <path
                fill="currentColor"
                d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
              ></path>
            </svg>
          </Link>
        </div>
        <ul className="flex h-full items-center">
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/" className="flex gap-1">
              채용
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/" className="flex gap-1">
              이벤트
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/" className="flex gap-1">
              직군별 연봉
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/resume" className="flex gap-1">
              이력서
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/" className="flex gap-1">
              커뮤니티
              <em>
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    font-size="9"
                    font-weight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </em>
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/" className="flex gap-1">
              프리랜서
            </Link>
          </li>
          <li className="flex h-full items-center whitespace-nowrap px-[15px] font-bold hover:border-b-[2px] hover:border-gray-300">
            <Link to="/ai" className="flex gap-1">
              AI 합격예측
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                  font-size="9"
                  font-weight="500"
                >
                  <g fill="#36F">
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                  <tspan x="0" y="8">
                                    Beta
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="cursor-pointer hover:fill-[#3366ff]"
              onClick={searchSwitchModal}
            >
              <path
                id="qt2dnsql4a"
                d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
              ></path>
            </svg>

            <Link to={"/login"}>
              <button className="font-semibold">회원가입/로그인</button>
            </Link>
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
