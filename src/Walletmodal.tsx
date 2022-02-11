import { useState } from "react";
import React from 'react';

interface ModalData {
  currency: string;
  imgURL: string;
  name: string;
  type: string;
}

interface Response {
  modalres:Array<ModalData>;
  closeModel: () => void;
}

const WalletModal = ({modalres, closeModel}: Response) => {

  const baseLine = 'http://localhost:3090/';
  
  let selectName: string = modalres[1].name;
  


  const [formData, setFormData] = useState(selectName);
  const [textState, setTextState] = useState("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({currency: formData})
    setTextState("Loading...")
    fetch(`${baseLine}accounts`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({currency: formData})
        }).then(() => {
            setTextState("")
            closeModel()
        });
  } 
  

  
  return (
    <>
    <div className="modal-form" id='modal'>
        <form onSubmit={onSubmit} > 
        <label className="form-label">Select Wallet</label>
        <br />
        <select
          className="form-select"
          value={formData}
          onChange={(e) => { setFormData(e.target.value);}}>
          {modalres.map((res)=>(
             <option id="name" value={res.currency} key={res.currency}>{res.name}</option>
          ))}
        </select>

         <button type="submit" className="form-btn" aria-label={textState}>
          Create Wallet
          </button>
       </form>
      
    </div>
  </>
  );
}

export default WalletModal;