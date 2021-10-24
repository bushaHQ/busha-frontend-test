import styled from "styled-components";

export const Nav = styled.nav((props) => ({
	position: 'fixed',
	left: '0%',
	right: '0%',
	top: '0%',
	height: '56px',
	background: '#FFFFFF',
	boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
	zIndex: 1000,
	'+ main': {
		marginTop: '56px'
	}
}))
