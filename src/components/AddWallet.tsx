import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { WalletType } from './Layout'
import Error, {Button, SoftTitle} from './Error'
import SelectIcon from '../assets/images/Select-Icon.svg'
import { LoaderWrapper } from './Content'
import Loader from './shared/Loader'
import {URL, CONFIG} from "../utils/constants"
import ErrorIcon from '../assets/images/NetErrorIcon.svg'

interface AddWalletProps {
    handleClose: () => void;
    fetchAccounts: () => void;
    catchError: string;
}

const AddWallet: FC<AddWalletProps> = ({ handleClose, fetchAccounts, catchError }) => {
    const [data, setData] = useState<WalletType[]>([])
    const [error, setError] = useState('')
    const [currency, setCurrency] = useState('')
    const [disable, setDisable] = useState(false)
    const [postError, setPostError] = useState('')
    
    const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCurrency(e.currentTarget.value)
    },[])

    const handleError = () => {
        setError('')
        fetchWallets()
    }

    const fetchWallets = useCallback(() => {
        const getWallets = async () => {
            try {
                const wallets = await (await fetch(`${URL}/wallets`)).json()
                
                if (!wallets?.error) return setData(wallets)
                return setData(wallets)
            } catch(error: any) {                
                setError('Network error')
            }
        }
        getWallets()
    }, [])

    useEffect(() => {                   
        fetchWallets()

        return () => {
            handleClose()
            setData([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (catchError) setError(catchError)
      }, [catchError])

      useEffect(() => {
        if (data.length) setCurrency(data[0].currency)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [data])

    const handleSubmit = async () => {
        try {
            setPostError('')
            setDisable(state => !state)
            const newWallet = {currency}
            CONFIG.body = JSON.stringify(newWallet)
            console.log(newWallet);
            
            const res = await (await fetch(`${URL}/accounts`, CONFIG)).json()

            if (res?.error) {
                setPostError('Network error')
                setDisable(state => !state)
                return
            } 
            fetchAccounts()
            setDisable(state => !state)
            handleClose()
            return 

        } catch(error: any) {
            setPostError('Network error')
        }
    }

  return data?.length && !error ? (
    <Wrapper>
        <Header>
            <Title>Add new wallet</Title>
            <Title aria-label="Close button" style={{cursor: 'pointer'}} onClick={handleClose}>x</Title>
        </Header>
        <SoftTitle mt={4.9} size={36}>The crypto wallet will be created instantly and be available in your list of wallets.</SoftTitle>
        <Label>
            Select a wallet
            <Select value={data[0].currency} onChange={handleSelect}>
                {data.length && data?.map((wallet) => <Option value={wallet.currency} key={wallet.name}>{wallet.name}</Option>)}
            </Select>
        </Label>
        <LoaderWrapper>
            <Button disabled={disable} onClick={handleSubmit}>
                {disable ? 
                (<LoaderWrapper>
                    <Loader width={2} size={15} />
                </LoaderWrapper>) : 'Create wallet'}
            </Button>
        </LoaderWrapper>
        {postError && 
        <ErrorBtn>
            <span style={{color: 'inherit', display: 'flex', gap: 14, alignItems: 'center'}}>
                <img src={ErrorIcon} alt="Error"/>
                {postError}
            </span>
            <span onClick={() => setPostError('')} style={{color: 'inherit', cursor: 'pointer'}}>x</span>
        </ErrorBtn>}
    </Wrapper>
  ) : !!error ? <LoaderWrapper><Error error={error} handleClick={handleError} /></LoaderWrapper> :
    <LoaderWrapper><Loader width={5} size={50} /></LoaderWrapper>
}

const Wrapper = styled.div`
    margin-top: 7.4rem;
    padding-left: 2.4rem;
    padding-right: 2rem;

    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: #000;
    margin:0;
    padding: 0;
`

const Label = styled.label`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin-top: 4.3rem;
`

const Select = styled.select`
    border: 1px solid #CBD2D9;
    border-radius: 5px;
    width: 39.2rem;
    height: 6.4rem;
    text-align: left;
    outline: none;
    margin-top: 1.4rem;
    padding: 20px;
    appearance: none;

    display: flex;
    align-items: center;

    background-image: url(${SelectIcon});
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
`

const Option = styled.option`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
`

const ErrorBtn = styled.button`
    background: #FFF4F4;
    border: 1px solid #E0B3B2;
    border-radius: 8px;
    padding: 1.3rem 2rem;
    color: #D72C0D;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    margin-top: 4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default AddWallet