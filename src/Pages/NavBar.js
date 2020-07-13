import React from "react";
import { FaSearch, FaPinterest } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <MenuWrap>
          <li>
            <PintIcon />
            <ButtonBlack>
              <span>홈</span>
            </ButtonBlack>
            <ButtonBlack>
              <span>팔로잉</span>
            </ButtonBlack>
          </li>
          <SearchWrap>
            <FaSearch style={{ paddingRight: 5 }} />
            <input placeholder="검색"></input>
          </SearchWrap>
          <li>
            <div>
              <Notification />
            </div>

            <div>
              <Message />
            </div>

            <SpanWrap>
              <span>S</span>
            </SpanWrap>

            <div onClick={this.dropdownHandler}>
              <ArrowDown />
            </div>
          </li>
        </MenuWrap>
      </Nav>
    );
  }
}

//nav background
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 4px 16px;
  background-color: white;
  top: 0;
  z-index: 100;
`;

//icons
const PintIcon = styled(FaPinterest)`
  width: 24px;
  height: 24px;
  margin: 0 3px;
  color: red;
`;

const Notification = styled(MdNotifications)`
  width: 24px;
  height: 24px;
  margin-top: 10px;
  & path {
    width: 20px;
    height: 24px;
    color: #767676;
  }
`;

const Message = styled(AiFillMessage)`
  width: 24px;
  height: 24px;
  margin-top: 10px;
  & path {
    width: 20px;
    height: 24px;
    color: #767676;
  }
`;

const ArrowDown = styled(IoIosArrowDown)`
  position: relative;
  width: 24px;
  height: 24px;
  margin-top: 10px;
  & path {
    width: 20px;
    height: 24px;
    color: #767676;
  }
`;

const ButtonBlack = styled.a`
  height: 30px;
  padding: 5px 16px;
  border-radius: 25px;
  &:hover {
    background-color: #f0f0f0;
  }
  span {
    font-weight: 700;
  }
`;

const SpanWrap = styled.div`
  width: 30px;
  height: 30px;
  background-color: #efefef;
  border-radius: 50%;
  text-align: center;
  padding: 6px;
`;

const MenuWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    div {
      width: 48px;
      height: 48px;
      background-color: transparent;
      text-align: center;
    }
  }
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 407px;
  width: 70%;
  height: 48px;
  background-color: #efefef;
  padding: 0 0 0 16px;
  border-radius: 24px;
  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    &::placeholder {
      font-size: 16px;
      color: #333;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default NavBar;
