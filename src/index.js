import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'

function productsReducer(state = [], action) {
	return state
}

function userReducer(state = '', action) {
	return state
}

const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
})

const store = createStore(
	allReducers,
	{
		products: [{ name: 'iPhone' }],
		user: 'Michael'
	},
	window.devToolsExtension && window.devToolsExtension()
)

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
