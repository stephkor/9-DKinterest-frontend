import React, { useState } from "react";
import styled from "styled-components";
import defaultUser from "Images/default_user.png";

const InputField = () => {
  const [isActive, setIsActive] = useState(false);
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    const textAreaLineHieght = 18;
    const minRows = 3;
    event.target.rows = minRows;
    const currRows = ~~(event.target.scrollHeight / textAreaLineHieght);
    event.target.rows = currRows;
    setComment(event.target.value);
  };

  const CancelComment = () => {
    setIsActive(false);
    setComment("");
  };

  return (
    <Container>
      <Paragraph>피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요</Paragraph>
      <AddComment>
        <UserImage>
          <Img />
        </UserImage>
        <CommentBox isActive={isActive} onClick={() => setIsActive(true)}>
          <TextArea
            value={comment}
            isActive={isActive}
            onChange={handleChange}
          />
        </CommentBox>
      </AddComment>
      <ButtonsContainer isActive={isActive}>
        <CancelButton onClick={CancelComment}>취소</CancelButton>
        <CompletelButton comment={comment.trim()}>완료</CompletelButton>
      </ButtonsContainer>
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const UserImage = styled.a`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img.attrs((props) => ({
  src: props.source ? props.source : defaultUser,
  alt: "user",
}))`
  width: 100%;
  height: 100%;
`;

const AddComment = styled.div`
  display: flex;
  align-items: start;
  margin-top: 24px;
`;

const Paragraph = styled.p`
  font-size: 12px;
`;

const CommentBox = styled.div`
  position: relative;
  width: 364px;
  min-height: 48px;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: ${(props) => (props.isActive ? "16px" : "26px")};
  margin-left: ${(props) => (props.isActive ? "8px" : "16px")};
`;

const TextArea = styled.textarea.attrs((props) => ({
  placeholder: props.isActive ? "" : "댓글 추가",
  rows: props.isActive ? "3" : "1",
}))`
  width: 100%;
  border: none;
  resize: none;
  outline: 0;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#111" : "#aaa")};
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const ButtonsContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  border: none;
  outline: 0;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
  background-color: #efefef;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const CompletelButton = styled.button.attrs((props) => ({
  disabled: props.comment ? false : true,
}))`
  width: 60px;
  height: 40px;
  border: none;
  outline: 0;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) => (props.comment ? "pointer" : "default")};
  color: ${(props) => (props.comment ? "#ffffff" : "#767676")};
  background-color: ${(props) => (props.comment ? "#e60023" : "#efefef")};
`;
