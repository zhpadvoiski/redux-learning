import createStore from "../libraries/redux-redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
