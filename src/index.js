import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import Style from "./index.css"
import {store} from "./Redux/store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getTotals } from "./Redux/cartSlice";

store.dispatch(getTotals());

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>

<App/>
</Provider>
</BrowserRouter>




)