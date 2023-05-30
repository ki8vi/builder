import {templates} from "./templates"
import {model} from "./model"
import "./style/index.css"

const site = document.querySelector("#site");

model.forEach(el => {
    const toHtml = templates[el.type];
    if(toHtml) {
      site.insertAdjacentHTML("beforeend", toHtml(el))  
    }
});

