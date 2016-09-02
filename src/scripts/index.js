import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import routes from './routes';

import '../stylesheets/index.css';

const domNode = document.querySelector('.js-react-app');

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={routes} />,
    domNode
);
