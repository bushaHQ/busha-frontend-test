// import useFetch from "./useFetch";
import Loader from "./components/shared/Loader";
import CardFlow from "./Cardflow";
import WalletModal from "./Walletmodal";
import Modal from "./components/shared/Modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Expired from "./images/expired.png";
import Close from './images/close.png';

const Button = styled.button`
  display: block;
  color: white;
  background: #000000;
  border-radius: 40px;
  padding: 18px 54px;
  font-size: 1em;
  margin: 1em 0em 1em 1em;
  margin-left: 110px;
  border: 1px solid black;
  width: 186px;
  height: 54px;
`;


const WalletsList = () => {

    const baseLine = 'http://localhost:3090/';

    // const { response, isLoading, error } = fetch(`${baseLine}accounts`);
    const toggleRefreshState = useState(0)
    const [toggleRefresh, setToggleRefresh] = toggleRefreshState

    const toggleRefreshStateForError = useState(0)
    const [toggleRefreshError, setToggleRefreshError] = toggleRefreshStateForError

    const [response, setresponse] = useState<[]>();
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(`${baseLine}accounts`, { signal: abortCont.signal })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setisLoading(false);
                setError(false);
                setresponse(response);
            })
            .catch(() => {
                setisLoading(false);
                setError(true);
            });

        return () => abortCont.abort();

    }, [toggleRefresh, toggleRefreshError])


    // const { response:modalres , isLoading:modalloading, error:modalerr } = useFetch(`${baseLine}wallets`);

    const [isOpen, setIsOpen] = React.useState(false);
    const [modalres, setModalRes] = useState<[]>();
    const [modalloading, setModalLoading] = useState(true);
    const [modalerr, setWalletError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(`${baseLine}wallets`, { signal: abortCont.signal })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                setModalLoading(false);
                setWalletError(false);
                setModalRes(response);
            })
            .catch(() => {
                setModalLoading(false);
                setWalletError(true);
            });

        return () => abortCont.abort();

    }, [])

    // const fetchWallets = () => {
    //     fetch(`${process.env.REACT_APP_PROXY}/wallets`)
    //       .then(res => {
    //         if(!res.ok){
    //           setWallets({...wallets, isLoaded: true, items: [], failed: true})
    //           throw Error(res.statusText)
    //         }
    //         return res.json()
    //       })
    //       .then(
    //         (result) => {
    //           setWallets({...wallets, isLoaded: true, items: result, failed: false})
    //         })
    //         .catch((err)=> console.log(err))
    //   }

    function onGetAgain() {
        setToggleRefreshError((t) => t + 1)
    }

    function onWalletDialogClosed() {
        setIsOpen(false)
        setToggleRefresh((t) => t + 1)
    }

    return (
        <>
            {
                isLoading &&
                <div className="second">
                    <div className="wallet-content">
                        <div className="wallet-header">
                            <div className="wallet">Wallets</div>
                        </div>
                        <div className="loader">
                            <Loader
                                size={41.685}
                                width={4}
                            />
                        </div>
                    </div>
                </div>
            }

            {
                response &&
                <div className="second">
                    <div className="wallet-content">
                        <div className="wallet-header">
                            <div className="wallet">Wallets</div>
                            <div className="add-wallet">
                                <button className="add-new-wallet" type="button" onClick={() => setIsOpen(true)}>
                                    + Add New Wallet
                                </button>
                            </div>
                        </div>
                        <div className="cards">
                            <CardFlow response={response} />
                        </div>
                    </div>
                </div>
            }

            {
                error &&
                <div className="second">
                    <div className="wallet-content">
                        <div className="loader">
                            <img src={Expired} alt="" className='error-img-main' />
                        </div>
                        <br />
                        <p className="main-error-text"> Network Error</p>
                        <button className="main-btn" aria-label="loading..." onClick={() => onGetAgain()}> Try Again </button>
                    </div>
                </div>
            }

            <Modal isOpen={isOpen}>
                <div className="container-modal">


                    {modalloading && <div className="loader-modal" aria-label="Loading..." >
                        <Loader
                            size={41.685}
                            width={4}
                        />
                    </div>}



                    {modalerr && <div className="error-modal">
                        <img src={Expired} alt="" className='error-img' />
                        <p className="error-text"> Network Error</p>
                        <Button>Try Again</Button>
                    </div>}




                    {modalres && <>
                        <div className="content-modal">
                            <div className="content-modal-title">Add New Wallet</div>
                            <div className="content-modal-btn"  >
                                <button aria-label="Close Button" onClick={() => setIsOpen(false)}>X</button>
                            </div>
                        </div>
                        <div className="content-modal-body">
                            The crypto wallet will be created instantly and be available in your list of wallets.
                        </div>
                        <WalletModal modalres={modalres} closeModel={() => onWalletDialogClosed()} />
                    </>}


                </div>

            </Modal>

        </>
    )
}

export default WalletsList;