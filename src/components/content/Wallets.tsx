import { useState } from "react";
import styled from "styled-components";
import Loader from "../shared/Loader";
import Modal from "../shared/Modal";

const WalletsContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ContentContainer className="content">
            {
                isLoading ?
                    <Loader />
                :
                    <></>
            }
            
            <Modal isOpen={isModalOpen}>
                <h1>I am okay</h1>
                <button onClick={() => setIsModalOpen(false)}>close</button>
            </Modal>
        </ContentContainer>
    );
}

export default WalletsContent;

const ContentContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: 75%;
    border: 0px solid red;
`;
