import styled from "styled-components";
import { NavMenu } from "./NavMenu";
import { Close } from "./Close";

interface Props {
    onClose: () => void
}

const SidebarContainer = styled.div`
    z-index: 100;
    
    @media (max-width: 768px) {
        top: 0;
        left: 0;
        background-color: #ffffff;
        height: 100%;
        position: absolute;
        width: 50%;
    }

    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 470px) {
        width: 100%;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: right;
    padding-top: 30px;
    padding-right: 25px;
    margin-bottom: 30px;
`;

export const Sidebar = ({ onClose }: Props) => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <Close onClose={onClose}/>
            </SidebarHeader>

            <NavMenu />
        </SidebarContainer>
    )
}