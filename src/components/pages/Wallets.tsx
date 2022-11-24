import styled from "styled-components";
import HeaderComponent from "../header/Header";
import SidebarComponent from "../sidebar/Sidebar";
import WalletsContent from "../content/Wallets";

const WalletsPage = () => {
    return (
        <MainContainer>
            <HeaderComponent />
            <BodyContainer>
                <SidebarComponent />
                <WalletsContent />
            </BodyContainer>
        </MainContainer>
    );
}

export default WalletsPage;

const MainContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
`;

const BodyContainer = styled.div`
    position: relative;
    top: 56px;
    left: 0;
    min-height: 75vh;
    height: auto;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    padding-top: 80px;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    border: 0px solid red;
`;
