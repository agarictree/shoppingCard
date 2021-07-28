import React from "react";
import DeleteButton from "./deleteButton";
import getImg from "./getItems";
// import deleteFromDB from "./deleteFromDatabase";

function deleteItem(e) {
    let domElement = e.target.closest("button").id;
    let arr = document.cookie.split(";");
    let findedItem = arr.find(el => {
        let [name, count] = el.split("=");
        return name.trim() == domElement;
    })
    document.cookie = `${findedItem}; max-age=0`;
    window.location.reload();
}
export default function ShoppingCard() {
    let result = getImg();
    let price = result.map(elem => elem.price * elem.counter);
    console.log(result);
        return (
            <section className="container d-flex flex-column flex-wrap">
                <h3>Items in shopping card</h3>
                <ul className="card-list">
                    {
                        result.length !== 0 ? result.map((el, i) => {
                            return (
                                <li className="d-flex flex-row flex-nowrap align-items-center" key={i}>
                                    <img src={el.img} alt="your purchase" className="card-img-top"/>
                                    <div className="card-title">{el.description}</div>
                                    <div className="card-text"> x </div>
                                    <div className="card-text">{el.counter}</div>
                                    <div className="card-text"> * </div>
                                    <div className="card-text">{el.price}$</div>
                                    <DeleteButton onclickHandler={deleteItem} id = {el.description}/>
                                </li>
                            )
                        }) : <h3>Empty.</h3>
                    }
                </ul>
                {
                    result.length !== 0  ? <h4 className="text-right">Total: {price.reduce((sum, curr) => sum + curr, 0).toFixed(2)}$</h4> : null
                }
            </section>
        )
}