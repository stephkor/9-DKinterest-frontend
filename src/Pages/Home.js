import React from "react";
import Placeholder from "react-placeholder";
import PinWrap from "./PinWrap";
import NavBar from "./NavBar";
import styled from "styled-components";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: 17,
      preItems: 0,
      category: [],
      nowHeight: 0,
      dropClick: false,
    };
  }

  getData = () => {
    const axios = require("axios");

    axios
      .get(`mock.json`)
      .then((res) => {
        console.log(res);
        let result = res.data.category.slice(
          this.state.preItems,
          this.state.items
        );
        console.log(result);
        return result;
      })
      .then((result) => {
        this.setState({
          category: result,
        });
      });
  };

  componentDidMount() {
    this.getData();
    window.addEventListener("scroll", () => {
      const { scrollTop } = document.documentElement;
      this.setState({ nowHeight: scrollTop });
    });
  }

  componentDidUpdate(_, prevState) {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight === scrollHeight) {
      const axios = require("axios");

      axios
        .get(`mock.json`)
        .then((res) => {
          let result = res.data.category.slice(
            this.state.items,
            this.state.items + 10
          );
          console.log("컴디업", result);
          return result;
        })
        .then((result) => {
          this.setState({
            items: this.state.items + 10,
            category: this.state.category.concat(result),
          });
        });
    }
  }

  dropdownHandler = () => {
    this.setState({
      dropClick: !this.state.dropClick,
    });
  };

  render() {
    const { category } = this.state;
    return (
      <>
        <NavBar />
        <Dropdown style={{ display: this.state.dropClick ? "flex" : "none" }}>
          <ul>
            <span>계정</span>
            <li>다른 계정 추가</li>
            <li>무료 business 계정 추가</li>
          </ul>
          <ul>
            <span>옵션더보기</span>
            <li>설정</li>
            <li>홈피드 조정</li>
            <li>Chrome 앱설치</li>
            <li>도움받기</li>
            <li>약관 및 개인정보 보기</li>
            <li>로그아웃</li>
          </ul>
        </Dropdown>
        <Placeholder />
        <PinList>
          {category.map((data, idx) => {
            // console.log(data);
            return <PinWrap key={idx} componentKey={idx + 1} data={data} />;
          })}
        </PinList>
      </>
    );
  }
}

const PinList = styled.div`
  padding: 80px 60px 24px;
  height: 100%;
  break-inside: avoid;
  column-width: 252px;
  column-fill: auto;
  column-gap: 10px;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  position: absolute;
  top: 80px;
  right: 0;
  padding: 15px;
  z-index: 300;
  min-width: 180px;
  max-width: 360px;
  background-color: #ffffff;
  border-radius: 15px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    margin: 8px 10px;
    span {
      font-size: 12px;
      margin: 8px;
    }

    li {
      font-size: 16px;
      font-weight: bold;
      margin: 5px;
    }
  }
`;

// const loading = styled.div`
//   width: 50%;
//   margin: 0 auto;

//   img {
//     height: 50px;
//     position: absolute;
//     left: 50%;
//   }
// `;

export default Home;
