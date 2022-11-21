import { FC, SyntheticEvent, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Loader from './shared/Loader'
import { WalletCardProps } from './WalletCard'
import Wallets from './Wallets'
import Error from './Error'


interface ContentProps {
    content: string;
    handleAction?: (e: SyntheticEvent) => void;
    fetchAccounts: () => void;
    data: WalletCardProps[];
    error: string;
}

const Content: FC<ContentProps> = ({ content, handleAction, fetchAccounts, error, data }) => {      
    useEffect(() => {
      if (content === 'Wallets') {
        fetchAccounts()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content])

    const handleError = () => fetchAccounts()
    
  return (
    <ContentContainer>
        <TitleWrapper>
            <Title>{content}</Title>
            {content === 'Wallets' && !error && data?.length ? <Button onClick={handleAction}>+ Add new wallet</Button> : ''}
        </TitleWrapper>
        {content === 'Wallets' && !error && data?.length ? 
            <Wallets data={data} /> : !!error ? <Error mt={12.6} handleClick={handleError} error={error} /> :
            <LoaderWrapper top={170}><Loader size={60} width={7} /></LoaderWrapper>}
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
    width: 100%;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3.2rem;
    line-height: 3.2rem;
    color: #000000;
    font-weight: 700;
    margin:0;
    padding: 0;
`

const Button = styled.button`
    font-family: Aribau Grotesk;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.6rem;
    border: none;
    background: none;
    color: #000;
    cursor: pointer;
    outline: none;
`

export const LoaderWrapper = styled.div<{top?: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.top ?? 0}px;
    
    ${props => 
        !props.top &&
        css`
            with: 100%;
            height: 100%;
        `
    }
`

export default Content