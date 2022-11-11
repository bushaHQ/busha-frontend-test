import React from 'react'
import styled from 'styled-components'
import {walletList} from '../../types'


interface Iprops  {
    wallets : walletList[]
    onSelectChange: (e: any) => void
    selectedWallet: string
}

const SelectInput:React.FC<Iprops> = ({wallets,onSelectChange,selectedWallet}) => {
  return (
    <Div>
        <label>Select Wallet:</label>
        <Dropdown onChange={onSelectChange} value={selectedWallet}>
            <option value="">Select Wallet</option>
            {
                wallets.map(wallet=> {
                  return <option value={wallet.currency} key={wallet.currency}>{wallet.name}</option>
                })
            }
        </Dropdown>
    </Div>
  )
}

const Div=styled.div`
    &>label {
        font-size: 14px;
        font-weight: 600;
        color: #3E4C59;
    }
`
const Dropdown = styled.select`
  width: 100%;
  height: 55px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid #CBD2D9;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-indent: 10px;
  color: #000;
  appearance: none;
  &:focus {
    outline: none;
  }
  appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjQxIDAuMjk1TDYgNC44NzVMMTAuNTkgMC4yOTVMMTIgMS43MDVMNiA3LjcwNUwwIDEuNzA1TDEuNDEgMC4yOTVaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+Cjwvc3ZnPgo=');
  background-size: 0.9em;
  background-position: calc(100% - 1.3em) center;
  background-repeat: no-repeat;
  padding: 17px 0 20px 10px;
  margin: 12px 0 26px 0;
`;
export default SelectInput
