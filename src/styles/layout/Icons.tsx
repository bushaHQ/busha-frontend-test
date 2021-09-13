import styled from "styled-components";

export const cancelImg = `<svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4834 12.9889C16.1722 13.6777 16.1722 14.7946 15.4834 15.4834C14.7946 16.1722 13.6777 16.1722 12.9889 15.4834L8 10.4945L3.01108 15.4834C2.32225 16.1722 1.20545 16.1722 0.51662 15.4834C-0.172207 14.7946 -0.172207 13.6777 0.51662 12.9889L5.50554 8L0.51662 3.01108C-0.172207 2.32225 -0.172207 1.20545 0.51662 0.51662C1.20545 -0.172207 2.32225 -0.172207 3.01108 0.51662L8 5.50554L12.9889 0.51662C13.6777 -0.172207 14.7946 -0.172207 15.4834 0.51662C16.1722 1.20545 16.1722 2.32225 15.4834 3.01108L10.4945 8L15.4834 12.9889Z" fill="black"/>
</svg>`;

export const networkImg = `<svg width="6" height="44" viewBox="0 0 6 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.5" y="44" width="5" height="44" rx="2" transform="rotate(-180 5.5 44)" fill="#E12D39"/>
</svg>
`;

export const rightIconImg = `<svg width="6" height="44" viewBox="0 0 6 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.5" y="44" width="5" height="44" rx="2" transform="rotate(-180 5.5 44)" fill="#E12D39"/>
</svg>
`;

export const dummy = `<svg height="100px" width="500px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="gold" stroke-width="3" points="0,45 40,45 44,31 49,44 55,46 61,52 83,8 90,90 100,44 115,44 125,40 139,45 140,45,150,45 180,65 194,31 199,44 205,46 211,52 233,8 240,90 250,44 265,44 275,10 290,45 300,45, 320,45 360,65 394,31 399,44 405,46 411,52 433,8 440,90 450,44 465,44 475,40 490,45 500,45"></polyline></svg>`;

export const Avatar = styled.div`
  background: rgba(154, 165, 177, 0.3);
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &::before {
    content: "O";
    font-weight: bold;
  }
`;

export const NetworkErrorIcon = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  right?: boolean;
  pointer?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.pointer ? "pointer" : "none")};
  background-image: url("${networkImg}");
  &::before {
    content: "E";
    font-weight: bold;
  }
`;
// content: url("${networkImg}");

// --- placeholder (E) because svg didn't render at my end

export const NetworkCircleIcon = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  pointer?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  border-radius: 50%;
  border: 5px solid #ffbdbd;
  cursor: ${(props) => (props.pointer ? "pointer" : "none")};
`;

export const ImgIcon = styled("img")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
`;

export const ArrowRight = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  background?: string;
  color?: string;
  right?: boolean;
  transparent?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  background: ${(props) => props.transparent && "none"};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &::before {
    content: ">";
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const ArrowLeft = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  background?: string;
  color?: string;
  right?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &::before {
    content: "<";
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const MinusIcon = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  background?: string;
  color?: string;
  right?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &::before {
    content: "-";
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const AddIcon = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  background?: string;
  color?: string;
  right?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &::before {
    content: "+";
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const CancelIcon = styled("div")<{
  width?: number;
  height?: number;
  top?: number;
  bottom?: number;
  center?: boolean;
  background?: string;
  color?: string;
  right?: boolean;
  transparent?: boolean;
  size?: number;
  pointer?: boolean;
  label?: string;
}>`
  width: ${(props) => (props.width ? `${props.width}em` : "3em")};
  height: ${(props) => (props.height ? `${props.height}em` : "3em")};
  font-size: ${(props) => (props.size ? `${props.size}em` : "1em")};
  margin-top: ${(props) => (props.top ? `${props.top}em` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "0em")};
  margin-left: ${(props) => (props.center ? "auto" : "0em")};
  margin-right: ${(props) => (props.center ? "auto" : "0em")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  background: ${(props) => props.transparent && "transparent"};
  color: ${(props) => (props.color ? `${props.color}` : "rgba(0,0,0,1)")};
  float: ${(props) => (props.right ? "right" : "left")};
  border-radius: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.pointer ? "pointer" : "none")};
  background-image: url("${rightIconImg}");
  &::before {
    content: "X";
    font-weight: bold;
  }
`;

// --- Please, I could not properly create the icons because the svgs are not working with content css at my end ---
