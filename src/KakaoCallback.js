import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 추출

  useEffect(() => {
    // 1. 인가코드 전달
    const url = `http://127.0.0.1:8000/api/?code=${code}`;
    axios.get(url).then((res) => {
      console.log("통신 성공", res);
    });
  }, []);

  return <></>;
};

export default KakaoCallback;
