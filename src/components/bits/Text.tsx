import styled, { CSSObject, CSSProperties }  from 'styled-components';

export interface TextBaseProps {
	align?: 'center' | 'right' | 'left';
	weight?: CSSProperties['fontWeight'];
	size?: number;
	color?: string;
	children?: any;
	style?: CSSObject;
}

export interface TextProps extends TextBaseProps {
	mode?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}


const getBaseStyle = (props: TextBaseProps): CSSObject | TemplateStringsArray => ({
	fontSize: `${props.size || 0.8}em`,
	fontWeight: props.weight || 'normal',
	textAlign: props.align || 'left',
	color: props.color || 'rgba(0, 0, 0, 1)',
	lineHeight: '16px',
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
	size: 2,
	weight: 'bolder',
	...props
}));

export const H2 = styled.h2<TextBaseProps>((props) => getBaseStyle({
	size: 1.8,
	weight: 'bolder',
	...props,
}));

export const H3 = styled.h3<TextBaseProps>((props) => getBaseStyle({
	size: 1.6,
	weight: 'bold',
	...props,
}));

export const H4 = styled.h4<TextBaseProps>((props) => getBaseStyle({
	size: 1.4,
	weight: 'bold',
	...props,
}));

export const H5 = styled.h5<TextBaseProps>((props) => getBaseStyle({
	size: 1.2,
	weight: 'bold',
	...props,
}));

export const H6 = styled.h6<TextBaseProps>((props) => getBaseStyle({
	size: 1,
	weight: 'bold',
	...props,
}));

export const P = styled.p<TextBaseProps>((props) => getBaseStyle({
	size: 0.8,
	weight: 'normal',
	...props,
}));

export const Span = styled.span<TextBaseProps>((props) => getBaseStyle({
	size: 0.6,
	weight: 'lighter',
	...props,
}));

