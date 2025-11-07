import React from 'react'
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import ModalForm from './AdminPannel/ModalForm';

const App = () => {
  return (
    <div className="container">
      <ModalForm/>
      <Navbar/>
      <Outlet/>
      
    </div>
  );
}

export default App