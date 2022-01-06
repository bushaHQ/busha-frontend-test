import Navbar from "./components/Navbar";
import Wallets from "./pages/Account";
import Sidebar from "./components/Siderbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4 pt-4">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            {window.location.pathname === "/" ? (
              <Wallets />
            ) : (
              <h4>Page Not Available ⛔️</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
