import { Suspense, lazy, FC } from "react";
import Sidebar from "./components/sidebar";

import "./App.scss"

import Loader from "./components/shared/Loader";
// const

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Suspense fallback={<Loader />} >
        <div className="dashboard__main__content">
          <div className="wallets__main">
            <h1>Wallets</h1>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
