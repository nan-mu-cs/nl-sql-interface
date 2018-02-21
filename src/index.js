import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {FormExample} from './App';
import registerServiceWorker from './registerServiceWorker';
import { FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<FormExample />, document.getElementById('root'));
registerServiceWorker();

