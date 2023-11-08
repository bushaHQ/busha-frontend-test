const AddWalletModal = ({closeModal, isModalOpen}) => {

    return (
        <section className={`${isModalOpen ? "addWallet-modal" : "addWallet-modal hide"}`}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2>Add New Wallet</h2>
                <button onClick={() => closeModal()} className="closeModal-btn">X</button>
            </div>
            <p>The crypto wallet will be created instantly and be available in your list of wallets.</p>
            <label htmlFor="wallet-type" style= {{display: "block", margin: "10px 10px 10px 0"}}>Select wallet</label>
            <select name="wallet">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Litecoin">Litecoin</option>
                <option value="Etherium">Etherium</option>
                <option value="Pi Coin">Pi Coin</option>
                <option value="DogeCoin">DogeCoin</option>
            </select>
            <button className="create-wallet-btn" >Create wallet</button>
        </section>  
    )
}

export default AddWalletModal;