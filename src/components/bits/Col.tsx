import styled, { CSSProperties } from "styled-components";

const widths: { [x: string]: string } = {
  xs: "0",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const gridColumns = 12;

const getFlexGrid = (width: string, n: number) => {
  let query: { [x: string]: CSSProperties } = {};

  query[`@media all and (min-width: ${widths[width]})`] = {
    flex: `0 0 ${(n / gridColumns) * 100}%`,
    maxWidth: `${(n / gridColumns) * 100}%`,
  };

  return query;
};

export interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  alignSelf?: "start" | "end" | "center" | "auto" | "baseline" | "stretch";
}

export const Col = styled.div<ColProps>((props) => ({
  display: "block",
  width: "100%",
  flex: "0 0 100%",
  padding: '12px',
  boxSizing: 'border-box',

  ...(props.xs && getFlexGrid("xs", props.xs)),
  ...(props.sm && getFlexGrid("sm", props.sm)),
  ...(props.md && getFlexGrid("md", props.md)),
  ...(props.lg && getFlexGrid("lg", props.lg)),
  ...(props.xl && getFlexGrid("xl", props.xl)),
}));
