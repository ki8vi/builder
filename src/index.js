
import {model} from "./model"
import "./style/index.css"

const site = document.querySelector("#site");

model.forEach(el => {
  
   site.insertAdjacentHTML("beforeend", el.toHTML())  
});

