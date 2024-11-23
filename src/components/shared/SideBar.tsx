import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useDashboardContext } from "./DashboardProvider";
import { title } from "process";

export default function SideBar() {
    const { activeMenu, setActiveMenu }  = useDashboardContext();
    const sideItems = [
        { id: 1, title: "Wallet", status: '' },
        { id: 2, title: "Activity", status: '' },
        { id: 3, title: "Settings", status: '' },
        { id: 4, title: "Prices", status: '' },
        { id: 5, title: "Peer2Peer", status: '' },
    ]
    return (
        <div className="sidebar">
            <ul >
                {sideItems.map((item) => (
                    <li key={`${item.id}side-bar-menu`} className={activeMenu.toLowerCase() === item.title.toLowerCase() ? 'active' :
                    item.status === 'active' ? 'active' : ''}>
                        <Link to={`/${item.title}`} onClick={() => setActiveMenu(item.title)}  >
                        {item.title} 
                        </Link>
                    {activeMenu.toLowerCase() == item.title.toLowerCase()} </li>
                ))}
            </ul>
        </div>
    );
    
}