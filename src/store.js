import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "./reducers";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

const store = createStore(
	reducers,
	{},
	compose(
		applyMiddleware(thunk), // middleware
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
	)
);

export default store;