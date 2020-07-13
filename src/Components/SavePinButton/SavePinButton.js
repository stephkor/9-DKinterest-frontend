import React, { useState } from "react";
import styled from "styled-components";
import ChooseBoardModal from "./ChooseBoardModal";

const SavePinButton = ({ source }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      <SaveButton onClick={() => setIsModalActive(true)}>저장</SaveButton>
      {isModalActive && (
        <ChooseBoardModal source={source} setIsModalActive={setIsModalActive} />
      )}
    </>
  );
};

export default SavePinButton;

const SaveButton = styled.button`
  cursor: pointer;
  min-height: 40px;
  padding: 0px 14px;
  border: none;
  outline: 0;
  border-radius: 22px;
  background-color: #e60023;
  &:hover {
    background-color: #ad081b;
  }
  text-align: center;
  color: #ffffff;
  font-size: 14px;
`;
