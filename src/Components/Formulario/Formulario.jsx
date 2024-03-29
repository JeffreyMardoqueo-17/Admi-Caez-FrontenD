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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosFormulario({ ...datosFormulario, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(datosFormulario);
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

    const tiposDocumento = ['NIE'];
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
                        className='inputText'
                        id="numeroDocumento"
                        value={datosFormulario.numeroDocumento}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: 12345678"
                    />
                </FormGroup>
            </div>

            {/* Sección para Nombre y Apellido */}
            <div className="row">
                <FormGroup className='col-md-6'>
                    <Label for="nombre">Nombre:</Label>
                    <Input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={datosFormulario.nombre}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Jeffrey"
                    />
                </FormGroup>

                <FormGroup className='col-md-6'>
                    <Label for="apellido">Apellido:</Label>
                    <Input
                        type="text"
                        name="apellido"
                        id="apellido"
                        value={datosFormulario.apellido}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Mardoqueo"
                    />
                </FormGroup>
            </div>

            {/* Sección para Grado, Encargado y Turno */}
            <div className="row">
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
            </div>
            <button type="subit" className="boton w-100">Registrar</button>
        </Form>
    );
}

export default Formulario;
