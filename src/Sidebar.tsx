
const SideBar = () => {

    return (
        <div className="first">
            <div className="">
                <a href="/" className="active sidebar">Wallet</a>
                <a href="/prices" className=" sidebar">Prices</a>
                <a href="/peer2Peer" className=" sidebar">peer2Peer</a>
                <a href="/activity" className=" sidebar">Activity</a>
                <a href="/settings" className=" sidebar">Settings</a>
            </div>
        </div>
    );
}

export default SideBar;