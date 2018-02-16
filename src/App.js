import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/user-actions'

import { createSelector } from 'reselect'

class App extends Component {

	constructor(props) {
		super(props)

		this.onUpdateUser = this.onUpdateUser.bind(this)
	}

	onUpdateUser(evt) {
		this.props.onUpdateUser(evt.target.value)
	}
	
  render() {
		console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<input onChange={this.onUpdateUser} />
				{this.props.user}
      </div>
    );
  }
}

// receives the state of the store, so we can decide which props to provide to the component
// parentheses around function body cause the contents to be automatically returned
// const mapStateToProps = (state, props) => {
// 	return {
// 		products: state.products,
// 		user: state.user,
// 		userPlusProp: `${state.user} ${props.aRandomProps}`
// 	}
// }

const productsSelector = createSelector(
	state => state.products,
	products => products
)

const userSelector = createSelector(
	state => state.user,
	user => user
)

const mapStateToProps = createSelector(
	productsSelector,
	userSelector,
	(products, user) => ({
		products,
		user
	})
)

const mapActionsToProps = {
	onUpdateUser: updateUser,
	onApiRequest: apiRequest
}

export default connect(mapStateToProps, mapActionsToProps)(App)
