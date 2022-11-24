import styled from "styled-components";

const UsernameComponent = () => {
    return (
        <UsernameContainer>
            <UsernameText>
                Oluwatobi Akindunjoye
            </UsernameText>
            <UsernameAvatar>
                <AvatarLetter>O</AvatarLetter>
            </UsernameAvatar>
        </UsernameContainer>
    );
}

export default UsernameComponent;

const UsernameContainer = styled.div`
    height: 56px;
    width: 50%;
    padding-right: 5%;
    display: flex;
    flex-direction: row-reverse;
    border: 0px solid red;
`;

const UsernameAvatar = styled.div`
    height: 36px;
    width: 36px !important;
    border-radius: 36px;
    background: rgba(154, 165, 177, 0.3);
    text-align: center;
    margin-top: 10px; 
    cursor: pointer;
    box-sizing: border-box;
`;

const AvatarLetter = styled.p`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 0px;
    color: #3E4C59;
`;

const UsernameText = styled.div`
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #3E4C59;
    padding-left: 5px;
    cursor: pointer;
`;