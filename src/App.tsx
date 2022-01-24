import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WalletsPage from './pages/wallets/wallets';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <WalletsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
