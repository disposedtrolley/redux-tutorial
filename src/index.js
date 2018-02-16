import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
})

const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
	allReducers,
	{
		products: [{ name: 'iPhone' }],
		user: 'Michael'
	},
	allStoreEnhancers
)

// wrap <App /> with <Provider /> so the app gains access to the store
ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));
registerServiceWorker();
