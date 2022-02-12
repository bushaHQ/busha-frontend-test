import styled from "styled-components";

const Base = styled.h4`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.BASE};
  line-height: ${({ theme }) => theme.fonts.BASE};
  color: ${({ theme }) => theme.colors.GREY_COLOR};
`;

/*
 ****************************************************************
 ******************    Heading   ********************************
 ****************************************************************
 */

export const FullNameText = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.SM};
  line-height: ${({ theme }) => theme.fonts.SM};
  color: ${({ theme }) => theme.colors.GREY_COLOR};
`;

export const InitialText = styled(FullNameText)`
  font-size: ${({ theme }) => theme.fonts.LG};
  line-height: ${({ theme }) => theme.fonts.LG};
`;

/*
 ****************************************************************
 ******************    Main Area   ******************************
 ****************************************************************
 */

export const Heading = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.XXXXL};
  line-height: ${({ theme }) => theme.fonts.XXXXL};
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

export const AddWalletText = styled.h4`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.BASE};
  line-height: ${({ theme }) => theme.fonts.BASE};
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

/**
 *** Card ***
 */

export const CurrencyText = styled.h2`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.SM};
  line-height: ${({ theme }) => theme.fonts.SM};
  color: ${({ theme }) => theme.colors.GREY_50_COLOR};
`;

export const CurrencyAmountText = styled.h4`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.BASE};
  line-height: ${({ theme }) => theme.fonts.BASE};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;

/*
 ****************************************************************
 ******************    Menu   ***********************************
 ****************************************************************
 */

export const MenuItemText = styled(Base)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.SM};
  line-height: ${({ theme }) => theme.fonts.BASE};
`;

/*
 ****************************************************************
 ******************    Add Wallet SideBar  **********************
 ****************************************************************
 */

export const AddWalletBiggerText = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.XXL};
  line-height: ${({ theme }) => theme.fonts.XXXXL};
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

export const AddWalletDescText = styled.p`
  font-weight: 500;
  line-height: 26px;
  font-size: ${({ theme }) => theme.fonts.LG};
  color: ${({ theme }) => theme.colors.GREY_COLOR};
`;

export const SelectLabelText = styled(Base)`
  color: ${({ theme }) => theme.colors.BLACK_COLOR};
`;

export const SelectItemText = styled(Base)`
  font-weight: 500;
`;

/*
 ****************************************************************
 ******************    others  **********************************
 ****************************************************************
 */

export const NetworkErrorText = styled(Base)`
  line-height: 23px;
  font-size: ${({ theme }) => theme.fonts.LG};
`;

export const NetworkErrorRedText = styled(Base)`
  font-weight: 500;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fonts.BASE};
  color: ${({ theme }) => theme.colors.BRIGHT_RED};
`;
