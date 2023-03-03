import styled from "@emotion/styled";
import { SearchButton, Logo } from "@/public/assets";
import Image from "next/image";
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";

interface StyledType {
  inner: string;
}

const Header = () => {
  const [login, setLogin] = useState<Boolean>(true);
  const [search, setSearch] = useState<Boolean>(false);

  const handleClick = () => {
    setSearch(!search);
  };

  return (
    <_Wrapper>
      <_LogoWrapper>
        <_Image src={Logo} alt="로고" />
        <_LogoName>단무지</_LogoName>
      </_LogoWrapper>
      {search && <SearchBar />}
      <_Clue onClick={handleClick} src={SearchButton} alt="search" />
      {!login ? (
        <_LoginWrapper>
          <_Button inner="로그인">로그인</_Button>
          <_Button inner="문의하기">문의하기</_Button>
        </_LoginWrapper>
      ) : (
        <>
          <_TextWrapper>
            <_PageText>책 & 인강 추천</_PageText>
            <_PageText>스터디</_PageText>
            <_PageText>라운지</_PageText>
          </_TextWrapper>
          <_UserProfile>
            <_UserImage></_UserImage>
            <_UserName>장석연</_UserName>
          </_UserProfile>
        </>
      )}
    </_Wrapper>
  );
};

export default Header;

const TextCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Wrapper = styled.header`
  ${TextCss}
  height: 100px;
  background: ${({ theme }) => theme.color.white};
  font-family: "Pretendard";
`;

const _LogoWrapper = styled.div`
  display: flex;
  margin-left: 76px;
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

const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  flex: none;
  position: absolute;
  right: 430px;
  border: 2px solid ${({ theme }) => theme.color.gray600};
`;

const _TextWrapper = styled.div`
  width: 378px;
  ${TextCss}
`;

const _PageText = styled.span`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;

  :hover {
    color: ${({ theme }) => theme.color.gray000};
  }
`;

const _Clue = styled(Image)`
  width: 25px;
  height: 25px;
  position: fixed;
  right: 385px;
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
  color: ${({ theme, inner }) =>
    inner === "로그인" ? theme.color.gray100 : theme.color.gray800};
  :hover {
    background-color: ${({ theme, inner }) =>
      inner === "문의하기" ? theme.color.gray200 : theme.color.main02};
  }
  cursor: pointer;
`;

const _LoginWrapper = styled.div`
  ${TextCss}
  width: 248px;
  margin-right: 100px;
`;

const _UserProfile = styled.div`
  ${TextCss}
  width: 130px;
  margin-right: 220px;
  cursor: pointer;
`;

const _UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.gray300};
`;

const _UserName = styled.div`
  font-size: ${({ theme }) => theme.font.body2};
  font-weight: bold;
`;
