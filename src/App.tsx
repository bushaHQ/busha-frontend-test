import React from 'react';

import Navbar from './components/shared/Navbar';
import Cards from './components/shared/Cards';
import Card from './components/shared/Card';
import Loader from './components/shared/Loader';
import Sidebar from './components/shared/Sidebar';
function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Card />
      <Loader />
      <Sidebar />
    </>
  );
}

export default App;
