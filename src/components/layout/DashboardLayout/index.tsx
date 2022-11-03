import Styled from "styled-components";
import TopBar from "../TopBar";
import SideNav from "../SideNav";
import Wallets from "../../../pages/wallets";

export default function DashboardLayout() {
  return (
    <>
      <TopBar />
      <DashboardContainer>
        <SideNav />
        <DashboardContent>
          <Wallets />
        </DashboardContent>
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = Styled.section`

    padding: 48px 0 0;
    width: 1120px;
    max-width: 100%;
    height: calc(100% - 56px);
    margin: 0 auto;
`;

const DashboardContent = Styled.div`
margin-left: 240px;
padding-left: 64px;
height: 100%;
overflow: auto; 
@media (max-width: 1024px){
  margin-left: 0;
  padding: 0px 60px
}

@media screen and (max-width: 768px){
    margin-left: 0px;
    padding: 0px 12px;
    width: 100%;
}
`;
