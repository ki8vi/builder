export class Site {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    render(model) {
        this.element.innerHTML = ""
        model.forEach(el => {
            this.element.insertAdjacentHTML("beforeend", el.toHTML())  
         });
    }
}