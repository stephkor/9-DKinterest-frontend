import React from "react";
import styled from "styled-components";
import TextContent from "./TextContent/TextContent";
import ImageContent from "./ImageContent/ImageContent";

const PinContent = () => {
  return (
    <Container>
      <ContentBox>
        <ImageContent />
        <TextContent />
      </ContentBox>
    </Container>
  );
};

export default PinContent;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 32px;
`;

const ContentBox = styled.div`
  width: 1016px;
  margin: 20px auto 32px auto;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  display: flex;
`;
