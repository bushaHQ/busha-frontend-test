import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/shared/Loader';

import AccountList from './components/AccountList';
import Nav from './components/Nav';

function App() {
  return (<React.Suspense fallback={<Loader />}>
        <BrowserRouter>
            <div id="rootmainbody">
                <div id="rootmainpage">
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<h1>Welcome to Busha</h1>} />
                        <Route path="/accounts" element={<AccountList/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </React.Suspense>)
}

export default App;
