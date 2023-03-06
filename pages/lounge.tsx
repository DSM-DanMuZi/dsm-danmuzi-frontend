import styled from "@emotion/styled";
import Head from "next/head";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { LoungePostType, LoungeCategoryType } from "@/utils/types/lounge";
import { LoungePostDummy } from "@/utils/constance/lounge";
import { CategoryList } from "@/utils/constance/category";
import LoungePost from "@/components/common/lounge";
import LoungeCategory from "@/components/common/category";

const LoungePage = () => {
  return (
    <_Wrapper>
      <Head>
        <title>라운지</title>
      </Head>
      <Header />
      <_ItemWrapper>
        <_Text>라운지 😍</_Text>
        <_ListWrapper>
          {LoungePostDummy.map((element: LoungePostType, idx: number) => (
            <LoungePost
              key={idx}
              image_url={element.image_url}
              publisher={element.publisher}
              date={element.date}
              title={element.title}
              contents={element.title}
              hash_tag={element.hash_tag}
            />
          ))}
        </_ListWrapper>
      </_ItemWrapper>
      <_ItemWrapper>
        <_Text>꿀팁게시판 🫠</_Text>
        <_CategoryWrapper>
          {CategoryList.map((element: LoungeCategoryType, idx: number) => (
            <LoungeCategory
              key={idx}
              contents={element.contents}
              image_url={element.image_url}
            />
          ))}
        </_CategoryWrapper>
        <_ListWrapper>
          {LoungePostDummy.map((element: LoungePostType, idx: number) => (
            <LoungePost
              key={idx}
              image_url={element.image_url}
              publisher={element.publisher}
              date={element.date}
              title={element.title}
              contents={element.title}
              hash_tag={element.hash_tag}
            />
          ))}
        </_ListWrapper>
      </_ItemWrapper>
      <Footer />
    </_Wrapper>
  );
};

export default LoungePage;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const _ItemWrapper = styled.div`
  width: 80%;
  margin-bottom: 100px;
`;

const _Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 40px;
`;

const _ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const _CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 100px;
`;
