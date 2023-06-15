import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { REDIRECT_URI } from "./OAuth";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 추출
  const grant_type = "authorization_code";
  const client_id = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // 1. 인가코드 전달하여 토큰 발급받기
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        const access_token = res.data.access_token;

        if (access_token) {
          // 토큰 저장
          localStorage.setItem("token", access_token);

          // 2. 사용자 정보 받아오기
          // axios
          //   .post(
          //     "https://kapi.kakao.com/v2/user/me",
          //     {},
          //     {
          //       headers: {
          //         Authorization: `Bearer ${access_token}`,
          //       },
          //     }
          //   )
          //   .then((res) => {
          //     console.log("Kakao 사용자 정보 가져오기 성공!");
          //     console.log(`닉네임: ${res.data.properties.nickname}`);
          //     console.log(`이메일: ${res.data.kakao_account.email}`);
          //     localStorage.setItem("socialUser", res.data.properties.nickname);
          //   });

          // 2. 백엔드로 토큰 보내기
          axios
            .get("https://wantedclone.com/login/", {
              params: {
                code: access_token,
              },
            }) // 사용자 정보 받기
            .then((res) => {
              // const nickName = res.nickName;
              // const email = res.email;

              console.log(res);
              navigate("/");
            });
        }
      });
  }, []);

  return <></>;
};

export default KakaoCallback;
