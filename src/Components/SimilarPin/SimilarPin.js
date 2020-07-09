import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const SimilarPin = () => {
  const [isShow, setIsShow] = useState(false);
  const backwardRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const show =
        window.scrollY >
        headingRef.current.offsetTop - backwardRef.current.offsetTop;
      setIsShow(show);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <RoundButton
        size="44px"
        fontSize="24px"
        isShow={isShow}
        ref={backwardRef}
      >
        <IoMdArrowRoundBack />
      </RoundButton>
      <Heading ref={headingRef}>유사한 핀 더 보기</Heading>
      <PinGrid></PinGrid>
    </Container>
  );
};

export default SimilarPin;

const Container = styled.div`
  width: 100%;
`;

const RoundButton = styled.button`
  all: unset;
  position: fixed;
  top: 80px;
  left: 0;
  margin-top: 24px;
  margin-left: 28px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isShow }) => (isShow ? "#fff" : "transparent")};
  box-shadow: ${({ isShow }) =>
    isShow ? "0px 0px 10px 1px rgba(0,0,0,0.06);" : "none"};
  transition: background-color 0.3s linear;
  &:hover {
    background-color: rgba(226, 226, 226);
  }
  width: ${({ size }) => (size ? size : "0px")};
  height: ${({ size }) => (size ? size : "0px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0px")};
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  padding: 12px 32px;
  margin-bottom: 4px;
`;

const PinGrid = styled.div`
  /* Test */
  height: 800px;
`;
