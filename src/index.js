import store from "./store/store";
import { bugAdded, bugResolved, bugDeleted } from "./store/actions";
import store2 from "./store/customStore";

console.log(store);

store.subscribe(() => {
	console.log("store changed: ", store.getState());
});

store.dispatch(bugAdded("first bug"));
store.dispatch(bugAdded("2 bug"));
store.dispatch(bugAdded("3 bug"));
store.dispatch(bugDeleted(1));
store.dispatch(bugResolved(2));

console.log(store.getState());

//CUSTOM STORE
// let customStore = createStoreRedux(reducer);
// // debugger;
// customStore.subscribe(() => {
// 	console.log(customStore.getState());
// });
// customStore.dispatch(bugAdded("first bug"));
// customStore.dispatch(bugAdded("2 bug"));
// customStore.dispatch(bugAdded("3 bug"));
// customStore.dispatch(bugDeleted(1));
// customStore.dispatch(bugResolved(2));
// debugger;
