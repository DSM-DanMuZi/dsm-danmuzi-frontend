import styled from "@emotion/styled";
import NumberButton from "./numberbutton";

const advertisement3 = () => {
  return (
    <Wrapper>
      <NumberButton currentNum="3" maximumNum="3" />
    </Wrapper>
  )
}

export default advertisement3;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 80px;
  background-color: ${({theme}) => theme.color.gray400};
`;