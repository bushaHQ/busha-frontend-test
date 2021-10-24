import { Button, Card, Col, Container, Row, Text } from '../components/bits'

function DesignSystem() {
	return (
	  <Container as="section">
		 <Text style={{ marginBottom: '20px' }}>Typography</Text>
		 <Text mode="h1" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="h2" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="h3" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="h4" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="h5" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="h6" color="rgba(98, 126, 234, 1)">Hello, World</Text>
		 <Text mode="p">Hello, World</Text>
 
		 <Text style={{ marginBottom: '20px', marginTop: '50px'}}>Grid</Text>
		 <Row>
			<Col xs={6}>
			  <Card background="#000" height="20px"></Card>
			</Col>
			<Col xs={6}>
			  <Card background="#000" height="20px"></Card>
			</Col>
			<Col xs={4} sm={6} lg={12}>
			  <Card background="#000" height="20px"></Card>
			</Col>
		 </Row>
 
		 <Text style={{ marginBottom: '20px', marginTop: '50px'}}>Buttons</Text>
		 <Row>
			<Col xs={4}>
			  <Button>Enabled</Button>
			</Col>
			<Col xs={4}>
			  <Button disabled>Disabled</Button>
			</Col>
			<Col xs={4}>
			  <Button loading>Loading</Button>
			</Col>
		 </Row>
	  </Container>
	);
 }

export default DesignSystem
