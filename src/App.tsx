import { Suspense, lazy, FC } from "react";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return(
    <>
    <div className="wrapper">
      <Navbar />
    </div>
    </>
  );
}

export default App;
