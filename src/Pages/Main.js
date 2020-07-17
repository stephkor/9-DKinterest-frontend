import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import NavGuest from "Components/MainContent/NavGuest";
import TitleGuest from "Components/MainContent/TitleGuest";
import SignInPage from "Components/MainContent/SignInPage";
import FooterGuest from "Components/MainContent/FooterGuest";
import ImgBox from "Components/MainContent/ImgBox";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Flash, Bounce, FadeOut, FadeIn } from "animate-css-styled-components";

const Main = ({ history }) => {
  const [isDownScreen, setIsDownScreen] = useState(false);
  const [isLock, setIsLock] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [tabNum, setTabNum] = useState(0);
  const [changeImg, setChangeImg] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isCategory, setIsCategory] = useState(false);

  const onScroll = (event) => {
    if (!isLock) {
      if (event.deltaY > 0) {
        setIsDownScreen(true);
      } else if (event.deltaY < 0) {
        setIsDownScreen(false);
      } else {
        return;
      }

      return;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onScroll);

    return () => {
      window.removeEventListener("wheel", onScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLock]);

  return (
    <Body>
      {!isCategory && (
        <UpIconWrap downScreen={isDownScreen} isModal={isModal}>
          <UpArrow
            tabNum={tabNum}
            onClick={() => setIsDownScreen(!isDownScreen)}
            id={"upArrow"}
          />
        </UpIconWrap>
      )}

      <DownIconWrap downScreen={isDownScreen} isModal={isModal}>
        <DownArrow
          tabNum={tabNum}
          onClick={() => setIsDownScreen(!isDownScreen)}
          id={"downArrow"}
        />
      </DownIconWrap>

      <NavGuest
        downScreen={isDownScreen}
        handleLock={setIsLock}
        isLock={isLock}
        isModal={isModal}
        handleModal={setIsModal}
        setIsSignUp={setIsSignUp}
      />

      <TitleGuest
        downScreen={isDownScreen}
        changeTab={setTabNum}
        tabNum={tabNum}
        changeImg={changeImg}
        setChangeImg={setChangeImg}
      />
      <ImgBox downScreen={isDownScreen} tabNum={tabNum} changeImg={changeImg} />
      <SignInPage
        handleLock={setIsLock}
        isLock={isLock}
        downScreen={isDownScreen}
        isModal={isModal}
        handleModal={setIsModal}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
        isCategory={isCategory}
        setIsCategory={setIsCategory}
        history={history}
      />
      <FooterGuest downScreen={isDownScreen} isModal={isModal} />
    </Body>
  );
};

export default Main;

////////////////////스타일드 컴포넌트///////////////////////////

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const waveMoveDown = keyframes`
  0%{
    bottom:35px;
  }
  50%{
    bottom:10px;
  }
  100%{
    bottom:35px;
  }
`;

const DownIconWrap = styled.div`
  animation: ${waveMoveDown} 2s ease-in-out infinite;
  position: fixed;
  bottom: 35px;
  left: 48.5vw;
  z-index: 1000;
  visibility: ${({ isModal }) => (isModal ? "hidden" : "visible")};
  opacity: ${({ downScreen }) => (downScreen ? 0 : 1)};
  transition: ${({ downScreen }) =>
    downScreen ? "opacity 0.5s ease-in-out" : "opacity 0.5s ease-in-out 1.5s"};
`;

const DownArrow = styled(ExpandMoreRoundedIcon)`
  color: white;
  &#downArrow {
    font-size: 50px;
  }
  background-color: ${({ tabNum }) =>
    tabNum === 0
      ? "#c28b00"
      : tabNum === 1
      ? "#618C7B"
      : tabNum === 2
      ? "#0376D3"
      : "#407A57"};
  border-radius: 50%;
  cursor: pointer;
`;

const UpIconWrap = styled(DownIconWrap)`
  animation: none;
  transform: scaleY(-1);
  bottom: 90%;
  opacity: ${({ downScreen }) => (!downScreen ? 0 : 1)};
  transition: ${({ downScreen }) =>
    downScreen ? "opacity 0.5s ease-in-out 1.5s" : "opacity 0.5s ease-in-out"};
`;

const UpArrow = styled(ExpandMoreRoundedIcon)`
  color: black;
  &#upArrow {
    font-size: 50px;
  }
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;
