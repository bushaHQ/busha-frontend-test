/*
 ****************************************************************
 ******************    COLOR CONSTANTS   ************************
 ****************************************************************
 */

const colors = {
  FAINT_RED: "#FFF4F4",
  GREY_COLOR: "#3E4C59",
  BLUE_COLOR: "#00AEFF",
  BRIGHT_RED: "#D72C0D",
  LIGHTER_RED: "#E0B3B2",
  BLACK_COLOR: "#000000",
  WHITE_COLOR: "#ffffff",
  GREEN_COLOR: "#05A357",
  PURPLE_COLOR: "#627EEA",
  ORANGE_COLOR: "#FF9900",
  GREY_60_COLOR: "#292929",
  GREY_70_COLOR: "#CBD2D9",
  GREY_40_COLOR: "#1D1D1D",
  GREY_30_COLOR: "#F5F7FA",
  GREY_50_COLOR: "#9AA5B1",
  DARK_RED_COLOR: "#E12D39",
  BLACK_80_COLOR: "#111111",
  BLACK_40_COLOR: "#303030",
  BLACK_60_COLOR: "#212B36",
  LIGHT_RED_COLOR: "#FFBDBD",
  GREY_20_COLOR: "#D3D5D880",
};

/*
 ****************************************************************
 ******************    FONTS CONSTANTS   ************************
 ****************************************************************
 */

const fonts = {
  XS: "12px",
  SM: "14px",
  BASE: "16px",
  LG: "18px",
  XL: "20px",
  XXL: "24px",
  XXXL: "30px",
  XXXXL: "32px",
  XXXXXL: "36px",
};

/*
 ****************************************************************
 ******************    BREAKPOINT CONSTANTS   *******************
 ****************************************************************
 */

const breakpoints = {
  BIG: "100rem",
  TABLET: "64rem",
  NORMAL: "85.375rem",
  MOBILE: "450px",
};

export { colors, fonts, breakpoints };

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof fonts;
    colors: typeof colors;
    breakpoints: typeof breakpoints;
  }
}
