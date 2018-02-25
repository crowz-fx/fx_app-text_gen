import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextGen from './TextGen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TextGen />, document.getElementById('textgen'));
registerServiceWorker();