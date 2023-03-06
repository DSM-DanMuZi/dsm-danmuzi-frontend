import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import TextField from "@/components/common/text";
import { Logo, LoginMain } from "@/public/assets";
import { useState } from "react";
import { LoginType } from "@/utils/types/login";

interface ErrorType {
  idError: boolean;
  pwdError: boolean;
}

const LoginPage = () => {
  const [information, setInformation] = useState<LoginType>({
    id: "",
    password: "",
  });

  const [errorState, setErrorState] = useState<ErrorType>({
    idError: false,
    pwdError: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInformation({
      ...information,
      [name]: value,
    });
  };

  return (
    <_Wrapper>
      <Head>
        <title>로그인</title>
      </Head>
      <_NavWrapper>
        <_LoginWrapper>
          <_BundleWrapper>
            <Image src={Logo} alt="alt" width={80} height={80} />
            <_Title>로그인</_Title>
            <_LoginAfterText>
              로그인 후 더 많은 기능을 사용해보세요.
            </_LoginAfterText>
          </_BundleWrapper>
          <_BundleWrapper>
            <TextField
              width={100}
              height={100}
              text="아이디"
              value={information.id}
              placeholder="아이디를 입력해주세요."
              onChange={onChange}
              name="id"
              type="text"
              error={errorState.idError}
            />
            <TextField
              width={100}
              height={100}
              text="비밀번호"
              value={information.password}
              placeholder="비밀번호를 입력해주세요."
              onChange={onChange}
              name="password"
              type="password"
              error={errorState.pwdError}
            />
          </_BundleWrapper>
          <_BundleWrapper>
            <_Button>로그인</_Button>
            <_Text>
              단무지의 회원님이 아니신가요?{" "}
              <_SignUpText>회원가입 하기</_SignUpText>
            </_Text>
          </_BundleWrapper>
        </_LoginWrapper>
      </_NavWrapper>
      <_AsideWrapper>
        <_LoginImage src={LoginMain} alt="Login" />
      </_AsideWrapper>
    </_Wrapper>
  );
};

export default LoginPage;

const _Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const _NavWrapper = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _AsideWrapper = styled.aside`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.main02};
`;

const _LoginWrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.black};
`;

const _BundleWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _LoginAfterText = styled.p`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.gray400};
`;

const _Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.gray100};
  ${({ theme }) => theme.font.body3};
  background-color: ${({ theme }) => theme.color.main01};
  line-height: 32px;
  border-radius: 4px;
  cursor: pointer;
`;

const _Text = styled.span`
  ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.black};
`;

const _SignUpText = styled.span`
  color: ${({ theme }) => theme.color.main01};
  cursor: pointer;
`;

const _LoginImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
