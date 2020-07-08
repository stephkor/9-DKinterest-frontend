import React from "react";
import styled from "styled-components";
import PinContent from "Components/PinContent";

const Pin = () => {
  return (
    <Container>
      <PinContent />
    </Container>
  );
};

export default Pin;

const Container = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  background-color: #fcfcfc;
`;
