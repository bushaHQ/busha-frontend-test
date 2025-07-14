import styled from "styled-components";

type Item = {
    id: number
    title: string
}

interface Props { item: Item, activeId: number, setActiveId: (id: number) => void }

const NavItemWrapper = styled.button<{ activeId: number, item: Item }>`
    background-color: ${props => (props.activeId === props.item.id ? '#F5F7FA' : '#ffffff')};
    border-radius: 3px;
    border: none;
    text-align: left;
    padding: 17px;
    font-weight: ${props => (props.activeId === props.item.id ? '500' : '400')};
    color: ${props => (props.activeId === props.item.id ? '#000000' : '#3E4C59')};
    font-size: 16px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const NavItem = ({ item, activeId, setActiveId  }: Props) => {
    return (
        <NavItemWrapper activeId={activeId} item={item} onClick={() => setActiveId(item.id)}>
            {item.title}
        </NavItemWrapper>
    )
}
