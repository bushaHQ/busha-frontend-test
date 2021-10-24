import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import Loader from "../shared/Loader";

export interface ButtonProps {
	loading?: boolean
	disabled?: boolean
	text?: boolean
	children?: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
	const { loading } = props
	return (
		<BaseButton {...props} disabled={loading ? true : props.disabled}>
			<ButtonContentWrapper>
				{props.loading && (
					<LoaderWrapper>
						<Loader size={28} width={5} />
					</LoaderWrapper>
				)}
				<div style={{ opacity: props.loading ? 0 : 1, display: 'block' }}>{props.children}</div>
			</ButtonContentWrapper>
		</BaseButton>
	);
}

const ButtonContentWrapper = styled.div({
	display: 'flex',
	flex: '1 0 auto',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	position: "relative",
	height: '54px',
	minWidth: '54px',
	width: 'auto',
	transitionProperty: 'opacity',
})

const LoaderWrapper = styled.div({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
})

export const BaseButton = styled.button<ButtonProps>((props) => ({
	display: 'inline-flex',
	padding: '0px 36px',
	background: props.text ? 'transparent' : props.disabled ? '#CBD2D9' : '#000000',
	borderRadius: '40px',
	height: '54px',
	minWidth: '64px',
	color: '#fff',
	fontSize: '18px',
	lineHeight: '18px',
	textAlign: 'center',
	fontWeight: 'normal',
	boxSizing: 'border-box',
	border: 'none',
	cursor: 'pointer',
	outline: 'none',
	transition: '0.3s ease-in opacity',
	'&:hover': {
		opacity: props.disabled ? 0.9 : 0.77,
	}
}));
