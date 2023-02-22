import styled from "@emotion/styled";

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <>
      <TagWrapper>{text}</TagWrapper>
    </>
  );
};

export default Tag;

const TagWrapper = styled.div`
  color: ${({theme}) => theme.color.gray500};
  font-size: ${({theme}) => theme.font.body2};
  margin-right: 20px;
`;
