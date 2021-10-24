import { Button } from "./Button"
import { Col } from "./Col"
import { Row } from "./Row"
import { Text } from "./Text"

export interface ErrorViewProps {
	error?: string
	onRetry?: () => void
}

export const ErrorView = (props: ErrorViewProps) => {
	return (
		<Row direction="column" justify="center" align="center">
			<Col cols>
				<Row justify="center">
					<img src="/error-icon.svg" alt="Error" style={{ marginTop: '30px' }} />
				</Row>
			</Col>

			<Col cols>
				<Row justify="center" style={{ marginBottom: '30px' }}>
					<Text align="center">{ props.error || 'Network Error'}</Text>
				</Row>
			</Col>

			<Col cols>
				<Row justify="center">
					<Button onClick={props.onRetry}>Try again</Button>
				</Row>
			</Col>
		</Row>
	)
}