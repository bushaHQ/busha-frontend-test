import styled from "styled-components";

export const SelectDropdown = styled.select`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  font-weight: 500;
  -moz-appearance: none;
  border-radius: 0.313rem;
  background: transparent;
  -webkit-appearance: none;
  background-position-x: 95%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  font-size: ${({ theme }) => theme.fonts.BASE};
  background-image: url("/assets/down-arrow.png");
  line-height: ${({ theme }) => theme.fonts.BASE};
  color: ${({ theme }) => theme.colors.GREY_COLOR};
  border: 1px solid ${({ theme }) => theme.colors.GREY_70_COLOR};
`;
