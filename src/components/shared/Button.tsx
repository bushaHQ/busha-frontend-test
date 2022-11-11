import React from 'react'
import styled from 'styled-components'

interface Iprops  {
    onClickEvent?: ()=>void
    title?:string
    onSubmitWallet?: ()=>void
}


const Button:React.FC<Iprops> = ({title,onClickEvent}) => {
  return (
    <P onClick={onClickEvent}>{title}</P>
  )
}

const P = styled.button`
    padding: 15px 50px;
    border: none;
    background-color: #000000;
    color: #fff !important;
    border-radius: 40px;
    font-weight: 500 !important;
    cursor: pointer;
    align-self: center;
    font-family: inherit;
`

export default Button;
