import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBaar/SideBar';
import Home from './Pages/Home/Home';
import Lista from './Pages/Home/Lista/Lista';
import RegistrarAlumno from './Pages/Home/RegistarAlumno/RegistrarAlumno';
import Informes from './Pages/Home/Informes/Informes';
import Pendientes from './Pages/Home/Pendientes/Pendientes.jsx';
import DetallesFondos from './Pages/Home/DetallesFondos/DetallesFondos';

function App() {
  return (
    <Router>
      <div className='flex'>
        <SideBar />
        {/* Contenido */}
        <div className='content w-100'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lista' element={<Lista />} />
            <Route path='/RegistrarAlumno' element={<RegistrarAlumno />} />
            <Route path='/informes' element={<Informes />}/>
            <Route path='/alumnosPendientes' element={<Pendientes />}/>
            <Route path='/detallesdeFondos' element ={<DetallesFondos />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


//paginas: Alumnos, Pagos, Informes, Pendinetes, Registrar, Detalles d fondos, Salir 