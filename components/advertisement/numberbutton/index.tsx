import styled from "@emotion/styled";

interface PropsType {
  currentNum: string;
  maximumNum: string;
}

const NumberButton = ({ currentNum, maximumNum }: PropsType) => {
  return (
    <ButtonWrapper>
      <NumberWrapper>
        <NumState>
          {currentNum}/{maximumNum}
        </NumState>
      </NumberWrapper>
      <DotWrapper>
        <Dot/>
        <Dot/>
        <Dot/>
      </DotWrapper>
    </ButtonWrapper>
  );
};

export default NumberButton;

const ButtonWrapper = styled.div`
  width: 122px;
  height: 42px;
  position: absolute;
  bottom: 330px;
  margin-left: 250px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.main03};
  display: flex;
  align-items: center;
  justify-content: center;    
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

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.color.main05};
  cursor: pointer;
  .hover {
    background-color: ${({theme}) => theme.color.main02};
  }
`;