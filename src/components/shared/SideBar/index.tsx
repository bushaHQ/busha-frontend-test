import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Container, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo.svg';
import Avatar from 'react-avatar';
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