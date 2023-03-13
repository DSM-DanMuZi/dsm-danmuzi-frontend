import styled from "@emotion/styled";
import NumberButton from "./numberbutton";

const advertisement2 = () => {
  return (
    <>
      <Wrapper></Wrapper>
      <NumberButton currentNum="3" maximumNum="3" />
    </>
  );
};

export default advertisement2;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.color.main03};
`;
