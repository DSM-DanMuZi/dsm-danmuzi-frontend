import styled from "@emotion/styled";
import Img from "next/image";
import Tag from "./tag";

interface RankProps {
  rank: string;
  rankstate?: string;
  image: string;
  title: string;
  user_img: string;
  user_name: string;
  contents: string;
}

const Rank = ({
  rank,
  rankstate,
  image,
  title,
  user_img,
  user_name,
  contents,
}: RankProps) => {
  return (
    <Wrapper>
      <Ranking>
        <RankingNumber>{rank}</RankingNumber>
        <RankingState>{rankstate}</RankingState>
      </Ranking>
      <Image src={image} alt="img" />
      <Right>
        <Title>{title}</Title>
        <User>
          <User_Img src={user_img} alt="user_img" />
          <User_Name>{user_name}</User_Name>
        </User>
        <Contents>{contents}</Contents>
        <TagContainer>
          <Tag text="#디자이너" />
          <Tag text="#피그마" />
          <Tag text="#해시태그" />
        </TagContainer>
      </Right>
    </Wrapper>
  );
};

export default Rank;

const Wrapper = styled.div`
  display: flex;
`;

const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 42px;
`;

const RankingNumber = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.main01};
`;

const RankingState = styled.div`
  font-size: ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.main01};
`;

const Image = styled(Img)`
  width: 440px;
  height: 220px;
  border-radius: 10px;
  margin-right: 40px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.font.title3};
  font-weight: bold;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const User_Img = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  margin-right: 28px;
`;

const User_Name = styled.p`
  font-size: ${({ theme }) => theme.font.body2};
`;

const Contents = styled.p`
  font-size: ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray500};
`;

const TagContainer = styled.div`
  display: flex;
`;
