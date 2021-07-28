import images from "./cupcakes";

function getImg() {
    let arr = [];
    if(document.cookie) {
        let cookies = document.cookie.split(";");
        images.find(item => {
            return cookies.forEach(elem => {
                let [name, count] = elem.split("=");
                if(item.description == name.trim()) {
                    console.log(elem);
                    item.counter = count;
                    arr.push(item);
                }
            })
        })
    }
    return arr;
}
export default getImg;