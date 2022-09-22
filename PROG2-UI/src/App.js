import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import TableProducts from './components/TableProducts';
import TableTypes from './components/TableTypes';
import TableGroups from './components/TableGroups';

const App = () => (
    <div className="App">
        <Routes>
          <Route index element={<NavBar/>} />
          <Route path="/types" element={<TableTypes/>} />
          <Route path="/products" element={<TableProducts/>} />
          <Route path="/groups" element={<TableGroups/>} />
        </Routes>
    </div>
);

export default App;