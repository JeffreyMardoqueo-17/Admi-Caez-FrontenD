import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import BarsChart from '../../Components/Graficos/BarsChart';
import Circular from '../../Components/Graficos/Circular';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs="10">
                        <BarsChart />
                    </Col>
                    <Col xs="2" className="bg-ligth">
                        <Button color="primary" className='m-2 w-100'>
                            primary
                        </Button>
                        {' '}
                        <Button className='m-2 w-100'>
                            secondary
                        </Button>
                        {' '}
                        <Button color="success" className='m-2 w-100'>
                            success
                        </Button>
                        {' '}
                        <Button color="info" className='m-2 w-100'>
                            info
                        </Button></Col>
                        
                    <Col xs="6"  className="bg-ligth h-auto mt-4"></Col>
                    <Col xs="4" className="bg-danger">COLUMNA 3</Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
