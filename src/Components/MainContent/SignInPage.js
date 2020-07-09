import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FacebookSVG, GoogleSVG, PinterestSVG, KakaoSVG } from "./SvgPath";
import axios from "axios";
import KakaoSignUp from "./KakaoSignUp";

const GetInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailValidity(e.target.validity.valid);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setPasswordValidity(e.target.validity.valid);
  };

  const submitInfo = () => {
    const userInfo = {
      email: email,
      password: password,
      age: 99,
    };

    // 회원가입
    axios
      .post("http://10.58.0.152:8000/account/sign-up", userInfo)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    //로그인
    axios
      .post("http://10.58.2.242:8000/account/sign-in", userInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
      });
  };

  return {
    email,
    password,
    emailValidity,
    passwordValidity,
    changeEmail,
    changePassword,
    submitInfo,
  };
};

const SignInPage = (props) => {
  const SignInfo = GetInput();
  return (
    <SignContainer {...props}>
      <SignTextWrap {...props}>
        <SignText>가입하여 더 많은 아이디어를 만나 보세요</SignText>
      </SignTextWrap>
      <SignBoxWrap {...[props]}>
        <SignBox isModal={props.isModal}>
          <Logo>
            <svg viewBox="0 0 24 24">
              <circle />
              <path d={PinterestSVG} />
            </svg>
          </Logo>
          <WelcomeText>Pinterest에 오신 것을 환영합니다</WelcomeText>
          <IdeaText>시도해 볼 만한 새로운 아이디어 찾기</IdeaText>
          <InputBox
            type="email"
            placeholder="이메일"
            value={SignInfo.email}
            onChange={SignInfo.changeEmail}
            isValidity={SignInfo.emailValidity}
          />
          {!SignInfo.emailValidity && SignInfo.email.length > 0 && (
            <ErrorText>올바른 이메일 주소가 아닙니다.</ErrorText>
          )}

          <InputBox
            type="password"
            pattern=".{0}|.{6,}"
            placeholder="비밀번호를 입력하세요"
            value={SignInfo.password}
            onChange={SignInfo.changePassword}
            isValidity={SignInfo.passwordValidity}
          />
          {!SignInfo.passwordValidity && SignInfo.password.length > 0 && (
            <ErrorText> 비밀번호가 너무 짧네요! 6자 이상 입력하세요.</ErrorText>
          )}

          <ContinueBtn onClick={SignInfo.submitInfo}>계속하기</ContinueBtn>
          <OrText>또는</OrText>
          {/* <FacebookBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d={FacebookSVG} fill="white" />
            </svg>
            Facebook으로 계속하기
          </FacebookBtn> */}
          <GoogleBtn>
            <svg
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d={GoogleSVG[0]} fill="#4285f4" />
              <path d={GoogleSVG[1]} fill="#34a853" />
              <path d={GoogleSVG[2]} fill="#fbbc04" />
              <path d={GoogleSVG[3]} fill="#ea4335" />
            </svg>
            Google로 계속하기
          </GoogleBtn>
          <KakaoSignUp />
          {/* <KakaoBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 256 256"
            >
              <path d={KakaoSVG} />
            </svg>
            카카오로 계속하기
          </KakaoBtn> */}
          <LawText>
            계속하면 Pinterest 서비스 약관 및 개인정보 보호정책에 동의하는
            것으로 간주됩니다.
          </LawText>
          <IsSignBtn>이미 회원이신가요? 로그인하기</IsSignBtn>
          <BusinessBtn>Business 계정 만들기</BusinessBtn>
        </SignBox>
      </SignBoxWrap>
    </SignContainer>
  );
};

export default SignInPage;

////////////////////스타일드 컴포넌트///////////////////////////

const SignContainer = styled.div`
  z-index: 100;

  position: absolute;
  top: 0vh;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.downScreen || props.isModal ? 1 : 0)};
  transition: ${(props) =>
    props.downScreen && !props.isModal
      ? "opacity 0.5s ease-in-out 1.5s"
      : "opacity 1s ease-in-out"};
  pointer-events: ${(props) =>
    props.downScreen || props.isModal ? "auto" : "none"};
`;
const SignTextWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
  height: 100vh;
  visibility: ${(props) => (props.isModal ? "hidden" : "visible")};
  pointer-events: ${(props) => (!props.isModal ? "auto" : "none")};
`;

const SignText = styled.div`
  width: 390px;
  height: 360px;
  color: white;
  font-size: 70px;
  font-weight: 600;
  margin-right: 50px;
  line-height: 120%;
`;

const SignBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 100vh;
  visibility: ${(props) => (props.isModal ? "hidden" : "visible")};
`;

const SignBox = styled.div`

  position: ${(props) => (props.isModal ? "absolute" : "relative")};
  left: ${(props) => (props.isModal ? "30%" : "0px;")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 410px;
  height: 620px;
  background-color: white;
  min-height: 400px;
  margin-left: 50px;
  border-radius: 24px;
  overflow: hidden;
  /* opacity: ${(props) => (props.isModal ? "visible" : "hidden")}; */
`;

const Logo = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 20px;
  svg {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    circle {
      cx: 36;
      cy: 36;
      fill: white;
      r: 40;
    }

    path {
      fill: rgb(230, 0, 35);
      fill-rule: evenodd;
    }
  }
`;

const WelcomeText = styled.div`
  font-size: 30px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  margin: 10px 30px 0px 30px;
`;

const IdeaText = styled.div`
  font-size: 14px;
  font-weight: thin;

  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputBox = styled.input`
  width: 240px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 15px;
  border-color: rgb(235, 235, 235);
  border-style: solid;
  margin: 3px 0px 3px 0px;
  padding-left: 10px;

  &:focus {
    ${(props) =>
      props.isValidity || props.value.length === 0
        ? css`
            outline: none;
            box-shadow: 0 0 0 3px #8ac4ff;
          `
        : css`
            outline: none;
            box-shadow: 0 0 0 3px rgb(230, 0, 35);
          `}
  }
  &::placeholder {
  }
`;
const ErrorText = styled.div`
  text-align: left;
  width: 240px;
  font-size: 10px;
  color: rgb(230, 0, 35);
  margin: 3px 0px 3px 0px;
`;

const ContinueBtn = styled.button`
  flex-shrink: 0;
  margin-top: 5px;
  width: 240px;
  height: 40px;
  border: none;
  background-color: rgb(230, 0, 35);
  cursor: pointer;
  border-radius: 24px;
  color: white;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const OrText = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin: 15px;
`;

const FacebookBtn = styled.button`
  flex-shrink: 0;
  padding-left: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 240px;
  height: 40px;
  border: none;
  background-color: #1977f2;
  cursor: pointer;
  border-radius: 24px;
  color: white;
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

const GoogleBtn = styled(FacebookBtn)`
  padding-left: 10px;
  background-color: rgb(235, 235, 235);
  color: black;
`;

const KakaoBtn = styled(FacebookBtn)`
  padding-left: 5px;
  background-color: #fee500;
  color: black;
`;

const LawText = styled.div`
  width: 240px;
  font-size: 8px;
  font-weight: thin;
  text-align: center;
  margin: 20px;
`;

const IsSignBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const BusinessBtn = styled.button`
  position: absolute;
  flex-shrink: 0;
  bottom: 0px;
  border: none;
  background-color: rgb(235, 235, 235);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  height: 48px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
