import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reducer from "./reducers/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const counterStore = createStore(reducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={counterStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
