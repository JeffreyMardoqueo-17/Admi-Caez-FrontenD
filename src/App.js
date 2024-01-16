import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBaar/SideBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='flex'>
        <SideBar />
        {/* //contenido */}
        <div className='content'>
          Este es el contenido
        </div>
      </div>
    </Router>
  );
}

export default App;
