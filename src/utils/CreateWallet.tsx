import React,{ useEffect,useState} from 'react'
import styled from 'styled-components'

import {ReactComponent as CloseIcon} from '../assets/svgs/close.svg'
import {ReactComponent as FlagIcon} from '../assets/svgs/flag.svg'
import SelectInput from '../components/shared/SelectInput'
import Button from '../components/shared/Button'
import WalletApi from '../api/Wallets-api-config'
import { walletList } from '../types'
import Loader from '../components/shared/Loader'
import Error from '../components/shared/Error'

interface Iprops {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  accountReload:React.Dispatch<React.SetStateAction<boolean>>
}


const CreateWallet:React.FC<Iprops> = ({setShowModal,accountReload}) => {
    const [wallets,setWallets] = useState<walletList[]>([])
    const [isLoading,setIsLoading] = useState<boolean| null>(true)
    const [reload,setReload]=useState<boolean>(false)
    const [selectedWallet,setSelectedWallet] = useState<string>('')
    const [showErrMessage,setShowErrMessage] = useState<boolean>(false)

    useEffect(()=> {
        setIsLoading(true)
        const fetchData=async()=>{
            const response= await WalletApi.get('/wallets')
            console.log(response.data);
            setIsLoading(false)
            setWallets(response.data)
        }
        fetchData().catch(()=>setIsLoading(null))
    },[reload])

    const componentRender=()=> {
        if(isLoading) {
          return (
            <LoaderContainer>
                <Loader size={40} width={3}/>
            </LoaderContainer> 
          )
        }else if(isLoading===false) {
          return (
            <>
                <p>The crypto wallet will be created instantly and be available in your list of wallets.</p>
                <SelectInput wallets={wallets} onSelectChange={onSelectChange} selectedWallet={selectedWallet}/>
                <Button title='Create a Wallet' onClickEvent={onSubmitWallet}/>
                {
                  showErrMessage ? <ErrorMessage>
                  <FlagIcon/>
                  <p>
                  No more available wallet
                  </p>
                </ErrorMessage> : null
                }
                
            </>
          )
        }else{
          return (
            <ErrorContainer>
                <Error setReload={setReload}/>
            </ErrorContainer>
          )
        }
      }

    const onSelectChange=(e:any)=> {
        setSelectedWallet(e.target.value)
        console.log(selectedWallet);
        
    }
    const onSubmitWallet=()=> {
      // console.log('hey');
      
      WalletApi.post('/accounts',{
        currency: selectedWallet
      }).then(()=> overallReload()).catch(()=>setShowErrMessage(true)
      )
        
    }

    const overallReload=()=> {
      accountReload(prevState=>!prevState)
      setReload(prevState=>!prevState)
      setShowModal(false)
    }
  return (
    <>
         <Container>
         <Header>
              <p>Add new Wallet</p>
              <CloseIcon onClick={()=>setShowModal(false)}/>
          </Header>
          {componentRender()}
        </Container>
    </>
   
  )
}

const Container = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    &>p {
        font-size: 15px;
        font-weight: 400;
        color:#3E4C59;
        line-height: 23px;
        padding-bottom: 20px;
    }
`
const Header=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>p {
        font-weight: 600;
        font-size: 18px;
    }
    &>svg {
      cursor: pointer;
    }
`

const LoaderContainer= styled.div`
    display: flex;
    justify-content: center;
    padding-top: 82%;
`
const ErrorContainer=styled.div`
    padding-top: 52%;
`
const ErrorMessage=styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  color: #D72C0D;
  width: 96%;
  gap: 10px;
  background: #FFF4F4;
  border: 1px solid #E0B3B2;
  padding-left: 15px;
  border-radius: 8px;
  margin-top: 10%;
  &>p {
    
  }
`
// const ErrInfo=styled.div`
  
// `

export default CreateWallet;
