import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { RecommendBookDummy } from "@/utils/constance/recommendpage";
import { StudyPostDummy } from "@/utils/constance/studypost";
import { StudyPostType } from "@/utils/types/study";
import { RecommendationType } from "@/utils/types/recommendpage";
import RecommendBook from "@/components/common/recommend/book";
import StudyPost from "@/components/common/study/post";
import MakeStudyButton from "@/components/make";
import RandomSite from "@/components/randomsite";
import Image from "next/image";
import Advertisement from "@/components/advertisement";

const images = ["", "", ""];

const Main: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);
  return (
    <MainWrapper>
      <Image src={images[currentImageIndex]} alt="Image"/>
      <Header/>
      <Advertisement/>
      <ItemWrapper>
        <Text>오늘의 추천 스터디 ✨</Text>
        <StudyItemWrapper>
          {StudyPostDummy.map((element: StudyPostType,  idx: number) => (
            <StudyPost
              key={idx}
              image_url={element.image_url}
              title={element.title}
              contents={element.contents}
              hash_tag={element.hash_tag}
            />
          ))}
        </StudyItemWrapper>
      </ItemWrapper>
      <RecommendSite>
        <RandomSite inner="blue" title="디자인 인강? 이거면 충분해" contents="Toss UX/UI Designer" type="Wanted"/>
        <RandomSite inner="pink" title="이 아이콘 무조껀 뜹니다." contents="3D icon 이거보다 이쁜 곳 나와보라그래!" type="3D icon"/>
      </RecommendSite>
      <ItemWrapper>
        <Text>고수들이 읽는 책😎</Text> 
        <BookItemWrapper>
          {RecommendBookDummy.map(
            (element: RecommendationType, idx: number) => (
              <RecommendBook
                key={idx}
                image_url={element.image_url}
                type={element.type}
                title={element.title}
                name={element.name}
              />
            )
          )}
        </BookItemWrapper>
      </ItemWrapper>
      <MakeStudyButton />
      <Footer/>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .img {
    width: 100%;
    height: 500px;
  }
`;

const ItemWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  cursor: pointer;
`;

const RecommendSite = styled.div`
  width: 1520px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 40px;
`;

const StudyItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const BookItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;