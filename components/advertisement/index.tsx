import styled from "@emotion/styled";
import Button from "../common/button";
import { Advertisement1 } from "@/public/assets";
import Image from "next/image";

const Advertisement = () => {
  return (
    <Wrapper>
      <ColorBackground>
        <Left>
          <Btn buttonColor="main01" fontColor="white">
            책 & 인강 추천
          </Btn>
          <Text>무려.. 무려.... 실검 1위 책!!<br></br>
          “ 개발자가 못하겠다고 하면 이렇게 말하세요.”</Text>
          <UserName>By Product Designer 장석연</UserName>
        </Left>
        <Right>
          <Img src={Advertisement1} alt="광고 사진" />
        </Right>
      </ColorBackground>
    </Wrapper>
  );
};

export default Advertisement;

const Wrapper = styled.div`
  width: 100%;
  height: 522px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const ColorBackground = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.color.main02};
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 500px;
  float: left;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 250px;
`;

const Right = styled.div`
  float: right;
  margin-right: 250px;
`;

const Btn = styled(Button)`
  margin-top: 100px;
`;

const Text = styled.p`
  ${({ theme }) => theme.font.title2}
  margin-top: 140px;
`;

const UserName = styled.p`
  margin-top: 5px;
`;

const Img = styled(Image)`
  margin-top: 154px;
`;
