import React from "react";
import './App.css';
import Header from './Header/Header';
import Storage from "./Storage/Storage";
import Reciepts from "./Reciepts/Reciepts";
import Orders from "./Orders/Orders";
import Family from "./Family/Family";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/family" element={<Family/>}></Route>
        <Route path="/storage" element={<Storage/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/reciepts" element={<Reciepts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
