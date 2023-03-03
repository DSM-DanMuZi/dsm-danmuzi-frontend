import styled from "@emotion/styled";
import Image from "next/image";
import { LoungePostType } from "@/utils/types/lounge";

const LoungePost = ({
  image_url,
  publisher,
  date,
  title,
  contents,
  hash_tag,
}: LoungePostType) => {
  return (
    <_Wrapper>
      <_Image src={image_url} alt="Lounge Image" />
      <_ItemWrapper>
        <_InnerWrapper>
          <_Text>{publisher}</_Text>
          <_Text>|</_Text>
          <_Text>{date}</_Text>
        </_InnerWrapper>
        <_InnerWrapper>
          <_Title>{title}</_Title>
          <_Content>{contents}</_Content>
        </_InnerWrapper>
      </_ItemWrapper>
      <_HashTag>#{hash_tag}</_HashTag>
    </_Wrapper>
  );
};

export default LoungePost;

const _Wrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const _Image = styled(Image)`
  width: 100%;
  height: 260px;
  margin-bottom: 20px;
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const _ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _InnerWrapper = styled.div`
  margin-bottom: 20px;
`;

const _Text = styled.span`
  margin-right: 24px;
  ${({ theme }) => theme.font.body1};
  color: ${({ theme }) => theme.color.gray900};
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title2};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 10px;
`;

const _Content = styled.p`
  ${({ theme }) => theme.font.body1};
  color: ${({ theme }) => theme.color.gray600};
`;

const _HashTag = styled.p`
  ${({ theme }) => theme.font.body1};
  color: ${({ theme }) => theme.color.main01};
`;
