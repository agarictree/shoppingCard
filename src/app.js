import React from "react";
import { connect } from "react-redux";
import { addItemAction } from "./redux/actionCreators";
import Header from "./header";
import Roter from "./roter";

function App(props) {
    return (
    <>
        <Header store={props.store.items}/>
        {/* <Body addItem = {props.addItem}/> */}
        <Roter addItem = {props.addItem}/>
    </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (item) => {
            dispatch(addItemAction(item))
        }
    }
}

function mapStateToProps(store) {
    return {
        store
    }
}

let Connected = connect(mapStateToProps, mapDispatchToProps)(App);
export default Connected;