import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { updateUser } from './actions/user-actions'

class App extends Component {

	constructor(props) {
		super(props)

		this.onUpdateUser = this.onUpdateUser.bind(this)
	}

	onUpdateUser(evt) {
		this.props.onUpdateUser(evt.target.value)
	}
	
  render() {
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
const mapStateToProps = state => ({
	products: state.products,
	user: state.user
})

const mapActionsToProps = {
	onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App)
