import { UPDATE_USER, SHOW_ERROR } from '../actions/user-actions'

// { type, payload } is ES6 destructuring for the action parameter
export default function userReducer(state = '', { type, payload }) {
	switch(type) {
		case UPDATE_USER:
			return payload.user
		case SHOW_ERROR:
			return payload.user
		default:
			return state
	}
}