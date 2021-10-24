import { ReactNode } from "react";
import styled from "styled-components";
import Loader from "../shared/Loader";

export interface ButtonProps {
	loading?: boolean
	disabled?: boolean
	children?: ReactNode
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
				<span style={{ opacity: props.loading ? 0 : 1 }}>{props.children}</span>
			</ButtonContentWrapper>
		</BaseButton>
	);
}

const ButtonContentWrapper = styled.div({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	position: "relative",
	height: '54px'
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
	display: 'flex',
	padding: props.loading ? '0px 54px' : '0px 54px',
	background: props.disabled ? '#CBD2D9' : '#000000',
	borderRadius: '40px',
	height: '54px',
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
