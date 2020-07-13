import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";

const GetImg = () => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/mock/dinner.json")

      .then((res) => {
        setImgUrl(res.data);
      });
  }, []);

  return imgUrl;
};

const ImgBox = (props) => {
  const ImgUrl = GetImg();

  return (
    <ImgDisplay>
      <ImgContainer {...props}>
        {[...Array(7)].map((n, boxindex) => {
          return (
            <ImgColmnBox {...props} id={`imgcolmn${boxindex}`} key={boxindex}>
              {ImgUrl &&
                ImgUrl.map((item, index) => {
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

////////////////////스타일드 컴포넌트///////////////////////////

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
  top: 0px;

  width: 1750px;
  height: 100vh;
  transition: top 1.5s ease-in;
  ${(props) =>
    props.downScreen &&
    css`
      top: -980px;
    `}
`;

const ImgColmnBox = styled.div`
  position: relative;
  left: -50%;
  width: 236px;
  height: 250vh;
  margin: 10px;
  top: 0px;

  &#imgcolmn1,
  &#imgcolmn5 {
    top: 150px;
  }
  &#imgcolmn2,
  &#imgcolmn4 {
    top: 250px;
  }
  &#imgcolmn3 {
    top: 400px;
  }
`;

const ImgContent = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 15px;
  border-radius: 24px;
  background: center / cover no-repeat;
`;
