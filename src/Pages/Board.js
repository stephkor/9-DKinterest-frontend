import React from "react";
import { MdModeEdit } from "react-icons/md";
import styled from "styled-components";
import NoData from "Images/noData.png"

class Board extends React.Component {
  render() {
    const { data, componentKey } = this.props;
    const [ pinImgFirstIdx, pinImgSecIdx, pinImgThirdIdx] = this.props.data.pinImageUrl;
    return (
      <BoardComponent key={componentKey}  >
        <div>
            <Left src={data.pinImageUrl ? pinImgFirstIdx : NoData }/>
            <div className="rightImg">
                <Right src={data.pinImageUrl[1] ? pinImgSecIdx : NoData}/>
                <RightBottom src={data.pinImageUrl[2] ? pinImgThirdIdx : NoData}/>
            </div>
        </div>
        <h3>{data.boardName}</h3>
        <span>핀 {data.pinId.length}개</span>
      </BoardComponent>
    );
  }
}

export default Board;

const BoardComponent = styled.div`
 margin: 15px;
  div {
    width: 260px;
    height: 144px;
    display: inline-block;
    .rightImg{
        display:inline-block;
        width:130px;
        border-radius: 25px;

    }    
  }

  h3{
      font-size: 20px;
      font-weight: 700;
      padding: 4px;
  }
  span{
      font-size: 12px;
      padding : 4px;
  }
`;

const Left = styled.img` 
    width: 130px;
    height: 164px;
    border-radius: 25px 0 0 25px;
   
  `;

const Right = styled.img`
    width: 106px;
    height: 81px;
    border-top-right-radius: 25px;
  `;

  const RightBottom = styled.img`
    width: 106px;
    height: 81px;
    border-bottom-right-radius: 25px;
  `;

