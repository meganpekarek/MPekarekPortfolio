import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Home from './views/Home'
import AboutMe from './views/AboutMe'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Switch, Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import history from './history';

const routing = (
  <Router history={history}>
    <div className="app__wrapper">
      <Nav />
      <Switch>
        <Route exact path="/MPekarekPortfolio" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();