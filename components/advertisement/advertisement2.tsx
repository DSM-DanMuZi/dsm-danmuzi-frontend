import styled from "@emotion/styled";

const Advertisement2 = () => {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
};

export default Advertisement2;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.color.main03};
`;
