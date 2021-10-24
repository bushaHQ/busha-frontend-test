import styled from "styled-components";

export interface ListItemProps {
	link?: boolean
	active?: boolean
}

export const List = styled.ul((props) => ({
	display: 'block',
	position: 'static',
	padding: '8px 0',
	transition: 'box-shadow .28s cubic-bezier(.4,0,.2,1)',
}))

export const ListItem = styled.li<ListItemProps>((props) => ({
	alignItems: 'center',
    display: 'flex',
    flex: '1 1 100%',
    letterSpacing: 'normal',
    minHeight: '48px',
    outline: 'none',
    padding: '0 16px',
    position: 'relative',
    textDecoration: 'none',
	 'a, span, p': {
		 fontSize: '16px !important',
		 color: 'rgba(62, 76, 89, 1) !important',
		 
	 },

	...(props.link && {
		cursor: 'pointer',
		userSelect: 'none',
	}),

	':hover': {
		background: '#F5F7FA',
		borderRadius: '3px',
	},

	...(props.active && {
		background: '#F5F7FA',
		borderRadius: '3px',
		'a, span, p': {
			fontSize: '16px !important',
			color: 'rgba(0, 0, 0, 1) !important',
			fontWeight: 'bold',
		},
	})
}))
