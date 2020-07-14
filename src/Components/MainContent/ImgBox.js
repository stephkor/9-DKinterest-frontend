import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { urlList } from "./Config";

const ImgBox = ({ tabNum, downScreen, changeImg }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(urlList[tabNum])

        .then((res) => {
          setImgUrl(res.data);
        });
    }, 1500);
  }, [tabNum]);

  return (
    <ImgDisplay>
      <ImgContainer downScreen={downScreen}>
        {[...Array(7)].map((n, boxindex) => {
          return (
            <ImgColmnBox
              changeImg={changeImg}
              id={`imgcolmn${boxindex}`}
              key={boxindex}
            >
              {imgUrl &&
                imgUrl.map((item, index) => {
                  return (
                    index >= Number(boxindex) * 5 &&
                    index < (Number(boxindex) + 1) * 5 && (
                      <ImgContent
                        key={index}
                        style={{ backgroundImage: `url(${item.url})` }}
                      />
                    )
                  );
                })}
            </ImgColmnBox>
          );
        })}
      </ImgContainer>
    </ImgDisplay>
  );
};

export default ImgBox;

const ImgDisplay = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 200px 10px 0px 0px;
  position: absolute;
  left: 50%;
  z-index: 5;
  top: 0;
  width: 1750px;
  height: 100vh;
  transition: top 2s cubic-bezier(0.9, 0, 0.5, 1);

  top: ${({ downScreen }) => (downScreen ? "-980px" : "0px")};
`;

const ImgColmnBox = styled.div`
  position: relative;
  left: -50%;
  width: 236px;
  height: 250vh;
  margin: 10px;
  opacity: ${({ changeImg }) => (changeImg ? 0 : 1)};

  &#imgcolmn0 {
    top: ${({ changeImg }) => (changeImg ? "-50px" : "0px")};
    transition: top 0.5s ease-out, opacity 0.5s;
  }

  &#imgcolmn6 {
    top: ${({ changeImg }) => (changeImg ? "-50px" : "0px")};
    transition: top 0.5s ease-out 1.2s, opacity 0.5s 1.2s;
  }

  &#imgcolmn1 {
    top: ${({ changeImg }) => (changeImg ? "100px" : "150px")};
    transition: top 0.5s ease-out 0.2s, opacity 0.5s 0.2s;
  }

  &#imgcolmn5 {
    top: ${({ changeImg }) => (changeImg ? "100px" : "150px")};
    transition: top 0.5s ease-out 1s, opacity 0.5s 1s;
  }

  &#imgcolmn2 {
    top: ${({ changeImg }) => (changeImg ? "200px" : "250px")};
    transition: top 0.5s ease-out 0.4s, opacity 0.5s 0.4s;
  }

  &#imgcolmn4 {
    top: ${({ changeImg }) => (changeImg ? "200px" : "250px")};
    transition: top 0.5s ease-out 0.8s, opacity 0.5s 0.8s;
  }

  &#imgcolmn3 {
    top: ${({ changeImg }) => (changeImg ? "350px" : "400px")};
    transition: top 0.5s ease-out 0.6s, opacity 0.5s 0.6s;
  }
`;

const ImgContent = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 15px;
  border-radius: 24px;
  background: center / cover no-repeat;
`;
