import styled from "styled-components";

interface Props {
    openSidebar: () => void
}

const user = {
    firstName: 'Oluwatobi',
    lastName: 'Akindunjoye'
}

const HeaderContainer = styled.header`
    height: 56px;
    box-shadow: 0 4px 12px 0px rgb(0 0 0 / 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 160px;
    padding-right: 160px;

     @media (max-width: 1200px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media (max-width: 768px) {
        padding-left: 25px;
        padding-right: 25px;
    }
`;

const UserProfile = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
`;

const Avatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #9AA5B14D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    color: #3E4C59;
`;

const UserName = styled.p`
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.img`
    @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const HamSlice = styled.div`
    width: 20px;
    height: 2px;
    background-color: #3E4C59;
`;

const Hamburger = styled.button`
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Header = ({ openSidebar }: Props) => {



    return (
        <HeaderContainer>

            <LogoWrapper>
                <Hamburger onClick={openSidebar}>
                    <HamSlice />
                    <HamSlice />
                    <HamSlice />
                    <HamSlice />
                </Hamburger>

                <Logo src="/logo.svg" />
            </LogoWrapper>

            <UserProfile>
                <Avatar>{user.firstName.slice(0, 1)}</Avatar>
                <UserName>{user.firstName} {user.lastName}</UserName>
            </UserProfile>
        </HeaderContainer>
    )
}