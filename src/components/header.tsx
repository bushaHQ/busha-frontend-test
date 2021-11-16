import styled from "styled-components";
import { logo } from "../assets";

export interface HeaderProps {
    username: string;
}

export function Header(props: HeaderProps) {

    const { username } = props;
    return (
        <HeaderContainer>
            <Container>
                <Logo src={logo} />

                <ProfileView>
                    <Avatar >{username[0]}</Avatar>
                    <AvatarText>{username}</AvatarText>
                </ProfileView>
            </Container>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
`

const Logo = styled.img`
    
    `

const Avatar = styled.p`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background: rgba(154, 165, 177, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const AvatarText = styled.p`
    font-size: 16px;
`

const ProfileView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`