import styled from "styled-components";

interface User {
    firstName: string;
    lastName: string
}

export interface NavbarProps {
    user: User;
}

export default function Navbar(props: NavbarProps) {
    const { user } = props;

    return (
        <Nav>
            <NavContent>
                <LogoContainer>
                    <img src="logo.svg" alt="Logo" />
                    <h1> busha </h1>
                </LogoContainer>

                <UserInfo>
                    <Avatar>
                        {user.firstName.slice(0, 1).toUpperCase()}
                    </Avatar>

                    <UserName>
                        {`${user.firstName} ${user.lastName}`}
                    </UserName>
                </UserInfo>
            </NavContent>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 56px;
    padding: 0 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 12px 0px #0000000D;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
`;

const NavContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1300px) {
        width: 1300px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    text-align: right;
    color: #3E4C59;
`;

const Avatar = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 18px;
    color: #3E4C59;
    background-color: #e1e4e8;
    border-radius: 50%;
`;

const UserName = styled.div`
    font-weight: 500;

    @media (max-width: 768px) {
        display: none
    }
`