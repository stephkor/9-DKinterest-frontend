import React from "react";
import styled, { css } from "styled-components";
import { PinterestSVG } from "./Config";

const NavGuest = ({
  handleLock,
  handleModal,
  isLock,
  isModal,
  downScreen,
  setIsSignUp,
}) => {
  return (
    <>
      <NavBox downScreen={downScreen}>
        <LogoBox downScreen={downScreen}>
          <Logo>
            <svg viewBox="0 0 24 24">
              <circle />
              <path d={PinterestSVG} />
            </svg>
          </Logo>
          Pinterest
        </LogoBox>

        <ButtonBox downScreen={downScreen}>
          <SignInBtn
            onClick={() => {
              handleLock(true);
              handleModal(true);
              setIsSignUp(true);
            }}
          >
            가입하기
          </SignInBtn>
          <LogInBtn
            onClick={() => {
              handleLock(true);
              handleModal(true);
              setIsSignUp(false);
            }}
          >
            로그인
          </LogInBtn>
          <TextBtn>언론</TextBtn>
          <TextBtn>비즈니스</TextBtn>
          <TextBtn>소개</TextBtn>
        </ButtonBox>
      </NavBox>
    </>
  );
};

export default NavGuest;

const NavBox = styled.nav`
  background-color: white;
  height: 80px;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 100;
  top: 0px;
  ${({ downScreen }) =>
    downScreen &&
    css`
      top: -80px;
      transition: top 0.5s ease-in 0.5s;
    `}
`;

const LogoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50vw;
  height: 80px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(230, 0, 35);
  top: 0px;
  transition: top 0.5s linear 1.5s;
  ${({ downScreen }) =>
    downScreen &&
    css`
      top: -80px;
    `}
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  margin: 0px 5px 0px 20px;
  svg {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    circle {
      cx: 32;
      cy: 32;
      fill: white;
      r: 40;
    }

    path {
      fill: rgb(230, 0, 35);
      fill-rule: evenodd;
    }
  }
`;

const ButtonBox = styled.div`
  position: relative;
  width: 50vw;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  top: 0px;
  transition: top 0.5s linear 1.5s;
  ${({ downScreen }) =>
    downScreen &&
    css`
      top: -80px;
    `}
`;

const SignInBtn = styled.button`
  background-color: rgb(235, 235, 235);
  border: none;
  min-height: 40px;
  min-width: 60px;
  width: 80px;
  height: 40px;
  margin: 0px 30px 0px 15px;
  cursor: pointer;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: #e2e2e2;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const LogInBtn = styled(SignInBtn)`
  background-color: rgb(230, 0, 35);
  width: 65px;
  margin: 0px 0px 0px 50px;
  color: white;
  &:hover {
    background-color: #ad081b;
  }
`;

const TextBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
