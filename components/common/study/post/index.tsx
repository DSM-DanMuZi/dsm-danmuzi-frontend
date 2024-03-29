import styled from "@emotion/styled";
import Image from "next/image";
import { StudyPostType } from "@/utils/types/study";
import { LoungeDevelop } from "@/public/assets";

const StudyPost = ({ image_url, title, contents, hash_tag }: StudyPostType) => {
  return (
    <_Wrapper>
      <_Image src={LoungeDevelop} alt="image" />
      <_Title>{title}</_Title>
      <_Contents>{contents}</_Contents>
      <_TagWrapper>
        {hash_tag.map((element: string, index: number) => {
          if (index < 5) {
            return <_TagText key={index}>#{element}</_TagText>;
          }
        })}
      </_TagWrapper>
    </_Wrapper>
  );
};

export default StudyPost;

const _Wrapper = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.12s linear;
  :hover {
    transform: scale(1.03);
  }
`;

const _Image = styled(Image)`
  width: 440px;
  height: 220px;
  margin-bottom: 12px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title3};
  line-height: 38px;
  color: ${({ theme }) => theme.color.gray000};
  margin-bottom: 8px;
`;

const _Contents = styled.span`
  ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.gray000};
`;

const _TagWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const _TagText = styled.span`
  margin-right: 8px;
  ${({ theme }) => theme.font.body6};
`;
