import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { RiUpload2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const TextContentHeader = () => {
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  return (
    <Header>
      <div>
        <RoundButton size="44px" fontSize="24px">
          <BsThreeDots />
        </RoundButton>
        <RoundButton size="44px" fontSize="24px">
          <RiUpload2Line />
        </RoundButton>
      </div>
      <ButtonContainer>
        <BoardCategoryButton onClick={() => setIsBoardOpen(!isBoardOpen)}>
          <span>시도할 만한 요리법</span>
          <IoIosArrowDown />
        </BoardCategoryButton>
        <SaveButton onClick={() => setIsBoardOpen(true)} status={isBoardOpen}>
          저장
        </SaveButton>
      </ButtonContainer>
    </Header>
  );
};

export default TextContentHeader;

const Header = styled.header`
  width: 100%;
  padding: 20px 20px 16px 28px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  position: sticky;
  top: 0px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 9;
`;

const RoundButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  &:hover {
    background-color: rgba(226, 226, 226);
  }
  width: ${({ size }) => (size ? size : "0px")};
  height: ${({ size }) => (size ? size : "0px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0px")};
`;

const ButtonContainer = styled.div`
  height: 44px;
  width: 236px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
`;

const BoardCategoryButton = styled.button`
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 0;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: 0;
  background-color: #efefef;
  &:hover {
    background-color: #e2e2e2;
  }
  font-size: 12px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    font-size: 20px;
  }
`;

const SaveButton = styled.button`
  cursor: pointer;
  flex: 0 0 52px;
  height: 100%;
  top: 0;
  right: 0;
  border: none;
  outline: 0;
  background-color: #e60023;
  &:hover {
    background-color: #cf001f;
  }
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  display: ${({ status }) => (status ? "none" : "block")};
`;
