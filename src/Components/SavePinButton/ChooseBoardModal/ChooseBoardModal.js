import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

const ChooseBoardModal = ({ source, setIsModalActive }) => {
  const [isActive, setIsActive] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.cssText = `position:fixed; top:-${window.scrollY}px; left:0; right:0`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position:""; top:"";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsModalActive(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModalActive]);

  const boardNameHandler = (e) => {
    setNewBoardName(e.target.value.trim());
  };

  return (
    <Container>
      <ModalInner ref={modalRef}>
        <Heading>{!isActive ? "보드 선택" : "보드 만들기"}</Heading>
        <Content>
          <ImageSection>
            <Img source={source}></Img>
          </ImageSection>
          <BoardSection>
            {!isActive ? (
              <CreateBoardButton onClick={() => setIsActive(true)}>
                <span>
                  <BsPlusCircleFill />
                </span>
                보드 만들기
              </CreateBoardButton>
            ) : (
              <NameField>
                <span>이름</span>
                <input
                  type="text"
                  placeholder="예: '가고 싶은 곳' 또는 '조리법'"
                  onChange={boardNameHandler}
                />
              </NameField>
            )}
          </BoardSection>
        </Content>
        {isActive && (
          <Bottom>
            <CancelButton onClick={() => setIsActive(false)}>취소</CancelButton>
            <CreateButton text={newBoardName}>만들기</CreateButton>
          </Bottom>
        )}
      </ModalInner>
    </Container>
  );
};

export default ChooseBoardModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 19;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
`;

const ModalInner = styled.div`
  width: 720px;
  background-color: #fff;
  margin: 0 16px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: default;
`;

const Heading = styled.h1`
  height: 100px;
  font-size: 28px;
  font-weight: bold;
  padding: 32px;
  text-align: center;
`;

const Content = styled.section`
  width: 100%;
  height: calc(90vh - 100px);
  max-height: 700px;
  margin-top: 12px;
  display: flex;
  overflow: auto;
`;

const ImageSection = styled.div`
  width: 40%;
  height: 100%;
`;

const Img = styled.img.attrs(({ source }) => ({
  width: "240px",
  height: "auto",
  src: source,
}))`
  display: block;
  margin: 0 auto;
  border-radius: 16px;
`;

const BoardSection = styled.div`
  width: 60%;
  height: 100%;
`;

const CreateBoardButton = styled.button`
  all: unset;
  width: 100%;
  height: 64px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;

  &:hover {
    background-color: #efefef;
  }

  span {
    margin: 0px 12px 0px 24px;
    color: #e60023;
    font-size: 34px;
  }
`;

const NameField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  span {
    font-size: 12px;
    margin-bottom: 8px;
  }

  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    min-height: 48px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 2px solid #ddd;

    &:focus {
      box-shadow: 0 0 0 4px #87c2ff;
    }
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 0px 0px 32px 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const CancelButton = styled.button`
  padding: 8px 12px;
  min-width: 60px;
  min-height: 40px;
  cursor: pointer;
  border: none;
  outline: 0;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  background-color: #efefef;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const CreateButton = styled(CancelButton).attrs(({ text }) => ({
  disabled: text ? false : true,
}))`
  color: #767676;
  cursor: ${({ text }) => (text ? "pointer" : "default")};
  color: ${({ text }) => (text ? "#ffffff" : "#767676")};
  background-color: ${({ text }) => (text ? "#e60023" : "#efefef")};
  &:hover {
    background-color: ${({ text }) => (text ? "#AD081B" : "#efefef")};
  }
`;
