import styled from "styled-components";

interface Props {
    onClose: () => void
}

const CloseButton = styled.img`
    cursor: pointer;
`;

export const Close = ({ onClose }: Props) => {
    return (
        <CloseButton onClick={onClose} src="/close.svg" aria-label="Close button" />
    )
}