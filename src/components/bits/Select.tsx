import styled from "styled-components";

export const Select = styled.select.attrs({
  role: "combobox"
})<{}>((props) => ({
  border: "1px solid #cbd2d9",
  boxSizing: "border-box",
  borderRadius: "5px",
  //  border: '1px solid rgba(211, 213, 216, 0.5)")',
  padding: "0.5em 0.5em",
  fontWeight: "normal",
  width: "100%",
  height: "3.5em",
  outline: "none",
}));

export const Option = styled.option<{}>((props) => ({
  border: "1px solid #cbd2d9",
  boxSizing: "border-box",
  borderRadius: "5px",
  width: "100%",
  height: "3em",
  outline: "none",
}));
