import styled from 'styled-components';


export interface CurrencyAccount {
  name: string;
  id: string;
  currency: string;
  balance: string;
  type: 'fiat' | 'digital'
}

export default function AccountCard(props: CurrencyAccount) {
  const { name, balance, currency, type } = props

  const isFiatAccount = () => type === 'fiat';


  /*
  const formatToCurrency = (value: string) => {
    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(Number(value));
  };
  */

  /*
  const accountBalance = () => {
    if (isFiatAccount()) {
      return `${currency} ${formatToCurrency(balance)}`
    }

    return `${balance} ${currency}`
  }
  */

  return (
    <CardContainer>
      <Header>
        <Icon> <img src={`${name.toLocaleLowerCase()}.png`} alt={currency} /> </Icon>
        <CurrencyName>{name}</CurrencyName>
      </Header>

      <Balance>
        {/* {accountBalance} */}

        {isFiatAccount() && <span> {currency} </span>}
        <span style={{ margin: '0 4px' }}> {balance} </span>
        {!isFiatAccount() && <span> {currency} </span>}
      </Balance>

      <ArrowButton>
        <img src="caret-right.svg" alt="" />
      </ArrowButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 20px;
  background-color: #111111;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div<{ theme: string }>`
  width: 36px;
  height: 36px;
  
  img {
    width: 36px;
    border-radius: 50%;
  }
`;

const CurrencyName = styled.p`
  font-size: 16px;
  color: #d1d5db; 
  font-weight: 500;
  margin: 0;
`;

const Balance = styled.div`
  margin: 16px 0;
  font-size: 18px;
  font-weight: 500;
  color: white;
  display: flex;
`;

const ArrowButton = styled.div`
  align-self: flex-end;
  width: 32px;
  height: 32px;
  background-color: #303030;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & > svg {
    fill: white;
    width: 16px;
    height: 16px;
  }
`;
