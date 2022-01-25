import { Nav } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';

const BushaSideBar = () => {
    return (
        <>
        <Nav className="d-none d-md-block sidebar" activeKey="/">
            <div className="sidebar-sticky"></div>
            <div className="nav-item">
                <Link to="/" className="active">Wallets</Link>
            </div>
            <div className="nav-item">
                <Link to="/prices">Prices</Link>
            </div>
            <div className="nav-item">
                <Link to="/peer2peer">Peer2Peer</Link>
            </div>
            <div className="nav-item">
                <Link to="/activity">Activity</Link>
            </div>
            <div className="nav-item">
                <Link to="/settings">Settings</Link>
            </div>
        </Nav>
        
{/* 
        <Nav className="d-none d-md-block sidebar"
            activeKey="/"
            >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Link to="#" aria-label="wallets">Wallets</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="#" aria-label="peer2peer">Peer2Peer</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="#" aria-label="activity">Activity</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="#" aria-label="settings">Settings</Link>
            </Nav.Item>
            
        </Nav> */}
        </>
    )    
}

export default BushaSideBar; 