import { Story, Meta } from "@storybook/react";
import { useEffect, useState } from "react";
import AddWallet from "../components/AddWallet";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Modal from "../components/shared/Modal";
import Sidebar from "../components/Sidebar";
import { WalletCardProps } from "../components/WalletCard";

const accounts =  [
    {
      "id": "977dacbb-95b4-4432-9dc9-b66f707b7043",
      "currency": "NGN",
      "hold": "530000000",
      "pending_balance": "0",
      "balance": "2499998700",
      "name": "Naira",
      "type": "fiat",
      "deposit": true,
      "payout": true,
      "imgURL": "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/NGN.svg"
    },
    {
      "id": "d92abd3e-933b-4f23-a3e8-fe641e9f1bec",
      "currency": "ETH",
      "hold": "0.508056",
      "pending_balance": "0",
      "balance": "0.1",
      "name": "Ethereum",
      "type": "digital",
      "deposit": true,
      "payout": true,
      "imgURL": "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/ETH.svg"
    },
    {
      "id": "5ad2ee10-5ca6-4576-96fe-1ef642057681",
      "currency": "BTC",
      "hold": "0",
      "pending_balance": "0.00001",
      "balance": "142.999009",
      "name": "Bitcoin",
      "type": "digital",
      "deposit": true,
      "payout": true,
      "imgURL": "https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/BTC.svg"
    },
  ]
 

export default {
  component: Layout,
  title: "Components/Layout",
  decorators: [
    (Story) => (
      <div id="modal-root">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<{handleClick: () => void, catchError: string}> = ({ catchError }) => {
    const [view, setView] = useState('Wallets')
    const [error, setError] = useState('')
    const [open, setOpen] = useState(false)

    const handleWallet = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const fetchAccounts = () => {
        console.log('fetching...');
    }    

    useEffect(() => {
        if (catchError) {
          setError(catchError)
        }
      }, [catchError])
    
    const handleClick = (item: string) => setView(item)
    return (
        <div style={{display: 'flex', gap: 40}}>
            <Sidebar handleClick={handleClick} />   
            <Content fetchAccounts={fetchAccounts} error={error} data={accounts} handleAction={handleWallet} content={view} />
            <Modal isOpen={open}>
                <div>
                    <AddWallet catchError={error} fetchAccounts={fetchAccounts} handleClose={handleClose} />
                </div>
            </Modal>
        </div>
    )
};

export const Primary = Template.bind({});
