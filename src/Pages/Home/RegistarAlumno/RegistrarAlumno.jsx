import React, { useState } from 'react';
import Formulario from '../../../Components/Formulario/Formulario';
import TableB from '../../../Components/TableB/TableB';

const RegistrarAlumno = () => {
    const [datosAlumnos, setDatosAlumnos] = useState([]);

    const handleFormSubmit = (nuevoAlumno) => {
        setDatosAlumnos([...datosAlumnos, nuevoAlumno]);
    };

    const headers = ["Tipo de Documento", "Número de Documento", "Nombre", "Apellido", "Encargado", "Grado", "Turno"];

    return (
        <div>
            <h2 className='m-5 title'>Registrar Alumno</h2>
            <Formulario onSubmit={handleFormSubmit} />
            <TableB headers={headers} data={datosAlumnos} />
        </div>
    );
}

export default RegistrarAlumno;
