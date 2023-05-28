import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = () => {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      buttonText="Google Login"
      onSuccess={(credentialResponse) => {
        const decodeding = jwt_decode(credentialResponse.credential);

        console.log("Google 사용자 정보 가져오기 성공!");
        console.log(`이름: ${decodeding.name}`);
        console.log(`이메일: ${decodeding.email}`);
        localStorage.setItem("socialUser", decodeding.name);
        navigate("/");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginBtn;
