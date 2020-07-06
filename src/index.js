import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    padding: 0px;
    margin: 0px;
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
    color: inherit;
    cursor:pointer;
  }
  ol,ul{
    list-style:none;
  }
  body{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans",Helvetica Neue,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    color: #111111;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>,
  document.getElementById("root")
);
