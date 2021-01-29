import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div className="app__wrapper">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
      {/* <Route exact path="/" component={App} />
      <Route path="/chooseteams" component={ChooseTeams} /> */}
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();