import styled from "@emotion/styled";

interface PropsType {
  title: string;
  contents: string;
  type: string;
  inner: string;
}

const RandomSite = ({ title, contents, type, inner }: PropsType) => {
  return (
    <Wrapper>
      <TextDiv>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <Type>{type}</Type>
      </TextDiv>
    </Wrapper>
  );
};

export default RandomSite;

const Wrapper = styled.div`
  width: 700px;
  height: 200px;
  border-radius: 12px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
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
