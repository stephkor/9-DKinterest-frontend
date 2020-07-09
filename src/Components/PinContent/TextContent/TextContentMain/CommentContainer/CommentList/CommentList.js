import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <Container>
      {Array(2)
        .fill()
        .map((element) => (
          <Comment />
        ))}
    </Container>
  );
};

export default CommentList;

const Container = styled.div``;
