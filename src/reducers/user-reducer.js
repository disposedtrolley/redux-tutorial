// { type, payload } is ES6 destructuring for the action parameter
export default function userReducer(state = '', { type, payload }) {
	switch(type) {
		case 'updateUser':
			return payload.user
	}
	return state
}