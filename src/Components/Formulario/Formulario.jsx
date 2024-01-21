import React, { useState } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';

const Formulario = () => {
    const opcionesGrados = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'];
    const opcionesEncargados = ['YO', 'Mi mujer', 'yooo'];
    const tiposDocumento = ['NIE', 'DUI'];

    const [numeroDocumento, setNumeroDocumento] = useState('');

    const handleNumeroDocumentoChange = (e) => {
        const inputValue = e.target.value;

        // Validación: Solo números y máximo 8 dígitos
        if (/^\d*$/.test(inputValue) && inputValue.length <= 8) {
            setNumeroDocumento(inputValue);
        }
    };

    return (
        <Form className='m-4'>
            <div className="row">
                <FormGroup className='col-md-6'>
                    <Label for="tipoDocumento">Seleccionar Tipo Documento:</Label>
                    <Input type="select" name="tipoDocumento" id="tipoDocumento">
                        <option value="" disabled>Tipo de Documento</option>
                        {tiposDocumento.map((tipo, index) => (
                            <option key={index} value={tipo}>
                                {tipo}
                            </option>
                        ))}
                    </Input>
                </FormGroup>

                <FormGroup className='col-md-6'>
                    <Label for="numeroDocumento">Número de Documento:</Label>
                    <Input
                        type="text"
                        name="numeroDocumento"
                        id="numeroDocumento"
                        value={numeroDocumento}
                        onChange={handleNumeroDocumentoChange}
                        placeholder="Ejemplo: 12345678"
                    />
                </FormGroup>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input type="text" className="form-control" placeholder="Ejemplo: Jeffrey Mardoqueo " aria-label="Nombre" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Apellido</span>
                        <input type="text" className="form-control" placeholder="Ejemplo: Jeffrey Mardoqueo " aria-label="Apellido" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>

            <FormGroup className='col-4'>
                <Label for="grado">Seleccionar Grado:</Label>
                <Input type="select" name="grado" id="grado">
                    <option value="" disabled>Elige un grado...</option>
                    {opcionesGrados.map((grado, index) => (
                        <option key={index} value={grado}>
                            {grado}
                        </option>
                    ))}
                </Input>
            </FormGroup>

            <FormGroup className='col-4'>
                <Label for="encargado">Seleccionar Encargado:</Label>
                <Input type="select" name="encargado" id="encargado">
                    <option value="" disabled>Elige tu encargado...</option>
                    {opcionesEncargados.map((encargado, index) => (
                        <option key={index} value={encargado}>
                            {encargado}
                        </option>
                    ))}
                </Input>
            </FormGroup>
        </Form>
    );
}

export default Formulario;
