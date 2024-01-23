import React, { useState } from 'react';
import Formulario from '../../../Components/Formulario/Formulario';
import TableB from '../../../Components/TableB/TableB';

const RegistrarAlumno = () => {
    // Estado para almacenar los datos ingresados desde el formulario
    const [datosAlumnos, setDatosAlumnos] = useState([]);

    // Función para manejar el envío del formulario y actualizar los datos
    const handleFormSubmit = (nuevoAlumno) => {
        // Agrega el nuevo alumno a la lista de datos
        setDatosAlumnos([...datosAlumnos, nuevoAlumno]);
    };

    return (
        <div>
            {/* Pasa la función handleFormSubmit como prop al componente Formulario */}
            <Formulario onSubmit={handleFormSubmit} />
            {/* Pasa los datos ingresados al componente TableB */}

            <TableB datos={datosAlumnos} />
        </div>
    );
}

export default RegistrarAlumno;
