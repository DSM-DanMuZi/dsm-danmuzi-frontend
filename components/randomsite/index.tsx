import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface StyleType {
  backgroundColor: string;
  fontColor: string;
}

interface PropsType {
  title: string;
  contents: string;
  type: string;
  image_url: StaticImageData;
  backgroundColor: string;
  fontColor: string;
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
      <Right>
        <Image src={image_url} alt="이미지" />
      </Right>
    </Wrapper>
  );
};

export default RandomSite;

const Wrapper = styled.div<StyleType>`
  width: 700px;
  height: 200px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.12s linear;
  :hover {
    transform: scale(1.03);
  }
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "inherit"};
`;

const TextDiv = styled.div`
  float: left;
  width: 50%;
  margin-left: 40px;
`;

const Right = styled.div`
  float: right;
  width: 50%;
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
