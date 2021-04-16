import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PdfComponent from './components/PdfComponent';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <Router>
      <Fragment>
        <Container>
          <Row>
            <Col>
            <Jumbotron >
              <p id="head">ML MODEL ANALYZER </p>
            </Jumbotron>
            </Col>
          </Row>
          <Row>
          <Col xs={1} md={3}></Col>
              <Switch>
                <Link to="/home">
                <Col>
                  <Card className="text-center" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    <Card.Body>
                      <Card.Title>Predictor</Card.Title>
                    </Card.Body>
                  </Card>
                  </Col>
                </Link>
              </Switch>
           
              <Switch>
                <Link to="/pdf">
                  <Col>
                  <Card className="text-center" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    <Card.Body>
                      <Card.Title>Pdf Extractor</Card.Title>
                    </Card.Body>
                  </Card>
                  </Col>
                </Link>
              </Switch>
            
            <Route exact path="/home" ><HomeComponent /></Route>
            <Route exact path="/pdf" ><PdfComponent /></Route>
          </Row>
        </Container>
      </Fragment>
    </Router>
  )
}

export default App;