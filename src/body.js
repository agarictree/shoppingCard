import React from "react";
import images from "./cupcakes";
import Counter from "./counter";
// import { storage } from ".";

function Item(props) {
    let obj = {};
    let count = 1;
    function incr(e) {
        let description = e.target.closest(".addToCard-form").previousElementSibling.previousElementSibling.textContent;
        obj.name = description;
        obj.counter = count;
        props.addItem(obj);
        window.location.reload();
    }
    function onchangeHandler(e) {
        count = +e.target.value;
    }
    return (
        <div className="card sweet-cart">
            <img src={props.img} alt="sweet" className="card-img-top"/>
            <h5 className="card-title text-center">{props.description}</h5>
            <div className="card-text text-center">price: {props.price.toFixed(1)}$</div>
            <div className="d-flex flex-row flex-nowrap  align-items-center justify-content-center addToCard-form">
                <button className="btn btn-success" onClick={incr}>Add to Card</button>
                <Counter changeHandler={onchangeHandler}/>
            </div>
        </div>
    )
}
export default function Body(props) {
    return (
        <section className="container d-flex flex-row flex-wrap">
            {images.map((el, i) => {
                return (
                    <Item key={i} img={el.img} description={el.description} addItem = {props.addItem} price = {el.price}/>
                    )
            })}
        </section>
    )
}