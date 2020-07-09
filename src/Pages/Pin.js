import React from "react";
import styled from "styled-components";
import PinContent from "Components/PinContent";
import SimilarPin from "Components/SimilarPin";

const Pin = () => {
  return (
    <Container>
      <PinContent />
      <SimilarPin />
    </Container>
  );
};

export default Pin;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  background-color: #fcfcfc;
`;
