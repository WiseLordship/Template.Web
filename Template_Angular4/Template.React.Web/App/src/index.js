import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from "./components/routes";
import './components/styles/styles.css';
//import '../node_modules/boostrap/dist/css/bootstrap.min.css'; fix???

render(
    <Router history={browserHistory} routes = {routes} /> ,
    document.getElementById('app')
);