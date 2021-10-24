import styled from 'styled-components';
import { Col } from './Col';
import { Row } from './Row';

export interface ContainerProps {
	fluid?: boolean;
	spacing?: number;
	fillHeight?: boolean;
}

const spacing = 12; // Defualt spacing. TODO: make constants into theme and share accross components

export const Container = styled.div<ContainerProps>((props) => ({
	padding: `${props.spacing || spacing}px`,
	marginLeft: 'auto',
	marginRight: 'auto',

	'@media (min-width: 1264px)': {
		maxWidth: '1185px',
	},
	'@media (min-width: 960px)': {
		maxWidth: '900px'
	},

	...(props.fluid && {
		maxWidth: '100% !important',
	}),
	...(props.fillHeight && {
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		height: '100%',
	}),
	[`${Row}`]: {
		flex: '1 1 100%',
      maxWidth: `calc(100% + ${props.spacing || spacing}px)`,
		
		[`${Col}:only-child`]: {
			margin: `calc(-${props.spacing || spacing}px / 2)`
		},
		
		[`${Col}:not(:only-child)`]: {
			margin: 'auto 0'
		},

		[`${Col}*:not(:only-child)`]: {
			[`> ${Row}`]: {
				[`${Col}:first-child`]: {
					marginTop: `calc(-${props.spacing || spacing}px / 2)`,
				},
				[`${Col}:last-child`]: {
					marginBottom: `calc(-${props.spacing || spacing}px / 2)`,
				}
			}
		},

		[`> ${Col}`]: {
			padding: `${props.spacing || spacing}px`,
		}
	},
}));
