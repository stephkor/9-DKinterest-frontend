import React from "react";
import styled from "styled-components";
import defaultUser from "Images/default_user.png";

const TextContentBottom = () => {
  return (
    <Bottom>
      <UserImage>
        <Img source="https://randomuser.me/api/portraits/women/17.jpg" />
      </UserImage>
      <SaverInfo>
        <a>user</a> 님이 <a>수채화 아트</a>에 저장
      </SaverInfo>
    </Bottom>
  );
};

export default TextContentBottom;

const Bottom = styled.div`
  width: 100%;
  background-color: transparent;
  padding-left: 40px;
  padding-right: 40px;
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

const Img = styled.img.attrs((props) => ({
  src: props.source ? props.source : defaultUser,
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
