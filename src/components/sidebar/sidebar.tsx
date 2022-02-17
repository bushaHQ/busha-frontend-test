import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .side-bar-links {
    font-family: AribauGrotesk;
    color: #3e4c59;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    padding: 15px 5px 15px 7px;
    &:hover {
      color: black;
      background: #f5f7fa;
    }
  }
  .active {
    color: black;
    background: #f5f7fa;
  }
`;

const Sidebar = (): JSX.Element => {
  return (
    <Wrapper>
      <span className="side-bar-links active">Wallets</span>
      <span className="side-bar-links">Prices</span>
      <span className="side-bar-links">Peer2Peer</span>
      <span className="side-bar-links">Activity</span>
      <span className="side-bar-links">Settings</span>
    </Wrapper>
  );
};

export default Sidebar;
