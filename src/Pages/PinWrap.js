import React from "react";
import styled from "styled-components";
import { FiShare } from "react-icons/fi";
import { BsThreeDots, BsArrowUpRight } from "react-icons/bs";

const options = { threshold: 0.5 };

class PinWrap extends React.Component {
  constructor() {
    super();
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.imgRef.current);
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.src = entry.target.dataset.src;
        console.log("화면에서 노출됨");
      } else {
        console.log("화면에서 제외됨");
      }
    });
  };

  render() {
    const { data, componentKey } = this.props;

    return (
      <PinContainer key={componentKey}>
        <ImgContainer>
          <SaveBtn>
            <span>저장</span>
          </SaveBtn>
          <LinkContainer>
            <Arrow />
            <span>{data.src}</span>
          </LinkContainer>
          <OptionContainer>
            <IconContainer>
              <Dots />
            </IconContainer>
            <IconContainer>
              <Share />
            </IconContainer>
          </OptionContainer>
          <img
            ref={this.imgRef}
            src="/test.jpg"
            data-src={data && data.url}
            loading="lazy"
          />
        </ImgContainer>
        <Padding />
      </PinContainer>
    );
  }
}

export default PinWrap;

const SaveBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 52px;
  height: 40px;
  background-color: red;
  color: white;
  border-radius: 25px;
  font-size: 12px;
  border: none;
  display: none;
  cursor: pointer;
`;
const OptionContainer = styled.div`
  width: 75px;
  height: 35px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: none;
`;

const LinkContainer = styled.button`
  border: none;
  height: 35px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  opacity: 0.9;
  background: #f0f0f0f0;
  border-radius: 25px;
  text-align: center;
  display: none;
  padding: 5px;
  cursor: pointer;
   & span {
    font-size: 12px;
    font-weight: 700;
   }
`;
const IconContainer = styled.button`
  border: none;
  width: 32px;
  height: 32px;
  opacity: 0.9;
  background: #f0f0f0f0;
  border-radius: 50%;
  text-align: center;
  display: none;
  margin-right: 3px;
  cursor: pointer;
`;

const Share = styled(FiShare)`
  margin-top: 8px;
`;

const Dots = styled(BsThreeDots)`
  margin-top: 8px;
`;

const Arrow = styled(BsArrowUpRight)`
  display: inline-block;
`;

const PinContainer = styled.div`
  min-height: 120px;
  padding: 0 8px 16px;
  display: inline-block;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  &:hover {
    ${SaveBtn} {
      display: block;
    }
    & ${IconContainer} {
      display: inline-block;
    }
    & ${OptionContainer} {
      display: block;
    }
    & ${LinkContainer} {
      display: block;
    }
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  break-inside: avoid;
  position: relative;
  img {
    border-radius: 15px;
    break-inside: avoid;
    width: 252px;
  }
`;

const Padding = styled.div`
  padding: 8px 6px 16px;
`;
