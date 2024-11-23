import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/shared/DashboardLayout";
import Wallet from './pages/wallet'
import Activity from "./pages/activity";
import Prices from "./pages/prices";
import Settings from "./pages/settings";
function App() {
  return (
    <BrowserRouter  future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Wallet />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/Settings" element={<Settings />} />

        </Route>

        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
