import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Cambia la clase del Navbar basado en la posición del scroll
            setIsScrolled(scrollTop > 50);
        };

        // Agrega un evento de escucha para el scroll
        window.addEventListener('scroll', handleScroll);

        // Limpia el evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: '#ffff',
                    position: isScrolled ? 'fixed' : 'relative',
                    top: 0,
                    width: '100%',
                    zIndex: 1000, // Ajusta según sea necesario
                }}
                dark
                expand="md"
            >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <UncontrolledDropdown nav inNavbar className='text-black'>
                            <DropdownToggle nav caret style={{ color: '#4d51b3', fontWeight: '600' }}>
                                Jeffrey Mardoqueo
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem >Mi cuenta</DropdownItem>
                                <DropdownItem >Cerrar Sesión</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem >Contactar con el Desarrollador</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
