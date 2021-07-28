import ShoppingCard from "./shoppingCard.js";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Body from "./body.js";
import Home from "./home.js";

export default function Roter(props) {
    return (
        <Switch>
            <Route path="/shop" render={() => <Body addItem = {props.addItem}/>}/>
            <Route path="/card" component={ShoppingCard}/>
            <Route path="/" exact component={Home}/>
        </Switch>
    )
}