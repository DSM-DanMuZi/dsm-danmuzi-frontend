import styled from "@emotion/styled";

interface StyledType {
  inner: string;
}

const Header = () => {
  return (
    <_Wrapper>
      <_Logo>Logo</_Logo>
      <_TextWrapper>
        <_PageText>책 & 인강 추천</_PageText>
        <_PageText>스터디</_PageText>
        <_PageText>라운지</_PageText>
      </_TextWrapper>
      <_TextWrapper>
        <_Clue>검색</_Clue>
        <_Button inner="로그인">로그인</_Button>
        <_Button inner="문의하기">문의하기</_Button>
      </_TextWrapper>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  height: 100px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Pretendard";
`;

const _Logo = styled.div`
  width: 120px;
  height: 60px;
  display: grid;
  place-content: center;
  cursor: pointer;
`;

const _TextWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
`;

const _PageText = styled.span`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  line-height: 32px;
  :hover {
    color: ${({ theme }) => theme.color.gray000};
  }
`;

const _Clue = styled.button`
  width: 40px;
  height: 40px;
`;

const _Button = styled.button<StyledType>`
  width: max-content;
  height: 48px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  padding: 8px 24px;
  background-color: ${({ theme, inner }) =>
    inner === "로그인" ? theme.color.main01 : theme.color.gray100};
  cursor: pointer;
  color: ${({ theme, inner }) =>
    inner === "로그인" ? theme.color.gray100 : theme.color.gray800};
`;
