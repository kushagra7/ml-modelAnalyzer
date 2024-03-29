import React, { useRef, useEffect, useState } from 'react'
import { Fragment } from 'react';
import '../styles/home.css';
import textData from '../data/textData.js';

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
    const style = { position: "fixed", top: "70%", left: "50%", transform: "translate(-50%, -50%)" };

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
        if (model != null) {
            console.log("question submitted");
            //const passage = passageRef.current.value;

            const passage = textData;
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
                    <Col>
                {model == null ?
                        <div style={style}>
                            <Loader
                                type="ThreeDots"
                                color="#0275d8"
                                height={100}
                                width={100}
                            />
                        </div>
                        :
                        <Fragment>
                            <Jumbotron >
                                <p>Ask Questions about iPhone</p>
                                {/* <textarea ref={passageRef} rows="20" cols={80}> </textarea> */}
                                <input ref={questionRef} size="70"></input>
                                <br />
                                <br />
                                <Button variant="primary" onClick={answerQuestion}>Predict</Button>{' '}
                                <br /><br />
                                <p>{answer ? answer.map((ans, idx) => <div><b>Prediction {idx + 1} - </b>{ans.text}</div>) : ""}</p>
                            </Jumbotron>
                        </Fragment>
                    }
                    </Col>
                </Row>
               
            </Container>
        </Fragment>
    )
}


export default HomeComponent;