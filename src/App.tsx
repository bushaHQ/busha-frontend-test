import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Wallet from "./components/Wallet";
// import Error from "./components/Error";
// import Route from './components/Route'
// import Modal from './components/shared/Modal'
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-container">
        <Sidebar />
        <div className="other-pages">
          <Wallet />
        </div>
      </div>
    </div>
  )
}

export default App;
