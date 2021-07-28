import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import Connected from "./app";
import { HashRouter } from "react-router-dom";
import "./style.css";
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(reducer);
store.subscribe(() => {
    let items = store.getState().items;
    if(items.length !== 0) {
    items.forEach(el => {
       document.cookie = `${el.name}=${el.counter}`;
        });
    } 
});
function App() {
    return (
        <>
           <Connected />
        </>
    )
}
ReactDOM.render(<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>, document.getElementById("root"));