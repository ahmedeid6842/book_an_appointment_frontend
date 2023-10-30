import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Houses from './components/houses';
import Login from './components/auth/login';
import PrivateRoute from './components/auth/private-route';
import './App.css';

function App() {
  return (
    <>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Houses />} />
              <Route path="/houses" element={<Houses />} />
            </Route>
          </Routes>
        </main>
      </>
    </>
  );
}

export default App;
