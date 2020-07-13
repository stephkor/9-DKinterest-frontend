import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PinContent from "Components/PinContent";
import SimilarPin from "Components/SimilarPin";

const Pin = () => {
  const [pin, setPin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pinData.json")
      .then((res) => res.json())
      .then(({ pin }) => setPin(pin[0]));
  }, []);

  return (
    <Container>
      {Object.entries(pin).length > 0 && (
        <>
          <PinContent pin={pin} />
          <SimilarPin />
        </>
      )}
    </Container>
  );
};

export default Pin;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  background-color: #fcfcfc;
`;
