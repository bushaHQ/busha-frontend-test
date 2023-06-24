import { AppContextProvider } from "./context/appContext";
import { Layout } from "./components/Layout";

import "./asset/css/style.css";

function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </div>
  );
}

export default App;
