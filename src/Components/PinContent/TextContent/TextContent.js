import React from "react";
import styled from "styled-components";
import TextContentHeader from "./TextContentHeader";
import TextContentMain from "./TextContentMain";
import TextContentBottom from "./TextContentBottom";

const TextContent = ({
  link,
  title,
  detail,
  internalAccount,
  internalAccountImg,
  followNumber,
  externalAccount,
  externalAccountImg,
  boardName,
  imgUrl,
}) => {
  return (
    <Container>
      <TextContentHeader source={imgUrl} />
      <TextContentMain
        link={link}
        title={title}
        detail={detail}
        internalAccount={internalAccount}
        internalAccountImg={internalAccountImg}
        followNumber={followNumber}
      />
      <TextContentBottom
        externalAccount={externalAccount}
        externalAccountImg={externalAccountImg}
        boardName={boardName}
      />
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
