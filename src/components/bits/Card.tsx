import styled from "styled-components";

export interface CardProps {
	borderWidth?: number
	borderRadius?: number
	background?: string
	height?: string
	width?: string
	maxWidth?: string
	flat?: boolean
}

export const Card = styled.div<CardProps>((props) => ({
	borderWidth: `${props.borderWidth || 1}px`,
	borderRadius: `${props.borderRadius || 10}px`,
	display: 'block',
	maxWidth: props.maxWidth || '100%',
	outline: 'none',
	textDecoration: 'none',
	transitionProperty: 'box-shadow, opacity',
	position: 'relative',
	overflowWrap: 'break-word',
	whiteSpace: 'normal',
	background: props.background || '#111111',
	height: props.height,
	width: props.borderWidth,
	boxShadow: props.flat ? 'none' : '0px 10px 20px rgba(138, 138, 138, 0.5)'
}))
