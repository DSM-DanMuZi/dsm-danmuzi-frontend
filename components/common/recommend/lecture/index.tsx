import styled from "@emotion/styled";
import Image from "next/image";

interface PropsType {
  image_url: string;
  title: string;
  name: string;
  type: string;
}

const RecommendLecture = ({ image_url, title, name, type }: PropsType) => {
  return (
    <_Wrapper>
      <_Image src={image_url} alt="image" />
      <_Type>{type}</_Type>
      <_Title>{title}</_Title>
      <_Name>{name}</_Name>
    </_Wrapper>
  );
};

export default RecommendLecture;

const _Wrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  transition: all 0.12s linear;
  :hover {
    transform: scale(1.03);
  }
`;

const _Image = styled(Image)`
  width: 440px;
  height: 280px;
  margin-bottom: 20px;
`;

const _Type = styled.span`
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray400};
  margin-bottom: 8px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title2};
  line-height: 44px;
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 8px;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray000};
`;
