import React from "react";
import styled, { css } from "styled-components";

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

const FooterGuest = (props) => {
  return (
    <>
      <Gradient {...props} />
      <FooterBar {...props}>
        {FooterList.map((list, index) => (
          <TextBtn key={index}>{list}</TextBtn>
        ))}
      </FooterBar>
    </>
  );
};

export default FooterGuest;

////////////////////스타일드 컴포넌트///////////////////////////

const Gradient = styled.div`
  position: fixed;

  width: 100vw;
  height: 200px;
  z-index: 150;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  bottom: ${(props) => (props.downScreen ? "-200px" : "0px")};
  transition: ${(props) =>
    props.downScreen
      ? "bottom 0.5s ease-in-out 0.5s"
      : "bottom 1s ease-in-out 1s"};
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

  opacity: ${(props) => (props.downScreen ? 1 : 0)};
  transition: ${(props) =>
    props.downScreen
      ? "opacity 0.5s ease-in-out 1.5s"
      : "opacity 1s ease-in-out"};
  pointer-events: ${(props) => (props.downScreen ? "auto" : "none")};
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
