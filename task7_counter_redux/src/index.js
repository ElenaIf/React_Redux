import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reducer from "./reducers/reducer";

import { Provider } from "react-redux";
import { createStore } from "redux";

const counterStore = createStore(reducer);

ReactDOM.render(
	<Provider store={counterStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
