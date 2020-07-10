import React from "react";
import styled from "styled-components";
import defaultUser from "Images/default_user.png";

const TextContentBottom = ({
  externalAccount,
  externalAccountImg,
  boardName,
}) => {
  return (
    <Bottom>
      <UserImage>
        <Img source={externalAccountImg} />
      </UserImage>
      <SaverInfo>
        <a>{externalAccount && externalAccount}</a> 님이{" "}
        <a>{boardName && boardName}</a>에 저장
      </SaverInfo>
    </Bottom>
  );
};

export default TextContentBottom;

const Bottom = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 0 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserImage = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img.attrs(({ source }) => ({
  src: source ? source : defaultUser,
  alt: "user",
}))`
  display: block;
  width: 100%;
  height: 100%;
`;

const SaverInfo = styled.p`
  font-size: 14px;

  & a {
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
