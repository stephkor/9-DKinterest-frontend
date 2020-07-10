import React from "react";
import styled from "styled-components";
import SavePinButton from "Components/SavePinButton";
import { BsThreeDots } from "react-icons/bs";
import { RiUpload2Line } from "react-icons/ri";

const TextContentHeader = ({ source }) => {
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
      <SavePinButton source={source} />
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
