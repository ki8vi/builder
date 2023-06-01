import { block } from "../utils";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.element = document.querySelector(selector);
        this.update = updateCallback;
        this.init()
    }
    init() {
       this.element.insertAdjacentHTML("afterbegin", this.template) 
       this.element.addEventListener("submit", this.add.bind(this))
    }
    get template() {
        return [block("text"), block("title")].join("")
                 
    }
    add(e) {
        e.preventDefault();
        const type = e.target.name;
        const value = e.target.value.value;
        const styles = e.target.styles.value;
        let newBlock = type === "text"
        ? new TextBlock(value, {styles})
        : new TitleBlock(value, {styles})
        
        this.update(newBlock)

        e.target.value.value = "";
        e.target.styles.value = "";
    }


}

