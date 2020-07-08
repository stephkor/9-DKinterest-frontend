import React from "react";
import styled from "styled-components";
import defaultUser from "Images/default_user.png";
import CommentContainer from "./CommentContainer";

const TextContentMain = () => {
  return (
    <Main>
      <Source>freepik.com</Source>
      <Title>Cat Paw Kitten</Title>
      <Description>
        Discover thousands of Premium vectors available in AI and EPS formats
      </Description>
      <UserContainer>
        <UserInfo>
          <UserImage>
            <Img source="https://randomuser.me/api/portraits/women/27.jpg" />
          </UserImage>
          <UserName>
            <span>Wattpad</span>
            <span>팔로워 63.5만명</span>
          </UserName>
        </UserInfo>
        <FollowButton>팔로우</FollowButton>
      </UserContainer>
      <CommentContainer />
    </Main>
  );
};

export default TextContentMain;

const Main = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  flex-grow: 1;
`;

const Source = styled.a`
  display: block;
  text-decoration: underline;
  font-size: 16px;
`;

const Title = styled.a`
  display: block;
  font-size: 36px;
  font-weight: bold;
  margin-top: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const UserInfo = styled.div`
  display: flex;
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

const UserName = styled.a`
  display: flex;
  flex-direction: column;

  & span:first-child {
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 4px;

    &:hover {
      text-decoration: underline;
    }
  }

  & span:last-child {
    font-size: 14px;
  }
`;

const FollowButton = styled.button`
  width: 76px;
  height: 46px;
  cursor: pointer;
  border: none;
  outline: 0;
  border-radius: 30px;
  font-size: 12px;
  font-weight: bold;
  background-color: #efefef;
  &:hover {
    background-color: #e2e2e2;
  }
`;