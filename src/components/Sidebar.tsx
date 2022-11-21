import { FC, useState } from "react"
import styled from "styled-components"

interface SidebarProps {
    handleClick: (item: string) => void
}

const Sidebar: FC<SidebarProps> = ({ handleClick }) => {
    const [active, setActive] = useState('Wallets')

    const handleNav = (item: string) => {
        setActive(item)
        handleClick(item)
    }
  return (
    <ListContainer>
        {['Wallets', 'Prices', 'Peer2Peer', 'Activity', 'Settings']
        .map((item) => 
        <ListItem 
            style={active === item ? 
            { backgroundColor: '#F5F7FA', fontWeight: 'bold'} 
            : {}} onClick={() => handleNav(item)} 
            key={item}>{item}
            </ListItem>)}
    </ListContainer>
  )
}

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    margin: 0;
`

const ListItem = styled.li`
    list-style: none;
    padding: 14px 166px 14px 17px;
    font-size: 16px;
    font-family: Aribau Grotesk;
    cursor: pointer;
    
    &:hover {
        background-color: #F5F7FA;
        font-weight: bold;
    }
`

export default Sidebar