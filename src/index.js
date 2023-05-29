const model = [
    {type: "title", value: "hello js"},
    {type:"text", value: "some text"},
    {type: "columns", value: [
        "11711115",
        "2255522222",
        "3333333",
        "3333333",
        "3333333"
    ]},
    {type: "image", value: "./img/img.png"}
];
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

function title(el) {
    return `<div class="row">
                <div class="col-sm">
                    <h1>${el.value}</h1>
                </div>
            </div>`
}
function text(el) {
    return `<div class="row">
                <div class="col-sm">
                    <p>${el.value}</p>
                </div>
            </div>`
}
function columns(el) {
    let html = ""
    el.value.forEach(item => html += `<div class="col-sm">${item}</div>`)
    return `<div class="row">
                ${html}
            </div>`
}
function image(el) {
    return `<div class="row">
                <img src="${el.value}" type="image" alt="logo"/>
            </div>`
}
