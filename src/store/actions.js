import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
	type: actions.BUG_ADDED,
	payload: {
		description,
	},
});
export const bugDeleted = (id) => ({
	type: actions.BUG_DELETED,
	payload: {
		id,
	},
});
export const bugResolved = (id) => ({
	type: actions.BUG_RESOLVED,
	payload: {
		id,
	},
});
