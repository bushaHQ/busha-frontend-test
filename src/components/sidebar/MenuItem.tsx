import styled from "styled-components";

const MenuItemComponent = (props: any) => {
    const {text, active, onClick} = props;
    return (
        <>
        {
            active ?
            <MenuItemContainerActive onClick={onClick}>
                {text}
            </MenuItemContainerActive>
            :
            <MenuItemContainer onClick={onClick}>
                {text}
            </MenuItemContainer>
        }
        </>
    );
}

export default MenuItemComponent;

const MenuItemContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;

    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
`;

const MenuItemContainerActive = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background: #F5F7FA;
    border-radius: 3px;
    cursor: pointer;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;

    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
`;
