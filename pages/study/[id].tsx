import styled from "@emotion/styled";
import Image from "next/image";
import { StudyLike } from "@/public/assets";
import Button from "@/components/common/button";

interface MemberType {
  image: string;
  name: string;
}

interface CommentType {
  image: string;
  name: string;
  comment: string;
}

interface StudyPostType {
  mainImage: string;
  title: string;
  contents: string;
  mainHashTag: string[];
  member: MemberType[];
  postTitle: string;
  post: string;
  postHashTag: string[];
  postImage: string;
  postProfile: string;
  comment: CommentType[];
}

const StudyPost = ({
  mainImage,
  title,
  contents,
  mainHashTag,
  member,
  postTitle,
  post,
  postHashTag,
  postImage,
  postProfile,
  comment,
}: StudyPostType) => {
  return (
    <_Wrapper>
      <_Image src={mainImage} alt="image" />
      <_Main>
        <_Texts>
          <_Title>{title}</_Title>
          <_Contents>{contents}</_Contents>
          {mainHashTag?.map((v, i) => (
            <_TagWrapper key={`mainHashTag${i}`}>
              <_TagText>{v}</_TagText>
            </_TagWrapper>
          ))}
        </_Texts>
        <_Functions>
          <_Btn>
            <Button buttonColor="main01" fontColor="white">
              지원하기
            </Button>
          </_Btn>
          <_Btn>
            <Button buttonColor="gray100" fontColor="black">
              공유하기
            </Button>
          </_Btn>
          <_Like src={StudyLike} alt="image" />
        </_Functions>
      </_Main>
      <_Info>
        <_MemberList>
          <_Member>동아리 멤버</_Member>
          {member?.map((v, i) => (
            <_SortMember key={`member${i}`}>
              <_Profile src={v.image} alt="image" />
              <_MemberName>{v.name}</_MemberName>
            </_SortMember>
          ))}
        </_MemberList>
        <_SortInfo>
          <_PostBox>
            <_Post>
              <_PostTitle>{postTitle}</_PostTitle>
              <_PostWrite>{post}</_PostWrite>
              {postHashTag?.map((v, i) => (
                <_PostTag key={`postHashTag${i}`}>{v}</_PostTag>
              ))}
            </_Post>
            <_PostImage src={postImage} alt="image" />
            <_PostCommentBox>
              <_Profile src={postProfile} alt="image" />
              <_WriteComment placeholder="댓글을 작성해보세요." />
            </_PostCommentBox>
          </_PostBox>
          <_Comments>
            {comment?.map((v, i) => (
              <_CommentWrapper key={`comment${i}`}>
                <_CommentProfile src={v.image} alt="image" />
                <_CommentBox>
                  <_CommentName>{v.name}</_CommentName>
                  <_Comment>{v.comment}</_Comment>
                </_CommentBox>
              </_CommentWrapper>
            ))}
          </_Comments>
        </_SortInfo>
      </_Info>
    </_Wrapper>
  );
};

export default StudyPost;

const _Wrapper = styled.div``;

const _Image = styled(Image)`
  width: 100%;
  height: 960px;
`;

const _Main = styled.div`
  width: 1920px;
  height: 220px;
  display: flex;
  justify-content: space-around;
`;

const _Texts = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  margin-left: 80px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title1};
  font-size: 36px;
  line-height: 58px;
  color: ${({ theme }) => theme.color.gray000};
  margin-top: 29px;
`;

const _Contents = styled.span`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.gray500};
  margin-top: 16px;
  line-height: 38px;
`;

const _TagWrapper = styled.div`
  display: flex;
  margin-top: 22px;
`;

const _TagText = styled.span`
  margin-right: 8px;
  line-height: 32px;
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray600};
`;

const _Functions = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin-left: 330px;
`;

const _Btn = styled.div`
  margin-right: 30px;
`;

const _Like = styled(Image)``;

const _Info = styled.div`
  background-color: #f6f6f6;
  width: 100%;
`;

const _MemberList = styled.div`
  width: 282px;
  height: 600px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.gray100};
  ${({ theme }) => theme.color.gray900}
  ${({ theme }) => theme.font.body3}
  margin: 90px 0 0 250px;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const _Member = styled.span`
  line-height: 32px;
  margin: 30px 0 0 30px;
  ${({ theme }) => theme.font.body3}
`;

const _SortMember = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 30px;
`;

const _MemberName = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.gray000};
  line-height: 28px;
  margin-left: 30px;
`;

const _SortInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _PostBox = styled.div`
  width: 740px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 103px;
`;

const _Post = styled.div`
  padding: 26px 40px 0 40px;
  margin-bottom: 30px;
`;

const _PostTitle = styled.div`
  ${({ theme }) => theme.font.title2};
  line-height: 44px;
`;

const _PostWrite = styled.p`
  margin-top: 12px;
`;

const _PostTag = styled.span`
  margin-right: 16px;
  color: ${({ theme }) => theme.color.gray400};
  ${({ theme }) => theme.font.body4};
  line-height: 28px;
`;

const _PostImage = styled(Image)`
  width: 740px;
  height: 740px;
`;

const _PostCommentBox = styled.div`
  display: flex;
  align-items: center;
  margin: 26px 0 26px 20px;
`;

const _Profile = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 20px;
`;

const _WriteComment = styled.input`
  width: 620px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.color.gray200};
  padding: 0 20px 0 20px;
  margin-left: 20px;
`;

const _Comments = styled.div`
  width: 740px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 100px 0 100px 0;
`;

const _CommentWrapper = styled.div`
  margin: 12px 0 0 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
`;

const _CommentProfile = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 20px;
`;

const _CommentBox = styled.div`
  margin-left: 20px;
`;

const _CommentName = styled.div`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.gray000};
  line-height: 38px;
`;

const _Comment = styled.span`
  padding: 4px 0 12px 0;
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray000};
`;
