import styled, { CSSObject, CSSProperties }  from 'styled-components';

export interface TextBaseProps {
	align?: 'center' | 'right' | 'left';
	weight?: CSSProperties['fontWeight'];
	size?: number;
	lineHeight?: number;
	letterSpacing?: string;
	color?: string;
	truncate?: boolean;
	children?: any;
	style?: CSSObject;
}

export interface TextProps extends TextBaseProps {
	mode?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}


const getBaseStyle = (props: TextBaseProps): CSSObject | TemplateStringsArray => ({
	fontSize: `${props.size || 0.8}rem`,
	lineHeight: `${props.lineHeight || 0.8}rem`,
	letterSpacing: props.letterSpacing || '.03125em',
	fontWeight: props.weight || 'normal',
	textAlign: props.align || 'left',
	color: props.color || 'rgba(0, 0, 0, 1)',
	
	...(props.truncate && {
		display: 'block',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	})
});

export const Text = (props: TextProps) => {
	const { mode, ...baseProps } = props

	switch (mode) {
		case 'h1':
			return <H1 {...baseProps} />;

		case 'h2':
			return <H2 {...baseProps} />;

		case 'h3':
			return <H3 {...baseProps} />;

		case 'h4':
			return <H4 {...baseProps} />;

		case 'h5':
			return <H5 {...baseProps} />;

		case 'h6':
			return <H6 {...baseProps} />;

		case 'span':
			return <Span {...baseProps} />;
	
		default:
			return <P {...baseProps} />
	}
}

export const H1 = styled.h1<TextBaseProps>((props) => getBaseStyle({
	size: 6,
	lineHeight: 6,
	letterSpacing: '-.015625em',
	weight: 'lighter',
	...props
}));

export const H2 = styled.h2<TextBaseProps>((props) => getBaseStyle({
	size: 3.75,
	lineHeight: 3.75,
	letterSpacing: '-.0083333333em',
	weight: 'lighter',
	...props,
}));

export const H3 = styled.h3<TextBaseProps>((props) => getBaseStyle({
	size: 3,
	lineHeight: 3.125,
	letterSpacing: 'normal',
	weight: 'normal',
	...props,
}));

export const H4 = styled.h4<TextBaseProps>((props) => getBaseStyle({
	size: 2.125,
	lineHeight: 2.5,
	letterSpacing: '.0073529412em',
	weight: 'normal',
	...props,
}));

export const H5 = styled.h5<TextBaseProps>((props) => getBaseStyle({
	size: 1.5,
	lineHeight: 2,
	weight: 'bold',
	...props,
}));

export const H6 = styled.h6<TextBaseProps>((props) => getBaseStyle({
	size: 1.25,
	lineHeight: 2,
	letterSpacing: '.0125em',
	weight: 'bold',
	...props,
}));

export const P = styled.p<TextBaseProps>((props) => getBaseStyle({
	size: 1,
	lineHeight: 1.5,
	weight: 'normal',
	...props,
}));

export const Span = styled.span<TextBaseProps>((props) => getBaseStyle({
	size: 0.6,
	weight: 'lighter',
	...props,
}));

