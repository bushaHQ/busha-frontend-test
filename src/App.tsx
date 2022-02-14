import { Suspense, lazy, FC } from "react";
import Sidebar from "./components/sidebar";

import Loader from "./components/shared/Loader";
// const

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Suspense fallback={<Loader />} >
        <div className="wrapper">

        </div>
      </Suspense>
    </>
  );
}

export default App;
