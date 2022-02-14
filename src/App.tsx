import { Suspense, lazy, FC } from "react";
import Sidebar from "./components/sidebar";

import Loader from "./components/shared/Loader";

const App: React.FC = () => {
  return(
    <>
    <div>
      <Sidebar />
      <Suspense fallback={<Loader />} >

      </Suspense>
    </div>
    </>
  );
}

export default App;
