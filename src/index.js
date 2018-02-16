import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

function productsReducer(state = [], action) {
	return state
}

// { type, payload } is ES6 destructuring for the action parameter
function userReducer(state = '', { type, payload }) {
	switch(type) {
		case 'updateUser':
			return payload.user
	}
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

store.dispatch(updateUserAction)

// wrap <App /> with <Provider /> so the app gains access to the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
