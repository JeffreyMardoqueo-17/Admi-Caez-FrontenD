import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/" className='text-white rounded py-2 w-100 d-inline-block px-3'activeClassName="active"><IoHome className='me-2'/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink  to="/RegistrarAlumno" className='text-white rounded py-2 w-100 d-inline-block px-3'> <FaUserPlus className='me-2'/>Registar Alumno</NavLink>
                </li>
                <li>
                    <NavLink to="/lista" className='text-white rounded py-2 w-100 d-inline-block px-3'> <IoIosListBox className='me-2' />Lista Alumno</NavLink>
                </li>
                <li>
                    <NavLink to="/informes" className='text-white rounded py-2 w-100 d-inline-block px-3'><IoDocument className='me-2'/>Informes</NavLink>
                </li>
                <li>
                    <NavLink to="/alumnosPendientes" className='text-white rounded py-2 w-100 d-inline-block px-3'><FaUsersViewfinder className='me-2' />Pendientes</NavLink>
                </li>
                <li>
                    <NavLink to="/detallesFondos" className='text-white rounded py-2 w-100 d-inline-block px-3'><HiDocumentSearch className='me-2'/>Detalles de fondos</NavLink>
                </li>
                <li>
                    <NavLink to="" className='text-white rounded py-2 w-100 d-inline-block px-3'> <IoExit className='me-2'/>Salir</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default SideBar;
