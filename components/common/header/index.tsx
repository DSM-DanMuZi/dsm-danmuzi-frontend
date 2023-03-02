import styled from "@emotion/styled";
import { SearchButton, Logo } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";

interface StyledType {
  inner: string;
}

const Header = () => {
  const [login, setLogin] = useState<Boolean>(true);
  return (
    <_Wrapper>
      <_LogoWrapper>
        <_Image src={Logo} alt="로고" />
        <_LogoName>단무지</_LogoName>
      </_LogoWrapper>
      <_TextWrapper>
        <_PageText>책 & 인강 추천</_PageText>
        <_PageText>스터디</_PageText>
        <_PageText>라운지</_PageText>
      </_TextWrapper>
      {!login ? (
        <_TextWrapper>
          <_Clue src={SearchButton} alt="search" />
          <_Button inner="로그인">로그인</_Button>
          <_Button inner="문의하기">문의하기</_Button>
        </_TextWrapper>
      ) : (
        <_UserProfile>
          <_Clue src={SearchButton} alt="search" />
          <_UserImage></_UserImage>
          <_UserName>장석연</_UserName>
        </_UserProfile>
      )}
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

const _LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const _Image = styled(Image)`
  width: 80px;
  height: 80px;
`;

const _LogoName = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.title3};
  display: grid;
  place-content: center;
  margin-left: 16px;
`;

const _TextWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

const SearchBar = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.color.gray600};
`;

const _Clue = styled(Image)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const _Button = styled.button<StyledType>`
  width: max-content;
  height: 48px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  padding: 8px 24px;
  transition: 0.5s;
  background-color: ${({ theme, inner }) =>
    inner === "로그인" ? theme.color.main01 : theme.color.gray100};
  :hover {
    background-color: ${({ theme, inner }) =>
      inner === "문의하기" ? theme.color.gray200 : theme.color.main02};
  }
  cursor: pointer;
  color: ${({ theme, inner }) =>
    inner === "로그인" ? theme.color.gray100 : theme.color.gray800};
`;

const _UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const _UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.gray300};
  margin-right: 28px;
  margin-left: 28px;
`;

const _UserName = styled.div`
  font-size: ${({ theme }) => theme.font.body2};
  font-weight: bold;
`;
