import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBaar/SideBar';
import Home from './Pages/Home/Home';
import Lista from './Pages/Home/Lista/Lista';
import RegistrarAlumno from './Pages/Home/RegistarAlumno/RegistrarAlumno';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='flex'>
        <SideBar />
        {/* Contenido */}
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lista' element={<Lista />} />
            <Route path='/RegistrarAlumno' element={<RegistrarAlumno />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

