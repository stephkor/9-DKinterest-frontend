import React from "react";
import styled from "styled-components";
import PinUploader from "Components/PinUploader";

const PinBuilder = () => {
  return (
    <Container>
      <PinUploader />
    </Container>
  );
};

export default PinBuilder;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  background-color: #efefef;
`;
