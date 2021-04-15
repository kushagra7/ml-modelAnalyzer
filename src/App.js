import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PdfComponent from './components/PdfComponent';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" ><HomeComponent/></Route>
          <Route path="/pdf" ><PdfComponent/></Route>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;