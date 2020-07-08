import React from "react";
import styled from "styled-components";
import TextContentHeader from "./TextContentHeader";
import TextContentMain from "./TextContentMain";
import TextContentBottom from "./TextContentBottom";

const TextContent = () => {
  return (
    <Container>
      <TextContentHeader />
      <TextContentMain />
      <TextContentBottom />
    </Container>
  );
};

export default TextContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 508px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  background-color: #ffffff;
`;
