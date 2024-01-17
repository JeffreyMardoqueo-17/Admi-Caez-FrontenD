import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Home = () => {
    return (
        <>
        <Container>
            <Row>
                <Col xs="4" className="bg-primary">COLUMNA 1</Col>
                <Col xs="4" className="bg-warning">COLUMNA 2</Col>
                <Col xs="4" className="bg-danger">COLUMNA 3</Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;
