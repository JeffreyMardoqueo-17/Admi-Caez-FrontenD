import React from 'react';
import { Link } from 'react-router-dom';
//icons
import * as FaIcons from 'react-icons/fa';
import { IoHome } from "react-icons/io5"; //home
import { FaUserPlus } from "react-icons/fa"; //registar usuario
import { IoIosListBox } from "react-icons/io"; //lista de usaurio
import { IoDocument } from "react-icons/io5";//inforem 
import { HiDocumentSearch } from "react-icons/hi";//detalles de fondos
import { IoExit } from "react-icons/io5";//exit o para afuera
import { FaUsersViewfinder } from "react-icons/fa6"; //pendientes
const SideBar = () => {
    return (
        <div className='Sidebar'>

            <ul>
                <li className='li'>
                    <Link to="/" className='text-dark'><IoHome className='me-2'/>Inicio</Link>
                </li>
                <li>
                    <Link  to="/RegistrarAlumno" className='text-dark'> <FaUserPlus className='me-2'/>Registar Alumno</Link>
                </li>
                <li>
                    <Link to="/lista" className='text-dark '> <IoIosListBox className='me-2' />Lista Alumno</Link>
                </li>
                <li>
                    <Link to="" className='text-dark'><IoDocument className='me-2'/>Informes</Link>
                </li>
                <li>
                    <Link to="" className='text-dark'><FaUsersViewfinder className='me-2' />Pendientes</Link>
                </li>
                <li>
                    <Link to="" className='text-dark'><HiDocumentSearch className='me-2'/>Detalles de fondos</Link>
                </li>
                <li>
                    <Link to="" className='text-dark'> <IoExit className='me-2'/>Salir</Link>
                </li>
            </ul>
        </div>
    );
}
export default SideBar;
