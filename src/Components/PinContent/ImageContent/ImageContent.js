import React from "react";
import styled from "styled-components";

const ImageContent = () => {
  return (
    <Container>
      <Image>
        <Img source="https://i.pinimg.com/564x/94/15/6d/94156d8f5ac14598d372cd206118b317.jpg" />
        <Overlay />
      </Image>
    </Container>
  );
};

export default ImageContent;

const Container = styled.div`
  width: 508px;
  border-radius: 32px 0px 0px 32px;
  background-color: #ffffff;
  overflow: hidden;
`;

const Image = styled.div`
  position: relative;
`;

const Img = styled.img.attrs(({ source }) => ({
  width: "100%",
  height: "auto",
  src: source,
}))`
  display: block;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  &:hover {
    background-color: rgba(0, 0, 0, 0.38);
  }
`;
