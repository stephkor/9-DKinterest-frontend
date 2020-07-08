import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <Container>
      {[0, 0].map((el) => (
        <Comment />
      ))}
    </Container>
  );
};

export default CommentList;

const Container = styled.div`
  width: 100%;
`;
