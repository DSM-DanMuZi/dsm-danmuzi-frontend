import styled from "@emotion/styled";

const Footer = () => {
  return (
    <_Wrapper>
      <_InnerWrapper>
        <_Item>
          <_Title>Frontend</_Title>
          <_DeveloperItems>
            <_MemberName href="https://github.com/kimkh05">김경호</_MemberName>
            <_MemberName href="https://github.com/seokyeon1">
              장석연
            </_MemberName>
            <_MemberName href="https://github.com/yoon-ho7">신윤호</_MemberName>
            <_MemberName href="https://github.com/hwangjinseong">
              황진성
            </_MemberName>
          </_DeveloperItems>
        </_Item>
        <_Item>
          <_Title>Backend</_Title>
          <_InnerDevelopersItems>
            <_MemberName href="https://github.com/wheeeung">박휘응</_MemberName>
            <_MemberName href="https://github.com/wjdtn0829">
              오정수
            </_MemberName>
          </_InnerDevelopersItems>
        </_Item>
        <_Item>
          <_Title>Design</_Title>
          <_InnerDevelopersItems>
            <_MemberName href="https://github.com/seokyeon1">
              장석연
            </_MemberName>
            <_MemberName href="https://github.com/hwangjinseong">
              황진성
            </_MemberName>
          </_InnerDevelopersItems>
        </_Item>
      </_InnerWrapper>
    </_Wrapper>
  );
};

export default Footer;

const _Wrapper = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
`;

const _InnerWrapper = styled.div`
  width: 80%;
  height: 240px;
  border-top: 1px solid ${({ theme }) => theme.color.gray300};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const _Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _DeveloperItems = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const _InnerDevelopersItems = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Title = styled.span`
  color: ${({ theme }) => theme.color.gray700};
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  font-family: "Pretendard";
`;

const _MemberName = styled.a`
  color: ${({ theme }) => theme.color.gray700};
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
`;
