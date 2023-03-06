import styled from "@emotion/styled";
import Button from "../common/button";

const MakeStudyButton = () => {
  return (
    <_Wrapper>
      <_Text>스터디를 운영해보고 싶으신가요?</_Text>
      <Button buttonColor="main01" fontColor="gray100">
        스터디 바로 만들기
      </Button>
    </_Wrapper>
  );
};

export default MakeStudyButton;

const _Wrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const _Text = styled.p`
    margin-bottom: 20px;
    ${({theme}) => theme.font.title1};
    color: ${({theme}) => theme.color.gray000};
`;
