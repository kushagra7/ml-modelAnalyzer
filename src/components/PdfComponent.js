import React from 'react'
import CsvReader from './CsvReader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const PdfComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={1} md={2}></Col>
                <Col xs={1} md={8}>
                    <br/>
                    <CsvReader />
                </Col>
                <Col xs={1} md={2}></Col>
            </Row>
        </Container>
    )
}

export default PdfComponent
