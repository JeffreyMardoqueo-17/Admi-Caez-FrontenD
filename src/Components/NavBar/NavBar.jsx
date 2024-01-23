import React, { useState } from 'react';
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

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: '#ffff', }} dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <UncontrolledDropdown nav inNavbar className='text-black'>
                            <DropdownToggle nav caret style={{ color: '#4d51b3', fontWeight: '600' }}>
                                Jeffrey Mardoqueo
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem style={{color: '#05051A', fontWeight:'400'}}>Mi cuenta</DropdownItem>
                                <DropdownItem style={{color: '#05051A', fontWeight:'400'}}>Cerrar Sesión</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem style={{color: '#05051A', fontWeight:'400'}}>Contactar con el Desarrollador</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
