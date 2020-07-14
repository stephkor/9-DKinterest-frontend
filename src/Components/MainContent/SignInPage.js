import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  GoogleSVG,
  PinterestSVG,
  signUp,
  signIn,
  urlList,
  interestUrl,
} from "./Config";
import axios from "axios";
import KakaoSignUp from "./KakaoSignUp";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const SignInPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [interestImg, setInterestImg] = useState([]);
  const [interestId, setInterestId] = useState([]);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    axios
      .get(urlList[4])

      .then((res) => {
        setInterestImg(res.data);
      });
  }, []);

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailValidity(e.target.validity.valid);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setPasswordValidity(e.target.validity.valid);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const addInterest = (e) => {
    interestId.length < 5 && setInterestId(interestId.concat([e]));
    interestId.includes(e) &&
      setInterestId(interestId.filter((Id) => Id !== e));
  };

  const submitInfo = () => {
    handleLock(true);

    const userInfo = {
      email: email,
      password: password,
      age: age,
    };

    // 회원가입
    isSignUp
      ? axios.post(signUp, userInfo).then((res) => {
          setIsCategory(res.status === 200 ? true : false);
          console.log(res);
          console.log(res.data);
        })
      : //로그인
        axios.post(signIn, userInfo).then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          setIsCategory(res.status === 200 ? true : false);
          console.log(res);
        });
  };

  const submitInterest = () => {
    const interestInfo = { interestId: interestId };
    const accessToken = localStorage.getItem("access_token");

    axios
      .post(interestUrl, interestInfo, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        res.status === 200 && props.history.push("/home");
        console.log(res);
        console.log(res.data);
      });
  };

  const {
    isModal,
    isLock,
    downScreen,
    handleLock,
    handleModal,
    isSignUp,
    setIsSignUp,
    isCategory,
    setIsCategory,
    history,
  } = props;

  return (
    <>
      {!isCategory && (
        <IconWrap isModal={isModal}>
          <Arrow
            onClick={() => {
              handleLock(!isLock);
              handleModal(!isModal);
            }}
            id={"xIcon"}
          />
        </IconWrap>
      )}
      <SignContainer
        isModal={isModal}
        isCategory={isCategory}
        downScreen={downScreen}
      >
        {isCategory ? (
          <CategoryBox isCategory={isCategory}>
            <CategoryTitle>관심사를 알려주세요!</CategoryTitle>
            <CategoryGrid>
              {interestImg.length > 0 &&
                interestImg.map((item, index) => {
                  return (
                    <GridBox
                      onClick={() => addInterest(index + 1)}
                      key={index}
                      style={{ backgroundImage: `url(${item.url})` }}
                    >
                      <GrayBox
                        interestId={interestId}
                        selected={interestId.includes(index + 1)}
                        key={index}
                      >
                        <GridText>{item.title}</GridText>
                      </GrayBox>
                    </GridBox>
                  );
                })}
            </CategoryGrid>
            <CategoryBtn
              interestId={interestId}
              onClick={() => submitInterest()}
            >
              {interestId.length === 5
                ? "그만 눌러요..."
                : `${5 - interestId.length}개 더 선택`}
            </CategoryBtn>
          </CategoryBox>
        ) : (
          <>
            <SignTextWrap isModal={isModal}>
              <SignText>가입하여 더 많은 아이디어를 만나 보세요</SignText>
            </SignTextWrap>
            <SignBoxWrap isModal={isModal} downScreen={downScreen}>
              <SignBox isModal={isModal} isSignUp={isSignUp}>
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
                  value={email}
                  onChange={changeEmail}
                  isValidity={emailValidity}
                />
                {!emailValidity && email.length > 0 && (
                  <ErrorText>올바른 이메일 주소가 아닙니다.</ErrorText>
                )}

                <InputBox
                  type="password"
                  pattern=".{0}|.{6,}"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={changePassword}
                  isValidity={passwordValidity}
                />
                {!passwordValidity && password.length > 0 && (
                  <ErrorText>
                    비밀번호가 너무 짧네요! 6자 이상 입력하세요.
                  </ErrorText>
                )}
                {isSignUp && (
                  <InputBox
                    type="number"
                    placeholder="나이"
                    value={age}
                    onChange={changeAge}
                    isValidity={true}
                  />
                )}

                <ContinueBtn onClick={submitInfo}>
                  {isSignUp ? "계속하기" : "로그인"}
                </ContinueBtn>
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
                <KakaoSignUp
                  isCategory={isCategory}
                  setIsCategory={setIsCategory}
                />
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
                <IsSignBtn onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp
                    ? "이미 회원이신가요? 로그인하기"
                    : "아직 Pinterest를 사용하고 있지 않으신가요? 가입하기"}
                </IsSignBtn>
                {isSignUp && (
                  <BusinessBtn onClick={() => setIsBusiness(!isBusiness)}>
                    {isBusiness ? "개인 계정 만들기" : "Business 계정 만들기"}
                  </BusinessBtn>
                )}
              </SignBox>
            </SignBoxWrap>
          </>
        )}
      </SignContainer>
    </>
  );
};

export default SignInPage;

const IconWrap = styled.div`
  position: fixed;
  top: 25px;
  right: 30px;
  z-index: 1000;
  visibility: ${({ isModal }) => (isModal ? "visible" : "hidden")};
`;

const Arrow = styled(ClearRoundedIcon)`
  color: white;
  cursor: pointer;
  &#xIcon {
    font-size: 30px;
  }
`;

const SignContainer = styled.div`
  z-index: 100;

  position: absolute;
  top: 0vh;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ isModal, isCategory }) =>
    isModal && !isCategory ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)"};
  opacity: ${({ isModal, downScreen }) => (downScreen || isModal ? 1 : 0)};

  transition: ${({ downScreen }) =>
      downScreen ? "opacity 0.5s ease-in-out 1.5s" : "opacity 1s ease-in-out"},
    ${({ isModal }) =>
      isModal
        ? "background-color 0s ease-in-out 0s"
        : "background-color 0s ease-in-out 1.5s"};
  pointer-events: ${({ downScreen, isModal }) =>
    downScreen || isModal ? "auto" : "none"};
`;
const SignTextWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
  height: 100vh;
  visibility: ${({ isModal }) => (isModal ? "hidden" : "visible")};
  transition: ${({ isModal }) =>
    isModal ? "visibility 0s ease-in-out" : "visibility 0s ease-in-out 1.5s"};
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
  visibility: ${({ isModal, downScreen }) =>
    downScreen || isModal ? "visible" : "hidden"};
  transition: visibility 1s ease-in-out;
`;

const SignBox = styled.div`
  position: relative;
  left: ${({ isModal }) => (isModal ? "-30%" : "0px")};
  transition: ${({ isModal }) =>
    isModal ? " left 0s ease-in-out" : "left 0s ease-in-out 1.5s"};

  display: flex;
  box-shadow: 0px 0px 20px gray;
  flex-direction: column;
  align-items: center;
  width: 410px;
  height: ${({ isSignUp }) => (isSignUp ? "650px" : "580px")};
  background-color: white;
  min-height: 400px;
  margin-left: 50px;
  border-radius: 24px;
  overflow: hidden;
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
    ${({ isValidity, value }) =>
      isValidity || value === ""
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

const appearMove = keyframes`
  0%{
   opacity:0;
  }
  
  100%{
  opacity:1;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  position: absolute;
  background-color: white;
  z-index: 100000;
  left: 30%;
  top: 10%;
  width: 800px;
  height: 650px;
  animation: ${appearMove} 1s ease-in-out;
`;

const CategoryTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 60px 0px 60px 0px;
  text-align: center;
`;

const CategoryGrid = styled.div`
  overflow: scroll;
  background-color: white;
  position: relative;
  display: grid;
  width: 100%;
  height: 380px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 140px);
  grid-auto-flow: row;
  grid-auto-rows: 140px;
  grid-gap: 10px;
  padding: 0px 30px 0px 30px;
`;

const GridBox = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: center / cover no-repeat;
`;

const GrayBox = styled(GridBox)`
  background-color: ${({ selected }) =>
    selected ? "rgb(0, 0, 0, 0.8)" : "rgb(0, 0, 0, 0.2)"};

  &:hover {
    background-color: rgb(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const GridText = styled.div`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: white;
`;

const CategoryBtn = styled(FacebookBtn)`
  padding-left: 10px;
  background-color: ${({ interestId }) =>
    interestId.length === 5 ? "rgb(230, 0, 35)" : "rgb(235, 235, 235)"};
  color: ${({ interestId }) =>
    interestId.length === 5 ? "white" : "rgb(107, 107, 107)"};
  width: 700px;
  height: 60px;
  margin-top: 30px;
`;
