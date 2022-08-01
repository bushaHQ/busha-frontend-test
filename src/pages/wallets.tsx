import { TopBar } from './layout/TopBar';
import { SideBar } from './layout/SideBar';
import { Wallets } from './wallets/Wallets';
import { useEffect, useLayoutEffect, useState } from 'react';

function sideBarW(): boolean {
    if (window.innerWidth <= 750)
        return false
    return true
}
export function WalletsPage() {

    const [sideBar, setSideBar] = useState(sideBarW())

    useLayoutEffect(() => {
        function updateSize() {
            setSideBar(sideBarW())
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    })

    return (
        <div>
            <TopBar sideBar={sideBar} setSideBar={setSideBar} />
            <SideBar sideBar={sideBar} />
            <Wallets />
        </div>
    )
}
