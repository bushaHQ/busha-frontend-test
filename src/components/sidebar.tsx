import styled from "styled-components";

export function Sidebar() {

    const sidebarLabels = ['Wallets', "Prices", "Peer2Peer", "Activity", "Settings"]

    return (
        <SidebarContainer>
            {sidebarLabels.map((item, index) => <SidebarItem isActive={!index} key={index}>{item}</SidebarItem>)}
        </SidebarContainer>
    );
}

interface SidebarProps {
    isActive?: boolean
}


const SidebarContainer = styled.aside`
    width: 240px;
`

const SidebarItem = styled.p<SidebarProps>`
    padding: 14px 17px;
    background: ${props => props.isActive ? "#F5F7FA" : "transparent"};
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    
    &:hover {
        background: #F5F7FA;
    }
`