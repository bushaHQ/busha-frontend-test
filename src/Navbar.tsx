import Busha from './images/Busha.png';

const Navbar = () => {
    return (
     <div className="navbar">
         <div className="container">
           <div className="box">
                <div>
                  <img src={Busha} height={27} width={120} alt='Busha website'/>
                </div>
                <div className="userName">Oluwatobi Akindunjoye</div>
           </div>  
         </div>
     </div>
    )
}

export default Navbar; 