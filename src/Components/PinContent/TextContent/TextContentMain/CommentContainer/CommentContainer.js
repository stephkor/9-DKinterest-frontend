import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CommentList from "./CommentList";
import InputField from "./InputField";

const CommentContainer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Block>
        <CommentCount>댓글 2개 </CommentCount>
        <RoundButton
          size="44px"
          fontSize="24px"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </RoundButton>
      </Block>
      <CommentSection>
        {isActive ? <CommentList /> : null}
        {isActive ? <InputField /> : null}
      </CommentSection>
    </Container>
  );
};

export default CommentContainer;

const Container = styled.div`
  margin-top: 40px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const CommentCount = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
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
  width: ${(props) => (props.size ? props.size : "0px")};
  height: ${(props) => (props.size ? props.size : "0px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0px")};
`;

const CommentSection = styled.div`
  padding: 16px 0;
`;
