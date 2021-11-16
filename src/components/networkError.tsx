import styled from "styled-components";
import { error } from "../assets";

interface NetworkErrorProps {
    tryAgainCallback: () => void;
};

export function NetworkError(props: NetworkErrorProps) {
    const { tryAgainCallback } = props;
    return (
        <NetworkErrorContainer >
            <WarningTag src={error} />
            <WarningText>Network error</WarningText>
            <WarningButton onClick={tryAgainCallback}>Try again</WarningButton>
        </NetworkErrorContainer>
    );
};

const NetworkErrorContainer = styled.div`
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column
`;

const WarningTag = styled.img``;

const WarningButton = styled.button`
    background-color: black;
    color: white;
    padding: 18px 54px;
    border: none;
    border-radius: 40px;
    margin-top: 42px;
    font-size: 18px;
    cursor: pointer;
`;

const WarningText = styled.p`
    font-size: 18px;
    line-height: 18px;
    margin-top: 26px;
`;