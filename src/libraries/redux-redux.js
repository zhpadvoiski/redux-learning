export default function createStore(reducer) {
	let state;
	let subscribers = [];

	function getState() {
		return state;
	}

	function dispatch(action) {
		state = reducer(state, action);
		subscribers.forEach((subscriber) => {
			subscriber();
		});
	}

	function subscribe(func) {
		subscribers.push(func);
	}

	return {
		getState,
		dispatch,
		subscribe,
	};
}
