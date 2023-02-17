import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import global from "./global";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const StyleProvider = ({ children }: PropsType) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    {children}
  </ThemeProvider>
);
