import { PropsWithChildren } from "react";
import styled from "styled-components";

export interface ModalProps {
    show: boolean
    retry: () => void
}

export function ErrorRetry(props: PropsWithChildren<ModalProps>) {
    return (
        <>
            {props.show &&
                <Container>
                    <Subcontainer>
                        <img src="./assets/icons/ErrorIcon.svg" alt="errorAccounts Icon" />
                        Network error
                        <RetryButton onClick={props.retry}>Try again</RetryButton>
                    </Subcontainer>
                </Container>
            }
        </>
    )
}

const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: cneter;
    justify-content: center;
    text-align: center;
    gap: 24px;
    color: rgba(62, 76, 89, 1);
    font-size: 18px;
    font-weight: 400;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RetryButton = styled.button`
    background: black;
    color: white;
    border: none;
    padding: 16px 54px;
    margin: 16px 0px;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 500;
`