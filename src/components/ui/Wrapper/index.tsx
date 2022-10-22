import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  width?: string | number,
  margin?: string
  backgroundColor?: string
}

export const Wrapper: React.FC<Props> = ({ className, children }) => {
  return <section className={className}>{children}</section>
}

export const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ''};
`

  // width: ${(props) => (props.width ? props.width : 'auto')};

/**
 * @TO DO
 *
 * Make Provison for Padding
 * P
 * PX
 * PY
 * PR/PL
 * PB/PT
 */
