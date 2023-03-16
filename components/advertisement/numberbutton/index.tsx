import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";

interface PropsType {
  maximumNum: string;
  currentIndex: number;
  handleDotClick: (index: number) => void;
  active: boolean;
}

const NumberButton = ({ maximumNum, currentIndex, handleDotClick }: PropsType) => {
  return (
    <ButtonWrapper>
      <NumberWrapper>
        <NumState>
          {currentIndex + 1}/{maximumNum}
        </NumState>
      </NumberWrapper>
      <DotWrapper>
        {[...Array(parseInt(maximumNum))].map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotWrapper>
    </ButtonWrapper>
  );
};

export default NumberButton;

const ButtonWrapper = styled.div`
  width: auto;
  position: absolute;
  bottom: 330px;
  left: 0;
  margin-left: 250px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.main03};
  display: flex;
  align-items: center;
`;

const NumberWrapper = styled.div`
  width: 40px;
  height: 26px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.color.main01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumState = styled.p`
  color: ${({ theme }) => theme.color.main01};
  ${({theme}) => theme.font.body6}
`;

const DotWrapper = styled.div`
  width: 50px;
  height: 10px;
  margin-left: 12px;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme, active }) => active ? theme.color.main01 : theme.color.main05};
  cursor: pointer;
  :hover {
    background-color: ${({theme}) => theme.color.main01};
  }
`;