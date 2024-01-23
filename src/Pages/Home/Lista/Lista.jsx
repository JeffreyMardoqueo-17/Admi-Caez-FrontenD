import React from 'react';
import TableB from '../../../Components/TableB/TableB';

const Lista = () => {
    const headers = ["NIE", "NOMBRE", "GRADO", "TURNO", "ESTADO", "PAGAR"];
    const data = [
        {
            nie: "1234",
            nombre: "JEFFREY MARDOQUEO",
            grado: "NOVENO",
            turno: "MAÑANA",
            estado: "PAGADO",
            pagar: "pagar"
        },
        {
            nie: "1234",
            nombre: "JEFFREY MARDOQUEO",
            grado: "NOVENO",
            turno: "MAÑANA",
            estado: "PAGADO",
            pagar: "pagar"
        },
    ];

    return (
        <div>
            <h1 className='m-5'>Lista de alumnos</h1>
            <TableB headers={headers} data={data} />
        </div>
    );
}

export default Lista;
