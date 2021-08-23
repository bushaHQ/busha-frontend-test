import ReactDOM from "react-dom";
import * as React from "react";
import styled from "styled-components";

export interface ModalProps {
  isOpen: boolean;
}
export default function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { isOpen } = props;

  const el = React.useRef(document.createElement("div"));
  const modalRoot = document.getElementById("modal-root");

  React.useEffect(() => {
    const _el = el.current;
    modalRoot?.appendChild(_el);

    return () => {
      modalRoot?.removeChild(_el);
    };
  }, [modalRoot]);

  if (!isOpen) return null;

  const modal = (
    <ModalContainer data-testid="modal">
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );

  return ReactDOM.createPortal(modal, el.current);
}

const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 440px;
  height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  overflow-y: auto;
`;
