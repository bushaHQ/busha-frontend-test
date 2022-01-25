import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Alert, Button, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import verification from '../../assets/images/verification.svg';
import error from '../../assets/images/error.svg';
import enter from '../../assets/images/enter.svg';
import BushaNavBar from '../../components/shared/Navbar';
import BushaSideBar from '../../components/shared/SideBar';
import Loader from '../../components/shared/Loader';
import { NavLink } from 'react-router-dom';
import Modal from '../../components/shared/Modal';
import "./wallets.scss";

interface Account {
    id: string;
    currency: string;
    hold: number;
    pending_balance: number;
    balance: number;
    name: string;
    type: string;
    deposit: boolean;
    payout: boolean;
    imgURL: string;
}

interface Wallet {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
}

const WalletsPage = () => {
    const [modalActive, setmodalActive] = useState(false);
    const [submitError, setsubmitError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [walletsLoading, setwalletsLoading] = useState(false);
    const [failure, setFailure] = useState(false);
    const [validation, setValidation] = useState('');
    const [walletFailure, setWalletFailure] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState('')
    // const addCommas: any = (num: number) => num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');;
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const currencyPosition = (curr: string, amount: number) => {
        if(curr == 'NGN'){
            return `₦ ${amount}`;
        } else {
            return `${amount} ${curr}`;
        }
    }
    const handleChange = (value: any) => {
        setSelectedWallet(value)
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true); 
        await fetch(`http://localhost:3090/accounts`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
              throw new Error("Bad response from server");
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setLoading(false);
                setAccounts(data);
            }
        })
        .catch((error) => {
            setLoading(false); 
            setFailure(true);
        });
    }
    
      

    async function postData() {
        setwalletsLoading(true); 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currency: selectedWallet })
        };

        fetch(`http://localhost:3090/accounts`, requestOptions)
        .then(response => response.json())
        .then(data => {
            setmodalActive(false);
            fetchData();
            // if (Array.isArray(data)) {
            //     console.log(JSON.stringify(data));

            //     // setwalletsLoading(false);
            //     // setmodalActive(false);
            // }
        })
        .catch(error => {
            setsubmitError(true);
        });
    }
    async function fetchWallets() {
        setwalletsLoading(true); 
        fetch(`http://localhost:3090/wallets`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setwalletsLoading(false);
                setWallets(data);
            }
        })
        .catch(error => {
            setWalletFailure(true);
        });
    }
    const submitForm = () => {
        if(selectedWallet == undefined || selectedWallet == ''){
            setValidation('Please select an option');
        }else{
            postData();
        }
    }
    const openFormModal = () => {
        setmodalActive(true);
        fetchWallets();
    }
    
    return (
    <>
       <BushaNavBar />
       <Container>
        <Row>
            <Col xs={2}>      
                <BushaSideBar />
            </Col>
            <Col md={10} xs={12}>
                <div className="">
                    <Row>
                        <Col xs={6}>
                            <h1>Wallet</h1>
                        </Col>
                        <Col xs={6} className="text-lg-end mt-auto">
                            <NavLink to="#" onClick={() => openFormModal()}>+ Add new wallet</NavLink>
                        </Col>
                    </Row>
                </div>
                <Row>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center mt-5 loading">
                            <h5>Loading...</h5>
                            <Loader size={100} /><br/>
                        </div>
                    ):(
                        failure ? (
                            <div className="d-flex justify-content-center align-items-center mt-5">
                                <Row>
                                    <Col xs={12} className="text-center"><img src={verification} className="img-responsive" /></Col>
                                    <Col xs={12} className="text-center mt-3">
                                        <p aria-label="Network error">Network error</p>
                                    </Col>
                                    <Col xs={12} className="text-center mt-1">
                                        <button className="btn btn-primary btn-lg btn-busha" onClick={() => fetchData()}>try again</button>
                                    </Col>
                                </Row>
                            </div>
                        ):(
                            <>
                                {accounts.map((data, idx) => (
                                    <Col md={4} key={idx}>
                                        <div className="busha-wallet-card">
                                            <div>
                                                <img src={data.imgURL} className="currency-icon" /> <span className="currency-name">{data.name}</span>
                                            </div>
                                            <div className="text-white balance">{currencyPosition(data.currency, data.balance)}</div>
                                            <div className="card-detail-icon">
                                                <img src={enter} className="detail-icon" />
                                            </div>
                                        </div>
                                    </Col>
                                ))
                                }
                            </>
                        )                      
                    )}
                </Row>
            </Col> 
        </Row>

        </Container>
        {modalActive && (
            <Modal isOpen={modalActive}>
                <Container className="py-5 px-3">
                    <Row>
                        <Col xs={10}>
                            <h3>Add new wallet</h3>
                        </Col>
                        <Col xs={2} className="mt-auto">
                            {/* <h4 className="text-lg-end mt-auto">x</h4> */}
                            <Button className="text-lg-end btn-close" onClick={() => setmodalActive(false)} />
                        </Col>
                    </Row>
                    {walletsLoading ? (
                        <div className="d-flex justify-content-center align-items-center mt-5 loading">
                            <Loader size={100} />
                        </div>
                    ):(
                        walletFailure ? (
                            <div className="d-flex justify-content-center align-items-center mt-5">
                                <Row>
                                    <Col xs={12} className="text-center"><img src={verification} className="img-responsive" /></Col>
                                    <Col xs={12} className="text-center mt-3"><p>Network Error</p></Col>
                                    <Col xs={12} className="text-center mt-1">
                                        <Button variant="primary" size="lg" className="btn-busha" onClick={() => fetchWallets()}>Try again</Button>
                                    </Col>
                                </Row>
                            </div>
                        ):(
                            <Row>
                                <Col xs={12} className="mt-5">
                                    <p>The crypto wallet will be created instantly and be available in your list of wallet.</p>
                                </Col>
                                <Col xs={12} className="mt-3">
                                    <form>
                                        <label>Select wallet</label>
                                        <select className="form-control mt-2" value={selectedWallet} 
                                        onChange={(e) => handleChange(e.target.value)}>
                                            <option>--------</option>
                                            {wallets.map((data, idx) => (
                                                <option value={data.currency}>{data.name}</option>
                                            ))}
                                        </select>
                                        <div className="text-danger">{validation}</div>
                                        <Col xs={12} className="mt-3 text-center">
                                            <Button type="button" variant="primary" size="lg" className="btn-busha" onClick={() => submitForm()} disabled={walletsLoading}>Create wallet</Button>
                                        </Col>
                                    </form>
                                </Col>
                                {submitError && (
                                    <Col xs={12} className="mt-5">
                                        <Alert variant="danger" onClose={() => setsubmitError(false)} dismissible>
                                                <img src={error} />
                                                <span className="ms-2" aria-label="Network error">Network error</span>
                                        </Alert>
                                    </Col>
                                )}
                                
                            </Row>
                        )
                        
                    )}
                </Container>
            </Modal>
        )}
    </>
    )    
}

export default WalletsPage; 