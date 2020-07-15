import React, { useState, Fragment } from "react";
import SavePinButton from "Components/SavePinButton";
import styled from "styled-components";
import { MdCloudUpload } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import defaultUser from "Images/default_user.png";

const MIN_ROWS = 1;

const PinUploader = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [landingPageLink, setLandingPageLink] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleText = (event, handleFunc, lineHeight) => {
    const { target } = event;
    target.rows = MIN_ROWS;
    const currRows = ~~(target.scrollHeight / lineHeight);
    target.rows = currRows;
    handleFunc(target.value);
  };

  const imgFileHandler = (event) => {
    const file = event.target.files[0];
    setImgFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  return (
    <Container>
      <Header>
        <SavePinButton />
      </Header>
      <Main>
        <UploaderSection>
          {imgFile ? (
            <FilePreview>
              <img src={previewURL} alt="preview" />
              <RoundButton
                size="44px"
                fontSize="16px"
                onClick={() => setImgFile(null)}
              >
                <FaTrash />
              </RoundButton>
            </FilePreview>
          ) : (
            <Fragment>
              <Background>
                <Uploader onChange={imgFileHandler} />
                <MdCloudUpload />
                <span>드래그하거나 클릭하여 업로드</span>
                <span>권장 사항: 32MB 이하 고화질 .jpg 파일</span>
              </Background>
              <ButtonContainer>
                <span>사이트에서 저장</span>
              </ButtonContainer>
            </Fragment>
          )}
        </UploaderSection>
        <TextSection>
          <div>
            <TitleContainer>
              <TextArea
                placeholder="제목 추가"
                fontSize="36px"
                lineHeight="38px"
                fontWeight="bold"
                onChange={(event) => handleText(event, setTitle, 38)}
                value={title}
              />
            </TitleContainer>
            <Profile>
              <Img />
              <span>이름</span>
            </Profile>
            <DescriptionContainer>
              <TextArea
                placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"
                fontSize="18px"
                lineHeight="20px"
                onChange={(event) => handleText(event, setDescription, 20)}
                value={description}
              />
            </DescriptionContainer>
          </div>
          <div>
            <TextInput
              onChange={(event) => setLandingPageLink(event.target.value)}
              value={landingPageLink}
            />
          </div>
        </TextSection>
      </Main>
    </Container>
  );
};

export default PinUploader;

const fontStyle = ({ fontSize, fontWeight }) => `
  font-size: ${fontSize ? fontSize : "12px"};
  font-weight: ${fontWeight ? fontWeight : "normal"};
`;

const Container = styled.div`
  width: 880px;
  min-height: 630px;
  border-radius: 16px;
  background-color: #fff;
  padding: 20px 20px 0 20px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding-bottom: 40px;
  display: flex;
`;

const UploaderSection = styled.section`
  flex-basis: 380px;
  flex-shrink: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  max-height: 454px;
  background-color: #efefef;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;

  svg {
    pointer-events: none;
    position: absolute;
    top: 180px;
    font-size: 36px;
    color: #767676;
  }

  span:nth-of-type(1) {
    pointer-events: none;
    position: absolute;
    top: 240px;
    font-size: 16px;
  }

  span:nth-of-type(2) {
    pointer-events: none;
    position: absolute;
    color: #ababab;
    bottom: 34px;
    font-size: 14px;
  }
`;

const Uploader = styled.input.attrs({
  type: "file",
  accept: "image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp",
})`
  all: unset;
  cursor: pointer;
  background-color: #efefef;
  width: 100%;
  border-radius: 12px;
  border: 2px dashed #dadada;

  &::-webkit-file-upload-button {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  flex-basis: 48px;
  margin-top: 8px;
  background-color: #efefef;
  border-radius: 24px;
  display: flex;
  align-items: center;
  span {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

const TextSection = styled.section`
  flex-grow: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  & > div:last-child {
    margin-top: auto;
  }
`;

const TitleContainer = styled.div`
  margin-top: 32px;
`;

const TextArea = styled.textarea.attrs(({ placeholder }) => ({
  rows: "1",
  placeholder: placeholder,
}))`
  resize: none;
  outline: none;
  width: 100%;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "14px")};
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  ${fontStyle}

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    box-shadow: 0px 2px 0px 0px #0074e8;
  }
`;

const Profile = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    padding: 0 4px;
    font-weight: bold;
  }
`;

const Img = styled.img.attrs((props) => ({
  src: defaultUser,
  alt: "user",
}))`
  box-sizing: content-box;
  width: 32px;
  height: 32px;
  padding: 0 4px;
`;

const DescriptionContainer = styled.div`
  margin-top: 24px;
`;

const FilePreview = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    border-radius: 12px;
  }
`;

const RoundButton = styled.button`
  all: unset;
  position: absolute;
  top: 60px;
  left: -50px;
  margin-top: 24px;
  margin-left: 28px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.06);
  &:hover {
    background-color: rgba(226, 226, 226);
  }
  width: ${({ size }) => (size ? size : "0px")};
  height: ${({ size }) => (size ? size : "0px")};
  ${fontStyle}
`;

const TextInput = styled.input.attrs({
  placeholder: "랜딩 페이지 링크 추가",
})`
  all: unset;
  width: 100%;
  font-size: 18px;
  line-height: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
`;
