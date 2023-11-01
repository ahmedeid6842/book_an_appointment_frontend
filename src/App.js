import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import Home from './components/home';
import Houses from './components/houses';
import Reservations from './components/reservations';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/auth/private-route';
import AddHouse from './components/houses/add-house';
import ReserveHouse from './components/reservations/reserve-house';
import 'react-toastify/dist/ReactToastify.css';
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/houses" element={<Houses />} />
              <Route path="/add-house" element={<AddHouse />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/reserve-house" element={<ReserveHouse />} />
            </Route>
          </Routes>
          <ToastContainer />
        </main>
      </>
    </>
  );
}

export default App;
