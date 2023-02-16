export const color = {
  main01: "#FFD12D",
  main02: "#FFE380",
  main03: "#FFF8E1",
  main04: "#FFF9E5",
  main05: "#FFFCF0",
  gray100: "#FDFDFD",
  gray200: "#EDEDED",
  gray300: "#D3D3D3",
  gray400: "#BDBDBD",
  gray500: "#A7A7A7",
  gray600: "#929292",
  gray700: "#7C7C7C",
  gray800: "#505050",
  gray900: "#343434",
  background: "#FFFBFB",
  error: "#DC3035",
  check: "#04DF00",
  focus: "#006EFF",
  white: "#FFFFFF",
  gray000: "#141414",
} as const;

export type keyOfColorType = keyof typeof color;
