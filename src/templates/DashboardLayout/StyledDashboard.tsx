import styled from "styled-components";

export const DashboardWrapperStyle = styled.div`
  background-color: white;
  height: 100vh;
  /* overflow: hidden; */
  display: grid;
  grid-template-rows: 3.5rem 3fr;

  .dashboard-content {
    display: grid;
    grid-template-columns: 20% 80%;
    column-gap: 4.0625rem;
    overflow: hidden;
    padding: 3.75rem 10rem 0;

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      column-gap: 0;
      padding: 20px 15px;
    }

    main {
      overflow-y: hidden;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 10rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 40px 15px;
  }

  .profile-holder {
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    margin-right: 0.3125rem;
    background-color: #9aa5b130;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-name {
    font-size: 14px;
  }
`;

export const StyledSideNav = styled.aside`
  @media (max-width: 700px) {
    display: flex;
    padding: 40px 10px 20px;
    overflow: auto;
  }
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 0.187rem;
  padding: 0.875rem 1.0625rem;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#000000" : "#3E4C59")};
  background-color: ${(props) => (props.isActive ? "#F5F7FA" : "white")};
  font-size: ${(props) => (props.isActive ? "16px" : "14px")};
  font-weight: ${(props) => (props.isActive ? "500" : "400")};
`;
