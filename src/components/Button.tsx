import styled from "styled-components";

interface ButtonTypes {
  label?: string;
  func?: any;
  fullwidth?: boolean;
  styleClass?: string;
  bg?: string;
  border?: string;
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  type?: "button" | "reset" | "submit" | undefined;
  rounded?: boolean;
}
const Button = (props: ButtonTypes) => {
  const {
    label,
    func,
    fullwidth,
    styleClass,
    bg,
    border,
    disabled,
    loading,
    text,
    type,
    rounded,
  } = props;
  return (
    <Button.Wrapper
      fullwidth={fullwidth}
      bg={bg}
      border={border}
      text={text}
      rounded={rounded}
      onClick={(e) => func && func(e)}
      type={type ? type : "button"}
      className={` ${styleClass}`}
    >
      
      {loading ? "Loading..." : label}
    </Button.Wrapper>
  );
};

Button.Wrapper = styled.button<ButtonTypes>`
    padding: 12px 30.2px;
    ${(props) => props.fullwidth && "width: -webkit-fill-available;"}
    background: #000000;
    border-radius: ${(props) => (props.rounded ? "30px" : "40px")};
    color: ${(props) => (props.text ? props.text : "#ffffff")};
    outline: none;
    font-weight: bold;
    min-width: 186px;
    border: ${(props) => (props.border ? props.border : "none")};
    :hover {
      opacity: 0.8;
    }
  @media (max-width: 520px) {
    input {
      padding: 12px 30.2px;
      border-radius: ${(props) => (props.rounded ? "30px" : "5px")};
    }
  }
`;
export default Button;
