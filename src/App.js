import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import Home from './components/home';
import Houses from './components/houses';
import HouseDetails from './components/houses/houseDetails';
import Reservations from './components/reservations';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/auth/private-route';
import AddHouse from './components/houses/add-house';
import DeleteHouses from './components/deleteHouses';
import ReserveHouse from './components/reservations/reserve-house';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => (
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
            <Route path="/reserve" element={<Houses />} />
            <Route path="/delete_houses" element={<DeleteHouses />} />
            <Route path="/houses/:id" element={<HouseDetails />} />
            <Route path="/reserve-house" element={<ReserveHouse />} />
          </Route>
        </Routes>
        <ToastContainer />
      </main>
    </>
  </>
);

export default App;
