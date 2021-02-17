import React from 'react'
import { Fragment } from 'react';
import '../styles/home.css';

//components from 'react bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

export default function homeComponent() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Jumbotron >
                            <p id ="head">ML MODEL ANALYZER </p>
                            <p>
                                Start by uploading a plain text model and press Analyze button.
                         </p>

                            <Form>
                                <Form.File
                                    id="custom-file-translate-scss"
                                    label="Custom file input"
                                    lang="en"
                                    custom
                                />
                            </Form>
                            <p>
                            </p>
                            <ButtonGroup className="mb-2">
                                <Button variant="outline-primary">Unencrypted Data</Button>
                                <Button variant="outline-primary">Encrypted Data</Button>
                            </ButtonGroup>

                            <p>
                                <Button variant="primary" size="lg">Analyze</Button>
                            </p>
                        </Jumbotron>

                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </Fragment>
    )
}
