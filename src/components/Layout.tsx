import { FC, useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import Content from "./Content"
import Header from "./Header"

import Modal from "./shared/Modal"
import Sidebar from "./Sidebar"

import AddWallet  from './AddWallet'
import { WalletCardProps } from "./WalletCard"
import {URL} from '../utils/constants';

export interface WalletType {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
}

const Layout: FC<{catchError: string}> = ({ catchError }) => { 
    const [content, setContent] = useState('Wallets')
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<WalletCardProps[]>([])
    const [error, setError] = useState('')

    const handleClick = (item: string) => setContent(item)

    const handleWallet = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const fetchAccounts = useCallback(() => {
        const getAccounts = async () => {
            try {
                setError('')
                const accounts = await (await fetch(`${URL}/accounts`)).json()
                if (accounts?.error) setError('Network error')
                else setData(accounts)
            } catch(error: any) {
                setError('Network error')
            }
        }
        getAccounts()
    }, [])

    useEffect(() => {
      if (catchError) {
        setError(catchError)
      }
    }, [catchError])
    

  return (
    <>
      <Header />
      <Main>
        <Sidebar handleClick={handleClick}/>
        <Content fetchAccounts={fetchAccounts} error={error} data={data} handleAction={handleWallet} content={content} />
      </Main>
      <Modal isOpen={open}>
        <ModalWrapper>
            <AddWallet catchError={error} fetchAccounts={fetchAccounts} handleClose={handleClose} />
        </ModalWrapper>
      </Modal>
    </>
  )
}

const Main =  styled.main`
    display: flex;
    margin-top: 60px;
    gap: 65px;
    margin-left: 16rem;
    margin-right: 16rem;
    `
    
    const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export default Layout