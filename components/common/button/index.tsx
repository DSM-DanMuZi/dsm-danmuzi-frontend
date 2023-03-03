import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color } from "../../../styles/theme/color";
import { ReactElement } from "react";
import { ButtonPropsType, ButtonStyleType } from "@/utils/types/button";

const Button = ({ children, ...rest }: ButtonPropsType): ReactElement => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button<ButtonStyleType>`
  padding: 8px 24px;
  border-radius: 10px;
  ${({ theme }) => theme.font.body3};
  cursor: pointer;
  ${({ buttonColor = "white", fontColor = "white" }) => css`
    background-color: ${color[buttonColor]};
    color: ${color[fontColor]};
  `};
`;
