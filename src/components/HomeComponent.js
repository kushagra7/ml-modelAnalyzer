import React, { useRef, useEffect, useState } from 'react'
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
import CsvReader from './CsvReader';

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const HomeComponent = () => {

    //setup references and state hooks
    const passageRef = useRef(null);
    const questionRef = useRef(null);
    const [answer, setAnswer] = useState();
    const [model, setModel] = useState(null);

    //load model function
    const loadModel = async () => {
        const loadedModel = await qna.load()
        setModel(loadedModel);
        console.log("Model Loaded");
    }

    //useEffect hook
    useEffect(() => { loadModel() }, [])

    //handle questions
    const answerQuestion = async (e) => {
        if (e.which === 13 && model != null) {
            console.log("question submitted");
            const passage = passageRef.current.value;
            const question = questionRef.current.value;

            const answers = await model.findAnswers(question, passage)
            setAnswer(answers)
            console.log(answers);
        }
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={10}>{model == null ?
                        <div>
                            <div>Model Loading</div>
                            <Loader
                                type="Puff"
                                color="#00ffBB"
                                height={50}
                                width={70}
                            />
                        </div>
                        :
                        <Fragment>
                            <Jumbotron >
                                <p id="head">ML MODEL ANALYZER </p>
                                <p>
                                    Start by uploading a plain text model and press Analyze button.
                         </p>
                         Passage
                        <textarea ref={passageRef} rows="30" cols={100}> </textarea>
                        <br/>
                        Ask a Question 
                        <br/>
                        <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
                        <br/>Answers
                        <br/>
                        {answer ? answer.map((ans, idx) => <div><b>Answer{idx + 1} - </b>{ans.text}({ans.score})</div>) : ""}

                            </Jumbotron>
                        </Fragment>
                    }

                    </Col>
                    {/* <Col sm={8}>
                        <Jumbotron >
                            <p id="head">ML MODEL ANALYZER </p>
                            <p>
                                Start by uploading a plain text model and press Analyze button.
                         </p>

                            <ButtonGroup className="mb-2">
                                <Button variant="outline-primary">Unencrypted Data</Button>
                                <Button variant="outline-primary">Encrypted Data</Button>
                            </ButtonGroup>

                            <p>
                                <Button variant="primary" size="lg">Analyze</Button>
                            </p>
                        </Jumbotron>

                    </Col> */}
                </Row>
                {/* <CsvReader /> */}
            </Container>
        </Fragment>
    )
}


export default HomeComponent;