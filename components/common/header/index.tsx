import styled from "@emotion/styled";
import { SearchButton, Logo } from "@/public/assets";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Link from "next/link";
import Button from "../button";

const Header = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setSearch(!search);
  };

  const searchOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClick = (pathname: string) => {
    router.push(`/${pathname}`);
  };

  return (
    <_Wrapper>
      <_LogoWrapper href="/">
        <_Image src={Logo} alt="로고" />
        <_LogoName>단무지</_LogoName>
      </_LogoWrapper>
      {search && (
        <SearchBarContainer onClick={searchOut}>
          <SearchBar
            animation={search}
            onChange={onChange}
            value={searchValue}
            name="searchBar"
            placeholder="검색어를 입력해주세요."
          />
        </SearchBarContainer>
      )}
      {!search && (
        <_Clue onClick={handleClick} src={SearchButton} alt="search" />
      )}
      {!login ? (
        <_LoginWrapper>
          <Button
            onClick={() => onClick("login")}
            buttonColor="main01"
            fontColor="gray100"
          >
            로그인
          </Button>
          <Button buttonColor="gray100" fontColor="gray000">
            문의하기
          </Button>
        </_LoginWrapper>
      ) : (
        <>
          <_TextWrapper>
            <_PageText
              href="/recommand"
              isSelected={router.pathname === "/recommand"}
            >
              책 & 인강 추천
            </_PageText>
            <_PageText href="/study" isSelected={router.pathname === "/study"}>
              스터디
            </_PageText>
            <_PageText
              href="/lounge"
              isSelected={router.pathname === "/lounge"}
            >
              라운지
            </_PageText>
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
  z-index: 2;
`;

const _Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.color.white};
  font-family: "Pretendard";
  ${TextCss}
  position: fixed;
  z-index: 99;
`;

const _LogoWrapper = styled(Link)`
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
  color: ${({ theme }) => theme.color.gray000};
  display: grid;
  place-content: center;
  margin-left: 16px;
`;

const SearchBarContainer = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 40px;
  position: absolute;
  right: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray200};
`;

const SearchBar = styled.input<{ animation: boolean }>`
  transition: ${(props) => (props.animation ? "width 0.35s linear" : "none")};
  width: 270px;
  height: 40px;
  ${({ theme }) => theme.font.body5}
  background-color: ${({ theme }) => theme.color.gray200};
`;

const _TextWrapper = styled.div`
  width: 378px;
  ${TextCss}
`;

const _PageText = styled(Link)<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray000 : theme.color.gray700};
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

const _UserName = styled.span`
  font-size: ${({ theme }) => theme.font.body2};
  font-weight: bold;
`;
