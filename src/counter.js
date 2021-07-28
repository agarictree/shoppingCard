import React from "react";

export default function Counter(props) {
    return (
        <input type="number" min="0" max="10" onChange={props.changeHandler} className="num" defaultValue="1"/>
    )
}