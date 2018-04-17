// React library
import React from 'react';
// Renders react code into DOM
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
