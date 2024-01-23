import React from 'react';

const TableB = ({ headers, data }) => {
    return (
        <div className="m-5">
            <table className="table table-striped table-hover mx-auto my-1">
                <thead>
                    <tr className='font-monospace'>
                        {headers && headers.map((header, index) => (
                            <th key={index} scope="col">{header}</th>
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
