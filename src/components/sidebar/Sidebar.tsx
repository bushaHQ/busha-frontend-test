import styled from "styled-components";
import MenuItemComponent from "./MenuItem";

const handleClick = (route: string) => {
    //alert(route);
}

const SidebarComponent = () => {
    return (
        <MenuContainer className="sidebar">
            <MenuItemComponent text="Wallets" active={true} onClick={() => handleClick('/wallets')} />
            <MenuItemComponent text="Prices" active={false} onClick={() => handleClick('/prices')}/>
            <MenuItemComponent text="Peer2Peer" active={false} onClick={() => handleClick('/peer2peer')}/>
            <MenuItemComponent text="Activity" active={false} onClick={() => handleClick('/activity')}/>
            <MenuItemComponent text="Settings" active={false} onClick={() => handleClick('/settings')}/>
        </MenuContainer>
    );
}

export default SidebarComponent;

const MenuContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 25%;
    border: 0px solid red;
`;
