import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo.svg';
import Avatar from 'react-avatar';
import './index.scss';

const BushaNavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{background: "f0f0f0"}}>
        <Container>
            <Navbar.Brand href="#">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <NavBar.Text className="text-lg-end">
                <Avatar name="Oluwatobi" size="34" color="#9AA5B14D" fgColor="#000" round={true} textSizeRatio={2} style={{marginRight: '5px' }} /><span className="display-name">Oluwatobi Akindunjoye</span>
            </NavBar.Text>
        </Container>
        </Navbar>
    )    
}

export default BushaNavBar; 