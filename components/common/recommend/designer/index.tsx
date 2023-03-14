import styled from "@emotion/styled";
import Image from "next/image";

interface PropsType {
  image_url: string;
  name: string;
  text: string;
  type: string;
}

const RecommendDesigner = ({ image_url, name, text, type }: PropsType) => {
  return (
    <_Wrapper>
      <_Image src={image_url} alt="image" />
      <_Type>{type}</_Type>
      <_Name>{name}</_Name>
      <_Text>{text}</_Text>
    </_Wrapper>
  );
};

export default RecommendDesigner;

const _Wrapper = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  transition: all 0.12s linear;
  :hover {
    transform: scale(1.03);
  }
`;

const _Image = styled(Image)`
  width: 160px;
  height: 160px;
  margin-bottom: 12px;
`;

const _Type = styled.span`
  ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.gray600};
  margin-bottom: 12px;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 4px;
`;

const _Text = styled.span`
  ${({ theme }) => theme.font.body5};
  line-height: 30px;
  color: ${({ theme }) => theme.color.gray600};
`;
