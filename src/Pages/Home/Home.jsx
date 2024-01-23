import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import BarsChart from '../../Components/Graficos/BarsChart';
import Circular from '../../Components/Graficos/Circular';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <BarsChart />
                    </Col>    
                    <Col xs="4" className="bg-danger">COLUMNA 3</Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
