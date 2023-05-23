import { KAKAO_AUTH_URL } from "../OAuth";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-[#f7f7f7] py-16">
      <div className="border-gray min-w-[320px] overflow-auto rounded-md border-[1px] border-solid bg-white p-8">
        <div className="flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 93 28" className="h-24 w-24">
              <path
                d="M4.77051 23H8.68066L11.626 13.7578L14.5967 23H18.5068L22.874 9.28906H18.9639L16.4248 18.0996L13.4541 9.28906H9.79785L6.82715 18.0996L4.28809 9.28906H0.37793L4.77051 23ZM22.8486 16.1191C22.8486 19.6865 25.1084 23.3301 29.5264 23.3301C31.0371 23.3428 32.332 22.9111 33.3857 22.1621V23H36.9658V9.28906H33.3857V10.127C32.332 9.37793 31.0371 8.94629 29.5264 8.95898C25.1084 8.95898 22.8486 12.5518 22.8486 16.1191ZM26.3271 16.1191C26.3145 13.6689 27.9902 12.2725 29.9326 12.2598C31.8496 12.2725 33.3604 13.6309 33.3604 16.0938C33.3604 18.5693 31.8496 20.0166 29.9326 20.0039C27.9268 20.0166 26.3145 18.5693 26.3271 16.1191ZM39.1494 23H42.8564V15.1035C42.8564 13.5166 43.7832 12.2725 45.4209 12.2598C47.1855 12.2725 47.9346 13.4658 47.9346 15.002V23H51.6416V14.3418C51.6416 11.3457 50.0928 8.9209 46.6904 8.9082C45.2432 8.9209 43.6309 9.54297 42.7803 10.8887V9.28906H39.1494V23ZM52.708 12.5645H55.1963V18.9375C55.1963 21.6035 56.8594 23.3301 59.5381 23.3301C60.6172 23.3301 61.29 23.1396 61.6201 23V19.7754C61.4297 19.8516 60.9219 19.9023 60.4775 19.9023C59.4238 19.9023 58.8779 19.5088 58.8779 18.3027V12.5645H61.6201V9.28906H58.8779V4.69336L55.2471 6.2168V9.28906H52.708V12.5645ZM62.8389 16.1445C62.8389 20.0928 65.3652 23.3428 69.5166 23.3301C72.5381 23.3428 74.7217 21.6035 75.6865 19.0898L72.3857 18.4043C71.8398 19.585 70.8369 20.3594 69.5166 20.3594C67.752 20.3594 66.5586 18.9756 66.2666 17.1094H76.1436C76.1816 16.792 76.1943 16.4746 76.1943 16.1445C76.1943 11.9551 73.4395 8.95898 69.5166 8.95898C65.4414 8.95898 62.8389 12.1836 62.8389 16.1445ZM66.4443 14.5449C66.9014 13.1992 67.9932 12.2598 69.5166 12.2598C71.04 12.2598 72.1445 13.1992 72.6143 14.5449H66.4443ZM77.4131 16.1191C77.4131 20.1055 79.9395 23.3428 84.0908 23.3301C85.6016 23.3428 86.8965 22.8984 87.9502 22.1621V23L91.5049 23.0254V3.27148L87.874 4.69336V10.0762C86.7568 9.32715 85.4365 8.95898 84.0908 8.95898C80.0029 8.95898 77.4131 12.1201 77.4131 16.1191ZM80.8662 16.1191C80.8662 13.6562 82.542 12.2725 84.4717 12.2598C86.4141 12.2725 87.9121 13.6309 87.9248 16.0684C87.9121 18.5693 86.4141 20.0166 84.4717 20.0039C82.4912 20.0166 80.8662 18.5693 80.8662 16.1191Z"
                fill="var(--theme-palette-colors-black-100)"
              ></path>
            </svg>
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
            ></input>
            <div className="flex justify-center">
              <button className="mt-3 rounded-full bg-[#3366ff] px-10 py-3 text-[13px] font-bold text-white shadow-md disabled:bg-[#f5f5f5] disabled:text-[#6d6d6d]">
                이메일로 계속하기
              </button>
            </div>
          </form>
          <p className="my-5 text-center text-[12px] font-semibold text-[#808080]">
            또는
          </p>
          <div>
            <div className="mb-4 flex items-center justify-center">
              <GoogleLogin
                buttonText="Google Login"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const decodeding = jwt_decode(credentialResponse.credential);
                  console.log(decodeding.name);
                  localStorage.setItem("user", decodeding.name);
                  navigate("/");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>

            <div className="flex justify-evenly gap-8">
              <Link to={KAKAO_AUTH_URL}>
                <svg viewBox="0 0 57 56" className="mb-2 h-12 w-12">
                  <path
                    d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                    fill="#FEE500"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z"
                    fill="#181600"
                  ></path>
                </svg>
                <p className="text-center text-[12px] text-[#888888]">Kakao</p>
              </Link>
              <Link to="/">
                <svg viewBox="0 0 57 56" className="mb-2 h-12 w-12">
                  <path
                    d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                    fill="#1877F2"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.5 14.2855C20.9256 14.2855 14.7857 20.4253 14.7857 27.9997C14.7857 34.8445 19.801 40.5181 26.3578 41.5467V31.9645H22.8744V27.9997H26.3578V24.9785C26.3578 21.5417 28.404 19.6423 31.5377 19.6423C33.038 19.6423 34.607 19.9111 34.607 19.9111V23.2848H32.8776C31.1743 23.2848 30.6422 24.3421 30.6422 25.4269V27.9997H34.4465L33.839 31.9645H30.6422V41.5467C37.199 40.5181 42.2143 34.8445 42.2143 27.9997C42.2143 20.4253 36.0744 14.2855 28.5 14.2855Z"
                    fill="#fff"
                  ></path>
                </svg>
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
