import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import styled from "@emotion/styled";
import Head from "next/head";
import { GroupIcon, TossLogo } from "@/public/assets";
import React, { useState, useEffect, useRef } from "react";
import { RecommendBookDummy } from "@/utils/constance/recommendpage";
import { StudyPostDummy } from "@/utils/constance/studypost";
import { StudyPostType } from "@/utils/types/study";
import { RecommendationType } from "@/utils/types/recommendpage";
import RecommendBook from "@/components/common/recommend/book";
import StudyPost from "@/components/common/study/post";
import MakeStudyButton from "@/components/make";
import RandomSite from "@/components/randomsite";
import Advertisement1 from "@/components/advertisement/advertisement1";
import Advertisement2 from "@/components/advertisement/advertisement2";
import Advertisement3 from "@/components/advertisement/advertisement3";
import NumberButton from "@/components/advertisement/numberbutton";

const Main = () => {
  const components = [Advertisement1, Advertisement2, Advertisement3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    intervalIdRef.current = window.setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % components.length);
    }, 7000);

    return () => clearInterval(intervalIdRef.current!);
  }, [components.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    clearInterval(intervalIdRef.current!);
  };

  return (
    <MainWrapper className="scroll">
      <Head>
        <title>메인페이지</title>
      </Head>
      <Header />
      <AdvertisementComponents>
        {components.map((Component, index) => (
          <div
            key={index}
            className={`component ${
              index === currentIndex ? "slide-in" : "slide-out"
            }`}
          >
            <Component />
          </div>
        ))}
      </AdvertisementComponents>
      <NumberButton active={true} maximumNum="3" currentIndex={currentIndex} handleDotClick={handleDotClick} />
      <ItemWrapper>
        <Text>오늘의 추천 스터디 ✨</Text>
        <StudyItemWrapper>
          {StudyPostDummy.map((element: StudyPostType, idx: number) => (
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
        <RandomSite
          image_url={TossLogo}
          title="디자인 인강? 이거면 충분해"
          contents="Toss UX/UI Designer"
          type="Wanted"
          backgroundColor="#F4F7FE"
          fontColor="#006EFF"
        />
        <RandomSite
          image_url={GroupIcon}
          title="이 아이콘 무조껀 뜹니다."
          contents="3D icon 이거보다 이쁜 곳 나와보라그래!"
          type="3D icon"
          backgroundColor="#FFFFFF"
          fontColor="#BD44C0"
        />
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
      <Footer />
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
`;
const AdvertisementComponents = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 600px;
  overflow: hidden;

  .component {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .slide-in {
    animation-name: slide-in;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  .slide-out {
    animation-name: slide-out;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
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
