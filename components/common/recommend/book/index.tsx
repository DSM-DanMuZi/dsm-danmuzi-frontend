import styled from "@emotion/styled";
import Image from "next/image";

interface PropsType {
  image_url: string;
  title: string;
  name: string;
  type: string;
}

const RecommendBook = ({ image_url, title, name, type }: PropsType) => {
  return (
    <_Wrapper>
      <_Image src={image_url} alt="image" />
      <_Type>{type}</_Type>
      <_Title>{title}</_Title>
      <_Name>{name}</_Name>
    </_Wrapper>
  );
};

export default RecommendBook;

const _Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  transition: all 0.125s linear;
  overflow: hidden;
  :hover {
    transform: scale(1.05);
  }
`;

const _Image = styled(Image)`
  width: 320px;
  height: 400px;
  margin-bottom: 18px;
`;

const _Type = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 6px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 12px;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.body4};
  line-height: 44px;
  color: ${({ theme }) => theme.color.gray000};
`;
