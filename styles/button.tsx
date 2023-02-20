import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, keyOfColorType } from "./theme/color";
import React, { ReactElement, ReactNode } from "react";

interface ButtonStyle {
  buttonColor: keyOfColorType;
  fontColor: keyOfColorType;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className: string;
}

const Button = ({ className, children, ...rest }: ButtonProps): ReactElement => {
  return <ButtonStyled className={className} {...rest}>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button<ButtonStyle>`
  padding: 8px 24px;
  border-radius: 10px;
  ${({ theme }) => theme.font.body3}
  cursor: pointer;
  ${({
    buttonColor = "white",
    fontColor = "black",
  }) => css`
    background-color: ${color[buttonColor]};
    color: ${color[fontColor]};
  `}
`;