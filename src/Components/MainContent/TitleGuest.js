import React from "react";
import styled, { css } from "styled-components";

const TitleGuest = (props) => {
  return (
    <TitleBox {...props}>
      <TitleConst>다음</TitleConst>
      <TitleText>저녁 식사 메뉴 아이디어를 찾아보세요</TitleText>
      <ButtonBox>
        <CircleBtn />
        <CircleBtn />
        <CircleBtn />
        <CircleBtn />
      </ButtonBox>
    </TitleBox>
  );
};

export default TitleGuest;

////////////////////스타일드 컴포넌트///////////////////////////

const TitleBox = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  width: 100vw;
  height: 300px;
  transition: top 1.5s ease-in;
  ${(props) =>
    props.downScreen &&
    css`
      top: -980px;
    `}
`;

const TitleConst = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-top: 70px;
`;

const TitleText = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-top: 20px;
  color: #c28b00;
`;

const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80px;
  height: 22px;
  bottom: 20px;
`;

const CircleBtn = styled.button`
  z-index: 100;
  background-color: rgb(235, 235, 235);
  border: none;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;
  &:focus {
    background-color: #c28b00;
    outline: none;
    box-shadow: none;
  }
`;
