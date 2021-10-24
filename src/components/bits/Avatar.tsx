import styled from "styled-components";

export interface AvatarProps {
	size?: number,
	background?: string
	color?: string
}

export const Avatar = styled.div<AvatarProps>((props) => ({
	width: `${props.size || 42}px`,
	minWidth: `${props.size || 42}px`,
	height: `${props.size || 42}px`,
	borderRadius: '50%',
	background: props.background || 'rgba(154, 165, 177, 0.3)',
	alignItems: 'center',
	display: 'inline-flex',
	justifyContent: 'center',
	position: 'relative',
	textAlign: 'center',
	verticalAlign: 'middle',
	overflow: 'hidden',
	lineHeight: 'normal !important',
	
	'span, p, div, img': {
		textAlign: 'center',
		fontSize: `${(props.size || 42) - 24}px`,
		width: `${(props.size || 42) - 24}px`,
		height: `${(props.size || 42) - 24}px`,
		lineHeight: `${(props.size || 42) - 24}px`,
		fontWeight: 'bold',
		color: props.color || 'rgba(62, 76, 89, 1)',
	},
}))
