import { TopBar } from './layout/TopBar';
import { SideBar } from './layout/SideBar';
import { Wallets } from './wallets/Wallets';
import { useLayoutEffect, useState } from 'react';

export function WalletsPage() {

    const [sideBar, setSideBar] = useState(true)

    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth <= 750)
                setSideBar(false)
            else
                setSideBar(true)
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
