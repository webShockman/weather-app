import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));