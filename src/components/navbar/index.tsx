import BushaLogo from "../../assets/bushaLogo.svg";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <>
            <header className='nav__wrapper'>
                <div className='brand'>
                    <img src={BushaLogo} alt="" className='brand-img' />
                </div>
                <div className='brand__text'>
                    <span className="rounded-border">
                        O
                    </span>{" "}
                    Oluwatobi Akindunjoye
                </div>
            </header>
        </>
    )
}

export default Navbar;