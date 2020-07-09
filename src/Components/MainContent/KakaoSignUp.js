import React, { Component } from "react";
//import { GoogleLogin } from "react-google-login";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";
import { FacebookSVG, GoogleSVG, PinterestSVG, KakaoSVG } from "./SvgPath";
import axios from "axios";

class KakaoSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
    };
  }

  // Google Login
  // responseGoogle = (res) => {
  //   this.setState({
  //     id: res.googleId,
  //     name: res.profileObj.name,
  //     provider: "google",
  //   });
  // };
  // Kakao Login
  responseKakao = (res) => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao",
    });

    localStorage.setItem("access_token", res.response.access_token);
    console.log({ Authorization: res.response.access_token });
    axios
      .post(
        "http://10.58.0.152:8000/account/kakao_login",
        {},
        {
          headers: { Authorization: res.response.access_token },
        }
      )
      .then((axRes) => {
        console.log(axRes);
      });
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        {/* <GoogleLogin
          clientId={process.env.REACT_APP_Google}
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        /> */}
        <KakaoButton
          jsKey={"5687f9542fe584e45f25e17a6c34f950"}
          buttonText="Kakao"
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 256 256"
          >
            <path d={KakaoSVG} />
          </svg>
          카카오로 계속하기
        </KakaoButton>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const KakaoButton = styled(KakaoLogin)`
  flex-shrink: 0;
  padding-left: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 240px;
  height: 40px;
  border: none;
  background-color: #fee500;
  cursor: pointer;
  border-radius: 24px;
  color: black;
  font-size: 15px;
  font-weight: 600;
  svg {
    position: absolute;
    left: 10px;
    border-radius: 50%;
    path {
    }
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default KakaoSignUp;
