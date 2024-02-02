import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import BarsChart from '../../Components/Graficos/BarsChart';
import Circular from '../../Components/Graficos/Circular';
import Card from '../../Components/Card/Card'
import TableB from '../../Components/TableB/TableB';
import Lista from './Lista/Lista';
const Home = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <Card></Card>

                    </Col>
                    <Col xs="12" className='m-auto w-100'>
                        <BarsChart />
                    </Col>
                    <Col xs="12">
                        <Lista />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
