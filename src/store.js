import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// I store like in Object, so access easyly
