import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import BarsChart from '../../Components/Graficos/BarsChart';
import Circular from '../../Components/Graficos/Circular';
import Card from '../../Components/Card/Card'
const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs="12">
                        <Card></Card>
                        
                    </Col>
                    <Col xs="10" className='m-5'>
                        <BarsChart />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
