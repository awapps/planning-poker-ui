import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../stylesheets/index.css';

const domNode = document.querySelector('.js-react-app');

const palette = [
    '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
    '#e67e22', '#e74c3c', '#d35400'
];

const App = (props) =>
    <div className="h100">
        {props.children}
    </div>
;

const Vote = () => {
    const options = [
        [{
            value: '0',
            label: '0'
        }, {
            value: '0.5',
            label: '1/2'
        }, {
            value: '1',
            label: '1'
        }, {
            value: '2',
            label: '2'
        }, {
            value: '3',
            label: '3'
        }, {
            value: '5',
            label: '5'
        }, {
            value: '8',
            label: '8'
        }, {
            value: '13',
            label: '13'
        }, {
            value: '21',
            label: '21'
        }, {
            value: '34',
            label: '34'
        }, {
            value: '55',
            label: '55'
        }, {
            value: '89',
            label: '89'
        }],
        [{
            value: '?',
            label: '?'
        }]
    ];

    const groupClasses = ['flex-grow-3 flex-wrap', 'flex-grow-1'];

    const renderOption = (option, i) =>
        <div
            className="vote__option flex flex-auto flex-column justify-center"
            style={{
                backgroundColor: palette[i % palette.length]
            }}>
            {option.label}
        </div>
    ;

    const renderOptionGroup = (optionGroup, i) => {
        const className = [
            'vote__option-group',
            'flex',
            'flex-auto',
            groupClasses[i % groupClasses.length]
        ].join(' ');

        return (
            <div className={className}>
                {optionGroup.map(renderOption)}
            </div>
        );
    };

    return (
        <div className="flex flex-column center h100">
            {options.map(renderOptionGroup)}
        </div>
    );
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Vote} />
        </Route>
    </Router>,
    domNode
);
