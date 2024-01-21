import React, { useState } from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';

const Formulario = ({ onSubmit }) => {
    const [datosFormulario, setDatosFormulario] = useState({
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        apellido: '',
        grado: '',
        encargado: '',
        turno: '',
    });

    // Función para manejar el cambio en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosFormulario({ ...datosFormulario, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Llama a la función onSubmit pasando los datos del formulario
        onSubmit(datosFormulario);
        // Limpia los datos del formulario después de enviarlo
        setDatosFormulario({
            tipoDocumento: '',
            numeroDocumento: '',
            nombre: '',
            apellido: '',
            grado: '',
            encargado: '',
            turno: '',
        });
    };

    // Datos de ejemplo para ComboBox
    const tiposDocumento = ['NIE', 'DUI'];
    const opcionesGrados = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'];
    const opcionesEncargados = ['YO', 'Mi mujer', 'yooo'];
    const opcionesTurno = ['Mañana', 'Tarde'];


    return (
        <Form className='m-4' onSubmit={handleSubmit}>
            {/* Sección para Tipo de Documento y Número de Documento */}
            <div className="row">
                <FormGroup className='col-md-6'>
                    <Label for="tipoDocumento">Seleccionar Tipo Documento:</Label>
                    <Input
                        type="select"
                        name="tipoDocumento"
                        id="tipoDocumento"
                        value={datosFormulario.tipoDocumento}
                        onChange={handleInputChange}
                    >
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
                        value={datosFormulario.numeroDocumento}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: 12345678"
                    />
                </FormGroup>
            </div>

            {/* Sección para Nombre y Apellido */}
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ejemplo: Jeffrey Mardoqueo "
                            aria-label="Nombre"
                            aria-describedby="basic-addon1"
                            name="nombre"
                            value={datosFormulario.nombre}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Apellido</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ejemplo: Jeffrey Mardoqueo "
                            aria-label="Apellido"
                            aria-describedby="basic-addon1"
                            name="apellido"
                            value={datosFormulario.apellido}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            {/* Sección para Grado y Encargado */}
            <FormGroup className='col-4'>
                <Label for="grado">Seleccionar Grado:</Label>
                <Input
                    type="select"
                    name="grado"
                    id="grado"
                    value={datosFormulario.grado}
                    onChange={handleInputChange}
                >
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
                <Input
                    type="select"
                    name="encargado"
                    id="encargado"
                    value={datosFormulario.encargado}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Elige tu encargado...</option>
                    {opcionesEncargados.map((encargado, index) => (
                        <option key={index} value={encargado}>
                            {encargado}
                        </option>
                    ))}
                </Input>
            </FormGroup>

            {/* Sección para Turno */}
            <FormGroup className='col-4'>
                <Label for="turno">Seleccionar Turno:</Label>
                <Input
                    type="select"
                    name="turno"
                    id="turno"
                    value={datosFormulario.turno}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Elige un turno...</option>
                    {opcionesTurno.map((turno, index) => (
                        <option key={index} value={turno}>
                            {turno}
                        </option>
                    ))}
                </Input>
            </FormGroup>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
    );
}

export default Formulario;
