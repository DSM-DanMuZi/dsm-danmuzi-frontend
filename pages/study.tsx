import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import styled from "@emotion/styled";
import Head from "next/head";
import StudyPost from "@/components/common/study/post";
import Rank from "@/components/common/study/rank";
import MakeStudyButton from "@/components/make";
import { StudyPostType, StudyRankType } from "@/utils/types/study";
import { StudyPostDummy, StudyRankDummy } from "@/utils/constance/studypost";

const StudyPage = () => {
  return (
    <_Wrapper>
      <Head>
        <title>단무지 스터디</title>
      </Head>
      <Header />
      <_TitleWrapper>
        <_Title>안녕하세요!</_Title>
        <_Title>오늘도 힘찬 스터디 해보자구요!</_Title>
      </_TitleWrapper>
      <_ItemWrapper>
        <_Text>오늘의 추천 스터디 ✨</_Text>
        <_StudyItemWrapper>
          {StudyPostDummy.map((element: StudyPostType, idx: number) => (
            <StudyPost
              key={idx}
              image_url={element.image_url}
              title={element.title}
              contents={element.contents}
              hash_tag={element.hash_tag}
            />
          ))}
        </_StudyItemWrapper>
      </_ItemWrapper>
      <_StudyRankWrapper>
        <_Text>스터디 활동량 순위 👊</_Text>
        {StudyRankDummy.map((element: StudyRankType, idx: number) => (
          <Rank
            key={idx}
            rank={element.rank}
            image={element.image}
            title={element.title}
            user_img={element.user_img}
            user_name={element.user_name}
            contents={element.contents}
            tag={element.tag}
          />
        ))}
      </_StudyRankWrapper>
      <MakeStudyButton />
      <Footer />
    </_Wrapper>
  );
};

export default StudyPage;

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const _TitleWrapper = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _Title = styled.p`
  color: ${({ theme }) => theme.color.gray000};
  ${({ theme }) => theme.font.title1}
`;

const _ItemWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const _Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 40px;
`;

const _StudyItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const _StudyRankWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
