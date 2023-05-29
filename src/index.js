import {title, text, columns, image} from "./templates"
import {model} from "./model"
import "./style/index.css"

const site = document.querySelector("#site");

model.forEach(el => {
    let html = ""
    if(el.type === "title") {
        html = title(el)
    } else if(el.type === "text") {
        html = text(el)
    } else if(el.type === "columns") {
        html = columns(el)
    } else if(el.type === "image") {
        html = image(el)
    }
    
    site.insertAdjacentHTML("beforeend", html)
});


