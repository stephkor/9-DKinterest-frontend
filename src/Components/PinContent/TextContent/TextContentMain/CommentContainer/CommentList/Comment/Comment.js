import React from "react";
import styled from "styled-components";
import defaultUser from "Images/default_user.png";
import { BsHeartFill, BsChatFill, BsThreeDots } from "react-icons/bs";

const Comment = () => {
  return (
    <Container>
      <UserImage>
        <Img source="https://randomuser.me/api/portraits/men/54.jpg" />
      </UserImage>
      <div>
        <CommentBox>
          <UserInfo>
            <Name>Rrrr</Name>
            <Date>방금</Date>
          </UserInfo>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            facilis fugiat rem quos molestiae voluptates soluta a blanditiis
            explicabo quasi.
          </Text>
        </CommentBox>
        <ButtonsContainer>
          <RoundButton size="32px" fontSize="16px">
            <BsHeartFill />
          </RoundButton>
          <RoundButton size="32px" fontSize="16px">
            <BsChatFill />
          </RoundButton>
          <RoundButton size="32px" fontSize="16px">
            <BsThreeDots />
          </RoundButton>
        </ButtonsContainer>
      </div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 8px;
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

const CommentBox = styled.div`
  width: 364px;
  min-height: 48px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 16px;
  margin-left: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.a`
  display: block;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  padding-right: 4px;
`;

const Date = styled.span`
  font-size: 14px;
  color: #767676;
  padding: 0 4px;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 15px;
  word-break: break-all;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  padding: 4px;
`;

const RoundButton = styled.button`
  all: unset;
  position: relative;
  cursor: pointer;
  color: #767676;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(226, 226, 226);
  }
  width: ${(props) => (props.size ? props.size : "0px")};
  height: ${(props) => (props.size ? props.size : "0px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0px")};
  margin: 0 4px;
`;
