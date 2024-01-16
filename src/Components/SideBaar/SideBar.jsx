import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className='Sidebar'>

            <ul>
                <li className='li'>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/RegistrarAlumno">Registar Alumno</Link>
                </li>
                <li>
                    <Link to="/lista">Lista Alumno</Link>
                </li>
            </ul>
        </div>
    );
}
export default SideBar;
