import React, {useState, useEffect} from 'react'
import Loader from '../components/shared/Loader'
import Error from './Error';
import Modal from './shared/Modal'
const URL = '/accounts';


const Wallet = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(URL,{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.length && setData(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error)
            setError(true);

        })
    }
    const retry = () => {
        setIsLoading(true);
        setError(false);
        getData();
    }

    if(error) {
        return(
            <Error onClick={retry}/>
        )
    }

    const toggleModal = () =>{
        // setIsLoading(true);
        setOpenModal(visible => !visible); 


    }


  return (
    <div className="wallet-container">
        <Modal isOpen={openModal} toggleModal={toggleModal} getData={getData}/>
        <div className="heading-bar">
            <h1 className="heading">Wallets</h1>
            <button className="add-link" onClick={toggleModal}>+ Add new wallet</button>
        </div>
        <div className="card-container">
            <div className="card-items">
            {isLoading ? 
            
                (<span className="spinner"><Loader /></span>):


                    (  data?.map((item: any) => (
                            
                                <div className="card" key={item.id} >
                                    <div className="card-logo">
                                            <img src={item.imgURL} alt="Naira" className="card-img"/> 
                                        <p className="currency-name">{item.name}</p>
                                    </div>
                                    <p className="currency-balance">{item.balance} <span>{item.currency}</span></p>
                                    <div className="arrow-div">
                                        <p className="arrow-icon"> &gt; </p>
                                    </div>
                            </div>
                    )))
                }

                
            </div>
        </div>

        
    </div>
  )
}

export default Wallet