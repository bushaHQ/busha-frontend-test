import React from 'react'
import styled from 'styled-components'
import {ReactComponent as ErrorIcon} from '../../assets/svgs/error.svg'
import Button from './Button'

interface Iprops  {
  setReload: React.Dispatch<React.SetStateAction<boolean>>
}

const Error:React.FC<Iprops> = ({setReload}) => {
  const onHandleClick=()=> {
    setReload((prevstate)=> !prevstate)
}
  return (
    <Container>
      <ErrorIcon/>
      <p>Network Error</p>
      <Button title='Try Again' onClickEvent={onHandleClick}/>
    </Container>
  )
}

const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &> p {
    color:#3E4C59;
    font-size: 18px;
    font-weight: 400;
  }

`
export default Error;
