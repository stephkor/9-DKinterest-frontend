import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import NavGuest from "Components/MainContent/NavGuest";
import TitleGuest from "Components/MainContent/TitleGuest";
import SignInPage from "Components/MainContent/SignInPage";
import FooterGuest from "Components/MainContent/FooterGuest";
import ImgBox from "Components/MainContent/ImgBox";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const useScroll = () => {
  const [isDownScreen, setIsDownScreen] = useState(false);
  const [isLock, setIsLock] = useState(false);
  const [isModal, setIsModal] = useState(false);

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
  }, [isDownScreen, onScroll]);
  return {
    isModal,
    setIsModal,
    isDownScreen,
    isLock,
    setIsLock,
    setIsDownScreen,
  };
};

const Main = () => {
  const screenState = useScroll();

  return (
    <>
      <body>
        <Body>
          <IconWrap downScreen={screenState.isDownScreen}>
            <Arrow style={{ fontSize: 50 }} />
          </IconWrap>
          <NavGuest
            downScreen={screenState.isDownScreen}
            handleLock={screenState.setIsLock}
            isLock={screenState.isLock}
            isModal={screenState.isModal}
            handleModal={screenState.setIsModal}
          />

          <TitleGuest downScreen={screenState.isDownScreen} />
          <ImgBox downScreen={screenState.isDownScreen} />
          <SignInPage
            downScreen={screenState.isDownScreen}
            isModal={screenState.isModal}
            handleModal={screenState.setIsModal}
          />
          <FooterGuest downScreen={screenState.isDownScreen} />
        </Body>
      </body>
    </>
  );
};

export default Main;

////////////////////스타일드 컴포넌트///////////////////////////

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const IconWrap = styled.div`
  position: fixed;
  bottom: 35px;
  left: 48.5vw;
  z-index: 1000;
  ${(props) =>
    props.downScreen
      ? css`
          opacity: 0;
          transition: opacity 0.5s ease-in-out 0.3s;
        `
      : css`
          opacity: 1;
          transition: opacity 0.5s ease-in-out 1.5s;
        `}
`;

const Arrow = styled(ExpandMoreRoundedIcon)`
  color: white;

  background-color: #c28b00;
  border-radius: 50%;
  cursor: pointer;
`;
