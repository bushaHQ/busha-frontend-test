import styled from "styled-components";

export const gridCut = 100 / 12;

export const Grid = styled("div")<{
  flex?: boolean;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  spacing?: number;
  grid?: boolean;
}>`
  display: ${(props) => (props.flex ? "flex" : "block")};
  display: ${(props) => props.grid && "inline-grid"};
  grid-template-columns: ${(props) =>
    props.grid ? "repeat(auto-fit, minmax(300px, 1fr))" : "none"};
  width: ${(props) => (props.lg ? `${props.lg * gridCut}%` : "100%")};
  column-gap: ${(props) => (props.spacing ? `${props.spacing}em` : "0")};
  justify-content: ${(props) => (props.spacing ? "space-between" : "none")};
  @media screen and (min-width: 992px) {
    width: ${(props) => (props.md ? `${props.md * gridCut}%` : "100%")};
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.sm ? `${props.sm * gridCut}%` : "100%")};
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.xs ? `${props.xs * gridCut}%` : "100%")};
    flex-direction: ${(props) =>
      props.xs ? props?.xs > 12 && "column" : "row"};
  }
`;

// flex-direction: ${(props) =>
//     props.xs ? (props?.xs > 12 && "Column") : "row"};

export const Button = styled("button")<{
  width?: number;
  height?: number;
  color?: string;
  background?: string;
  top?: number;
  bottom?: number;
  center?: boolean;
  radius?: number;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "100%")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  background: ${(props) => (props.background ? `${props.background}` : "blue")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  border-radius: ${(props) => (props.radius ? `${props.radius}em` : "0.5em")};
  box-sizing: border-box;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.8;
  }
`;

export const Card = styled("div")<{
  width?: number;
  height?: number;
  background?: string;
  shadow?: boolean;
  center?: boolean;
  flex?: boolean;
  top?: number;
  radius?: number;
  shadowAlt?: string;
  bgImg?: string;
  padding?: string;
  textAlign?: string;
  verticalCenter?: boolean;
  spaceBetween?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "100%")};
  height: ${(props) => (props.height ? `${props.height}em` : "100%")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  box-shadow: ${(props) =>
    props.shadow ? `20px 20px 60px #bebebe, -20px -20px 60px #ffffff` : "none"};
  box-shadow: ${(props) => props.shadowAlt && `${props.shadowAlt}`};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "none")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  border-radius: ${(props) => (props.radius ? `${props.radius}em` : "0em")};
  background-image: ${(props) => (props.bgImg ? `${props.bgImg}` : "none")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "none")};
  text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : "none")};
  align-items: ${(props) => (props.verticalCenter ? "center" : "none")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "none"};
`;

export const Text = styled("p")<{
  color?: string;
  size?: number;
  position?: string;
  heavy?: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  lineHeight?: number;
}>`
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  font-size: ${(props) => (props.size ? `${props.size}em` : "1em")};
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.left ? `${props.left}em` : "0em")};
  margin-right: ${(props) => (props.right ? `${props.right}em` : "0em")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}em`};
`;

export const Avatar = styled.div`
  background: rgba(154, 165, 177, 0.3);
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
`;

export const Divider = styled("hr")<{
  color?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
}>`
  border: ${(props) => (props.size ? `${props.size}px` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : "rgba(211, 213, 216, 0.5)")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.left ? `${props.left}em` : "0em")};
  margin-right: ${(props) => (props.right ? `${props.right}em` : "0em")};
`;

export const TextField = styled("input")<{
  width?: number;
  height?: number;
  left?: number;
  right?: number;
  size?: number;
}>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}em` : "0em")};
  margin-right: ${(props) => (props.right ? `${props.right}em` : "0em")};
  border: ${(props) => (props.size ? `${props.size}px` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : "rgba(211, 213, 216, 0.5)")};
  width: ${(props) => (props.width ? `${props.width}em` : "100%")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  outline: none;
`;

export const SelectField = styled("select")<{
  width?: number;
  height?: number;
  left?: number;
  right?: number;
  size?: number;
  heavy?: boolean;
  background?: string;
  top?: number;
  bottom?: number;
}>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}em` : "0em")};
  margin-right: ${(props) => (props.right ? `${props.right}em` : "0em")};
  border: ${(props) => (props.size ? `${props.size}px` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : "rgba(211, 213, 216, 0.5)")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  padding: 0.5em 0.5em;
  font-weight: ${(props) => (props.heavy ? "bold" : "normal")};
  width: ${(props) => (props.width ? `${props.width}em` : "100%")};
  height: ${(props) => (props.height ? `${props.height}em` : "3.5em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  outline: none;
`;

export const Option = styled("option")<{
  width?: number;
  height?: number;
  left?: number;
  right?: number;
  size?: number;
}>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}em` : "0em")};
  margin-right: ${(props) => (props.right ? `${props.right}em` : "0em")};
  border: ${(props) => (props.size ? `${props.size}px` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : "rgba(211, 213, 216, 0.5)")};
  width: ${(props) => (props.width ? `${props.width}em` : "100%")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  outline: none;
`;

export const RedLabel = styled.div`
  background: #fff4f4;
  border: 1px solid #e0b3b2;
  border-radius: 8px;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  margin-top: 2em;
  justify-content: space-between;
`;
