import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(req => {
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(resp => {
    return resp;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
