import React, { useState } from "react";
//import { GoogleLogin } from "react-google-login";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";
import { KakaoSVG } from "./Config";
import axios from "axios";

const KakaoSignUp = ({ isCategory, setIsCategory }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [provider, setProvider] = useState("");

  const responseKakao = (res) => {
    setId(res.profile.id);
    setName(res.profile.properties.nickname);
    setProvider("kakao");

    localStorage.setItem("access_token", res.response.access_token);
    setIsCategory(res.response.access_token ? true : false);

    axios
      .post(
        "http://10.58.0.152:8000/account/kakao_login",
        {},
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((axRes) => {
        console.log(axRes);
      });
  };

  const responseFail = (err) => {
    console.error(err);
  };

  return (
    <Container>
      <KakaoButton
        jsKey={"5687f9542fe584e45f25e17a6c34f950"}
        buttonText="Kakao"
        onSuccess={responseKakao}
        onFailure={responseFail}
        getProfile="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 256 256"
        >
          <path d={KakaoSVG} />
        </svg>
        카카오로 계속하기
      </KakaoButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const KakaoButton = styled(KakaoLogin)`
  flex-shrink: 0;
  padding-left: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 240px;
  height: 40px;
  border: none;
  background-color: #fee500;
  cursor: pointer;
  border-radius: 24px;
  color: black;
  font-size: 15px;
  font-weight: 600;
  svg {
    position: absolute;
    left: 10px;
    border-radius: 50%;
    path {
    }
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default KakaoSignUp;
