import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  fontSize?: any
  color?: string
  fontWeight?: string | number
  lineHeight?: string
}

export const PageText: React.FC<Props> = ({ className, children }) => {
  return <span className={className}>{children}</span>
}

export const Text = styled(PageText)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '1rem')};
`
