import styled, { CSSProperties } from 'styled-components';

export interface RowProps {
	noGutters?: boolean,
	direction?: CSSProperties['flexDirection'];
	align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
	justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
	alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch';
}

export const Row = styled.div<RowProps>((props) => ({
	flexDirection: props.direction,
	display: 'flex',
	flexWrap: 'wrap',
	flex: '1 1 auto',
	margin: '-12px',
	...(props.noGutters && {
		margin: '0 !important'
	}),
	...(props.align && {
		alignItems: props.align
	}),
	...(props.justify && {
		justifyContent: props.justify
	})
}));
