import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import WalletsList from "./Walletslist";


function App() {

  return (
    <div>
      <Navbar />
      <div className="container">
       <div className="content">
         <SideBar/>
         <div className="card-list-flow">
          <WalletsList/>
         </div>
       </div>
      </div>
    </div>
  
    );
}

export default App;
