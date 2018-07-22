import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//add redux here
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//add reducers
import reducers from './reducers'


const createStoreWithApplyMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
    <Provider store={createStoreWithApplyMiddleware(reducers)}>
        <App />
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();
