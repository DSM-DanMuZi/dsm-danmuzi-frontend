import Header from "../components/common/header";
import Footer from "../components/common/footer";
import styled from "@emotion/styled";
import Head from "next/head";
import RecommendBook from "@/components/common/recommend/book";
import { RecommendBookDummy } from "@/utils/constance/recommendpage";
import { RecommendBookType } from "@/utils/types/recommendpage";

const RecommendedPage = () => {
  return (
    <RecommendContainer>
      <Head>
        <title>단무지 책 & 인강 추천</title>
      </Head>
      <Header />
      <ItemWrapper>
        <Text>고수들이 읽는 책😎</Text>
        <BookItemWrapper>
          {RecommendBookDummy.map((element: RecommendBookType, idx: number) => (
            <RecommendBook
              key={idx}
              image_url={element.image_url}
              type={element.type}
              title={element.title}
              name={element.name}
            />
          ))}
        </BookItemWrapper>
      </ItemWrapper>
      <Footer />
    </RecommendContainer>
  );
};

export default RecommendedPage;

const RecommendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 40px;
`;

const BookItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;