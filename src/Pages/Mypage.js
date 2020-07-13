import React from "react";
import axios from "axios"
import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import NavBar from "../Components/NavBar";
import Board from "./Board";
import MyPin from "./MyPin"


class MyPage extends React.Component {
  constructor(){
      super()
      this.state={
        board: [],
        pin: [],
        account: [],
        boardClick: true,
        pinClick: false, 
      }
  }

  componentDidMount() {
    this.getUserInfo("board");
    this.getUserInfo("pin");
    this.getUserInfo("account");
  }

  getUserInfo = (path) => {
    axios.get(`http://10.58.5.205:8000/boardpin/mypage${path}?account_id=1`)
    .then((res)=> {
        this.setState({
            [path]: res.data[path]
        })
    })
  }

  BoardPinClickHandler = (sub) => {
      if(sub === 'board') {
          this.setState({
              boardClick: true,
              pinClick: false,
          })
      }
      else if (sub === 'pin') {
          this.setState({
              pinClick: true,
              boardClick: false,
          })
      }
  }

  render() {
    const { board, pin, boardClick, pinClick, account } = this.state;
    return (
      <Wrapper>
        <NavBar />
        <User>
          <img
            alt="user"
            src={account.accountImage}
          />
          <h1>{account.accountName}</h1>
          <span>팔로잉 {account.accountFollow}명</span>
        </User>
        <Options>
          <li>
              <div>
            <MdModeEdit />
            </div>
            <div>
            <FiShare />
            </div>
          </li>
          <li>
            <ButtonBlack onClick={()=>this.BoardPinClickHandler('board')}>
              <span> 보드</span>
            </ButtonBlack>
            <ButtonBlack onClick={()=>this.BoardPinClickHandler('pin')}>
              <span>핀</span>
            </ButtonBlack>
          </li>
          <li>
              <div>
            <IoIosOptions />
            </div>
            <div>
            <GrFormAdd />
            </div>
          </li>
        </Options>
        <BoardWrap board={boardClick}>
          {board.map((data,idx) => {
          return (<Board key={idx} componentKey={idx + 1} data={data} board={boardClick}/>)
          })}
          </BoardWrap>
          <MyPinWrap pin={pinClick}>
        {pin.map((data,idx) => {
          return (<MyPin key={idx} componentKey={idx + 1} data={data}/>)
          })}
        </MyPinWrap>
      </Wrapper>
    );
  }
}
export default MyPage;

const User = styled.div`
  width: 100%;
  height: 200px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
  img{
      width: 120px;
      height: 120px;
  }
  h1 {
    font-size: 36px;
    padding: 4px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Options = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    & div{
        width: 35px;
        height: 35px;
        margin: 2px;
        :hover {
          background-color: #efefef;
          border-radius: 50%;
      }
        & svg {
        width: 22px;
        height: 22px;
        margin: 5px 5px 5px 7px;
        }
    }
  }
`;


const ButtonBlack = styled.button`
  height: 30px;
  padding: 5px 16px;
  border-radius: 25px;
  border: none;
  margin-right: 5px;
  :focus {
    background-color: black;
    color: white;
    outline: none;
  }
  span {
    font-weight: 700;
  }
`;

const BoardWrap = styled.div`
  display: ${props => props.board? "flex" : "none"};
  flex-wrap: wrap;
  padding: 10px;
`;

const MyPinWrap = styled(BoardWrap)`
display: ${props => props.pin? "flex" : "none"};
`