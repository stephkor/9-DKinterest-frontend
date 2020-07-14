import React from "react";
import styled from "styled-components";

const FooterGuest = ({ downScreen, isModal }) => {
  const FooterList = [
    "서비스 약관",
    "개인정보 보호정책",
    "도움말",
    "iphon 앱",
    "Android 앱",
    "사용자",
    "컬렉션",
    "주제",
  ];

  return (
    <>
      <Gradient downScreen={downScreen} isModal={isModal} />
      <FooterBar downScreen={downScreen}>
        {FooterList.map((list, index) => (
          <TextBtn key={index}>{list}</TextBtn>
        ))}
      </FooterBar>
    </>
  );
};

export default FooterGuest;

const Gradient = styled.div`
  position: fixed;

  width: 100vw;
  height: 200px;
  z-index: 150;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  bottom: ${({ downScreen }) => (downScreen ? "-200px" : "0px")};
  opacity: ${({ isModal }) => (isModal ? 0 : 1)};
  transition: ${({ downScreen }) =>
    downScreen ? "bottom 0.5s ease-in-out 0.5s" : "bottom 1s ease-in-out 1s"};
  pointer-events: ${({ isModal }) => (isModal ? "none" : "auto")};
`;

const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 43px;
  background-color: white;
  z-index: 100;

  opacity: ${({ downScreen }) => (downScreen ? 1 : 0)};
  transition: ${({ downScreen }) =>
    downScreen ? "opacity 0.5s ease-in-out 1.5s" : "opacity 1s ease-in-out"};

  pointer-events: ${({ downScreen }) => (downScreen ? "auto" : "none")};
`;

const TextBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 11px;
  font-weight: 500;
  margin-left: 17px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
