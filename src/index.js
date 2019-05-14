import React from 'react';
import ReactDOM from 'react-dom';
import InlineStylesSample from './InlineStylesSample';
import CssModuleSample from './CssModuleSample';
import EmotionButtonSample from './EmotionButtonSample';
import EmotionCssPropsSample from './EmotionCssPropsSample';
import ReactBootstrapGridSample from './ReactBootstrapGridSample';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')

// ReactDOM.render(<InlineStylesSample />, rootEl);

// ReactDOM.render(<CssModuleSample />, rootEl);

// ReactDOM.render(<EmotionButtonSample />, rootEl);

// ReactDOM.render(<EmotionCssPropsSample />, rootEl);

ReactDOM.render(<ReactBootstrapGridSample />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
