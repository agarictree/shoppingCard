import React, { useEffect, useState } from "react";
import sw1 from "./img/sw1.jpg";
import sw2 from "./img/sw2.jpg";
import sw3 from "./img/sw3.jpg";
import sw4 from "./img/sw4.jpg";
import sw5 from "./img/sw5.jpg";
let images = [sw1, sw2, sw3, sw4, sw5];

export default function Home() {
    let [state, setState] = useState(sw1);
    let [count, setCount] = useState(0);
    function clickHandler(e) {
        let target = e.target;
        let source = target.src;
        for (let i = 0; i < images.length; i++) {
            if(source == images[i]) {
                target.src =  images[i+1];
            }
        }
        if(source == images[images.length - 1]) {
            target.src = images[0];
        }
    }
        useEffect(() => {
            let id = setInterval(() => {
                setCount(count + 1);
                setState(images[count]);
                // console.log(count, state);
                if(count == images.length) {
                    setCount(1);
                    setState(sw1);
                }
            }, 1500);
            return () => clearInterval(id);
        }, [count])
        
    return (
        <main>
            <h2 className="text-center">Best sweets in city</h2>
            <section className="slider">
            <img src={state} alt="1" id="slider2" />
            </section>
            <section className="slider" onClick={clickHandler}>
                <img src={sw1} alt="1"/>
                {/* <img src={sw2} alt="2" hidden/>
                <img src={sw3} alt="3" hidden/> */}
            </section>
        </main>
    )
}