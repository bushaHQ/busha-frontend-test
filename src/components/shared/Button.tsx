import * as React from "react";
import styled from 'styled-components'

interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void
}

export default function BaseButton(props: React.PropsWithChildren<ButtonProps>) {
    const { disabled = false, onClick } = props;

    return (
        <Button onClick={onClick} disabled={disabled}>
            {props.children}
        </Button>
    )
}

const Button = styled.button`
    height: 54px;
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    border: none;
    border-radius: 40px;
    cursor: pointer;

    &:hover {
        background-color: #1f1f1f;
    }

    &:focus {
        outline: 2px solid #000;
        outline-offset: 2px;
    }
    &:disabled {
        opacity: 0.5; 
    }
`;