import styled from "@emotion/styled";
import Image from "next/image";

interface PropsType {
  title: string;
  contents: string;
  type: string;
  image_url: string;
  backgroundColor?: string;
  fontColor?: string;
}

const RandomSite = ({
  image_url,
  title,
  contents,
  type,
  backgroundColor,
  fontColor,
}: PropsType) => {
  return (
    <Wrapper backgroundColor={backgroundColor} fontColor={fontColor}>
      <TextDiv>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <Type>{type}</Type>
      </TextDiv>
    </Wrapper>
  );
};

export default RandomSite;

const Wrapper = styled.div<PropsType>`
  width: 700px;
  height: 200px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "inherit"};
`;

const TextDiv = styled.div`
  margin-left: 40px;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.title3}
  margin-bottom: 14px;
`;

const Contents = styled.p`
  ${({ theme }) => theme.font.body5}
  margin-bottom: 13px;
`;

const Type = styled.p`
  ${({ theme }) => theme.font.body5}
`;

const _Image = styled(Image)`
  width: 320px;
  height: 400px;
  margin-bottom: 18px;
`;
