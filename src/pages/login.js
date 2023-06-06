import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import { KAKAO_AUTH_URL } from "../OAuth";
import GoogleLoginBtn from "../GoogleLoginBtn";
import KakaoSVG from "../assets/icons/kakao";
import FacebookSVG from "../assets/icons/facebook";
import LoginLogoSVG from "../assets/icons/loginLogo";

const User = {
  email: "harim668@gmail.com",
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (email) => {
    setEmail(email);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const onClickConfirmBtn = () => {
    if (email !== User.email && email.length > 0)
      alert("존재하지 않는 이메일입니다.");
    else {
      localStorage.setItem("emailUser", "임하림");
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#f7f7f7] py-16">
      <div className="border-gray min-w-[320px] overflow-auto rounded-md border-[1px] border-solid bg-white p-8">
        <div className="flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <LoginLogoSVG />
          </div>
          <h1 className="text-center text-[21px] font-bold leading-6 tracking-tighter">
            하나의 계정으로 <br /> 더욱 편리하게
          </h1>
          <p className="my-6 text-center text-[12px] leading-4 tracking-tight text-[#a7a5a5]">
            원티드가 제공하는 서비스를 <br /> 하나의 계정으로 모두 이용할 수
            있습니다.
          </p>
          <form className="my-2">
            <label for="email" className="text-[14px] font-bold text-[#8b8b8b]">
              이메일
            </label>
            <input
              id="email"
              type="email"
              className="border-gray mt-3 block w-full border-[1px] border-solid p-2"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
            ></input>
            {!emailValid && email.length > 0 ? (
              <div className="ml-1 mt-1 text-[11px] font-semibold text-red-500">
                올바른 이메일을 입력해주세요
              </div>
            ) : (
              ""
            )}
            <div className="flex justify-center">
              <button
                disabled={!emailValid}
                onClick={onClickConfirmBtn}
                className="mt-3 rounded-full bg-[#3366ff] px-10 py-3 text-[13px] font-bold text-white shadow-md disabled:bg-[#f5f5f5] disabled:text-[#6d6d6d]"
              >
                이메일로 계속하기
              </button>
            </div>
          </form>
          <p className="my-5 text-center text-[12px] font-semibold text-[#808080]">
            또는
          </p>
          <div>
            <div className="flex items-center justify-center mb-4">
              <GoogleLoginBtn />
            </div>

            <div className="flex gap-8 justify-evenly">
              <Link to={KAKAO_AUTH_URL}>
                <KakaoSVG />
                <p className="text-center text-[12px] text-[#888888]">Kakao</p>
              </Link>
              <Link to="/">
                <FacebookSVG />
                <p className="text-center text-[12px] text-[#888888]">
                  Facebook
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
