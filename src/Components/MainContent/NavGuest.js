import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PinterestSVG } from "./SvgPath";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const NavGuest = (props) => {
  return (
    <>
      {!props.downScreen && props.isModal && (
        <ModalLogin>
          <IconWrap isModal={props.isModal}>
            <Arrow
              onClick={() => {
                props.handleLock(!props.isLock);
                props.handleModal(!props.isModal);
              }}
              style={{ fontSize: 30 }}
            />
          </IconWrap>
        </ModalLogin>
      )}
      <NavBox {...props}>
        <LogoBox {...props}>
          <Logo>
            <svg viewBox="0 0 24 24">
              <circle />
              <path d={PinterestSVG} />
            </svg>
          </Logo>
          Pinterest
        </LogoBox>

        <ButtonBox {...props}>
          <SignInBtn>가입하기</SignInBtn>
          <LogInBtn
            onClick={() => {
              props.handleLock(!props.isLock);
              props.handleModal(!props.isModal);
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

////////////////////스타일드 컴포넌트///////////////////////////

const IconWrap = styled.div`
  position: fixed;
  top: 25px;
  right: 30px;
  z-index: 1000;
  ${(props) =>
    props.isModal
      ? css`
          opacity: 1;
          transition: opacity 0.5s ease-in-out 0.3s;
        `
      : css`
          opacity: 1;
          transition: opacity 0.5s ease-in-out 1.5s;
        `}
`;

const Arrow = styled(ClearRoundedIcon)`
  color: white;

  cursor: pointer;
`;

const ModalLogin = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const NavBox = styled.nav`
  background-color: white;
  height: 80px;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 100;
  top: 0px;
  ${(props) =>
    props.downScreen &&
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
  ${(props) =>
    props.downScreen &&
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
  ${(props) =>
    props.downScreen &&
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
