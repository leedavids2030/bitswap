import { Colors } from "./types";

export const baseColors = {
  failure: "#69ee4f" ,
  primary: "#FBC403" ,
  primaryBright: "orange" ,
  primaryDark: "#0098A1" ,
  secondary: "#8cc63f" ,
  success: "#009e05" ,
  warning: "#FFB237" ,
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8cc63f",
  background: "#151515",
  backgroundDisabled: "#3c3742",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  primaryDark: "#0098A1",
  tertiary: "#151515",
  text: "#FBFCD4",
  textDisabled: "#666171",
  textSubtle: "rgb(221,173,6)",
  borderColor: "#524B63",
  card: "#0A0A0A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#001113",
  primary: "red",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#ecbaae",
  textDisabled: "#BDC2C4",
  textSubtle: "#e1b7ad",
  borderColor: "#E9EAEB",
  card: "#010f11",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

