import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, keyOfColorType } from "./theme/color";
import { ReactElement, ReactNode } from "react";

interface ButtonStyle {
  buttonColor: keyOfColorType;
  fontColor: keyOfColorType;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps): ReactElement => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button<ButtonStyle>`
  padding: 8px 24px;
  border-radius: 10px;
  line-height: 32px;
  transition: 0.5s;
  ${({ theme }) => theme.font.body3}
  cursor: pointer;
  ${({ buttonColor = "white", fontColor = "white" }) => css`
    background-color: ${color[buttonColor]};
    color: ${color[fontColor]};
  `}
`;
