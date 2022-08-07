import { PropsWithChildren, useState, useEffect } from "react";
import styled from "styled-components";

export interface ModalProps {
    show: boolean
}

export function ErrorWallets(props: PropsWithChildren<ModalProps>) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (props.show)
            setShow(true)
    }, [props.show])

    return (
        <>
            {(props.show && show) &&
                <Container>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14.04px' }}>
                        <Icon src="./assets/icons/AddWalletErrorIcon.svg"></Icon>
                        Network error
                    </div>
                    <button onClick={() => setShow(false)}
                        style={{ border: 'none', padding: 'none', background: 'rgba(255, 244, 244, 1)' }}>
                        <img src="./assets/icons/ErrorClose.svg" alt="errorAccounts close icon" />
                    </button>
                </Container>
            }
        </>
    )
}

const Container = styled.div`
    background: rgba(255, 244, 244, 1);
    border: 1px solid rgba(224, 179, 178, 1);
    color: rgba(215, 44, 13, 1);
    width: 351px;
    padding: 14.5px 17px 14.5px 20px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 750px) {
        width: 68%;
    }
    @media (max-width: 500px) {
        width: 63%;
    }
    @media (max-width: 400px) {
        width: 58%;
        font-size: 14px;
    }
`

const Icon = styled.img`
    @media (max-width: 750px) {
        display: none;
    }
`