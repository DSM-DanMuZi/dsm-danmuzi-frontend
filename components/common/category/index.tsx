import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  contents: string;
  image_url: StaticImageData;
}

const LoungeCategory = ({ contents, image_url }: PropsType) => {
  return (
    <_Wrapper>
      <_ImageWrapper>
        <_BackgroundImage src={image_url} alt="백그라운드 이미지" />
      </_ImageWrapper>
      <_ContentsText>{contents}</_ContentsText>
    </_Wrapper>
  );
};

export default LoungeCategory;

const _Wrapper = styled.div`
  width: 360px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const _ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  :hover {
    background-color: ${({ theme }) => theme.color.main01};
  }
`;

const _BackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  :hover{
    opacity: 0.6;
  }
`;

const _ContentsText = styled.span`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
`;
