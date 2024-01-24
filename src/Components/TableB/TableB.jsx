import React from 'react';
import './TableB.scss'
const TableB = ({ headers, data }) => {
    console.log('Headers:', headers);
    console.log('Data:', data);
    return (
        <div className="m-5">
            <table className="table table-striped table-hover mx-auto my-1">
                <thead>
                    <tr >
                        {headers && headers.map((header, index) => (
                            <th className='text-text-uppercase' key={index} style={{ color: '#4d51b3' }} scope="col">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((fila, index) => (
                        <tr key={index}>
                            {headers && headers.map((header, index) => (
                                <td key={index}>{fila[header.toLowerCase()]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableB;
