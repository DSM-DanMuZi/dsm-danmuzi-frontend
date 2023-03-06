import styled from "@emotion/styled";
import Img from "next/image";
import { StudyRankType } from "@/utils/types/study";
import { LoungeDevelop } from "@/public/assets";

const Rank = ({
  rank,
  rankState,
  image,
  title,
  user_img,
  user_name,
  contents,
  tag,
}: StudyRankType) => {
  return (
    <Wrapper>
      <Ranking>
        <RankingNumber>{rank}</RankingNumber>
        <RankingState>{rankState}</RankingState>
      </Ranking>
      <Image src={LoungeDevelop} alt="img" />
      <Right>
        <Title>{title}</Title>
        <User>
          <User_Img src={LoungeDevelop} alt="user_img" />
          <User_Name>{user_name}</User_Name>
        </User>
        <Contents>{contents}</Contents>
        <TagContainer>
          {tag.map((tagtext: string, index: number) => {
            if (index < 5) {
              return <Tag key={index}>#{tagtext}</Tag>;
            }
          })}
        </TagContainer>
      </Right>
    </Wrapper>
  );
};

export default Rank;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 80px;
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

const Tag = styled.div`
  color: ${({ theme }) => theme.color.gray500};
  font-size: ${({ theme }) => theme.font.body2};
  margin-right: 20px;
`;
