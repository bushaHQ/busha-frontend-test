import styled from "styled-components";

//Styled component generator
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: sticky;
  .items {
    font-family: AribauGrotesk;
    color: #3e4c59;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    padding: 14px 17px 14px 17px;
    font-weight: 400;
    &:hover {
      color: black;
      background: #f5f7fa;
    }
  }
  .active {
    color: black;
    background: #f5f7fa;
    color: #000;
    font-weight: 500;
  }
`;

const Sidebar = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="items active">Wallets</div>
      <div className="items">Prices</div>
      <div className="items">Peer2Peer</div>
      <div className="items">Activity</div>
      <div className="items">Settings</div>
    </Wrapper>
  );
};

export default Sidebar;
