import React from 'react';

const TableB = ({ datos }) => {
    return (
        <table className="table table-hover mx-auto my-1">
            <thead>
                <tr className='font-monospace'>
                    <th scope="col">Tipo de Documento</th>
                    <th scope="col">Número de Documento</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Encargado</th>
                    <th scope='col'>Grado</th>
                    <th scope='col'>Turno</th>
                </tr>
            </thead>
            <tbody>
                {datos && datos.map((fila, index) => (
                    <tr key={index}>
                        <td>{fila.tipoDocumento}</td>
                        <td>{fila.numeroDocumento}</td>
                        <td>{fila.nombre}</td>
                        <td>{fila.apellido}</td>
                        <td>{fila.encargado}</td>
                        <td>{fila.grado}</td>
                        <td>{fila.turno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableB;
