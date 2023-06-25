import { useCallback, useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import Modal from "./shared/Modal";
import { NewWallet } from "./NewWallet";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Header />
      <Homestyle>
        <Sidebar />
        <Main handleOpen={handleOpen} />
        <Modal isOpen={isOpen}>
          <NewWallet handleClose={handleClose} />
        </Modal>
      </Homestyle>
    </>
  );
};

const Homestyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 160px;
`;
