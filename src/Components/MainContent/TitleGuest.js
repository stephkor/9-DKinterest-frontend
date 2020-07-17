import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const TitleGuest = ({
  tabNum,
  changeTab,
  setChangeImg,
  changeImg,
  downScreen,
}) => {
  const TextList = [
    "저녁 식사 메뉴 아이디어를 찾아보세요",
    "집안 꾸미기 아이디어를 찾아보세요",
    "새로운 패션을 찾아보세요",
    "정원 가꾸기 아이디어를 찾아보세요",
  ];

  const delayChangeImg = () => {
    setTimeout(() => {
      setChangeImg(false);
    }, 2000);
  };

  useEffect(() => {
    !changeImg && setChangeImg(true);
    delayChangeImg();
    return () => {
      delayChangeImg();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabNum]);

  return (
    <TitleBox downScreen={downScreen}>
      <TitleConst>다음</TitleConst>
      <TitleText tabNum={tabNum}>{TextList[tabNum]}</TitleText>
      <ButtonBox>
        <DinnerBtn
          tabNum={tabNum}
          onClick={() => {
            changeTab(0);
            !changeImg && setChangeImg(true);
            setTimeout(() => {
              setChangeImg(false);
            }, 2000);
          }}
        />
        <InteriorBtn
          tabNum={tabNum}
          onClick={() => {
            changeTab(1);
            !changeImg && setChangeImg(true);
            setTimeout(() => {
              setChangeImg(false);
            }, 2000);
          }}
        />
        <FashionBtn
          tabNum={tabNum}
          onClick={() => {
            changeTab(2);
            !changeImg && setChangeImg(true);
            setTimeout(() => {
              setChangeImg(false);
            }, 2000);
          }}
        />
        <GardeningBtn
          tabNum={tabNum}
          onClick={() => {
            changeTab(3);
            !changeImg && setChangeImg(true);
            setTimeout(() => {
              setChangeImg(false);
            }, 2000);
          }}
        />
      </ButtonBox>
    </TitleBox>
  );
};

export default TitleGuest;

const TitleBox = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  width: 100vw;
  height: 300px;
  transition: top 2s cubic-bezier(0.9, 0, 0.5, 1);
  ${({ downScreen }) =>
    downScreen &&
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
  color: ${({ tabNum }) =>
    tabNum === 0
      ? "#c28b00"
      : tabNum === 1
      ? "#618C7B"
      : tabNum === 2
      ? "#0376D3"
      : "#407A57"};
`;

const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80px;
  height: 22px;
  bottom: 20px;
`;

const DinnerBtn = styled.button`
  z-index: 100;
  border: none;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;

  background-color: ${({ tabNum }) =>
    tabNum === 0 ? "#c28b00" : "rgb(235, 235, 235)"};
  outline: none;
  box-shadow: none;
`;

const InteriorBtn = styled(DinnerBtn)`
  background-color: ${({ tabNum }) =>
    tabNum === 1 ? "#618C7B" : "rgb(235, 235, 235)"};
`;

const FashionBtn = styled(DinnerBtn)`
  background-color: ${({ tabNum }) =>
    tabNum === 2 ? "#0376D3" : "rgb(235, 235, 235)"};
`;

const GardeningBtn = styled(DinnerBtn)`
  background-color: ${({ tabNum }) =>
    tabNum === 3 ? "#407A57" : "rgb(235, 235, 235)"};
`;
