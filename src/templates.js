import {row, col, css} from "./utils";



function title(el) {
    const {tag = "h1", styles} = el.options
    return row(col(`<${tag}>${el.value}</${tag}>`), css(styles))
}
function text(el) {
    return row(col(`<p>${el.value}</p>`))
}
function columns(el) {
    let html = el.value.map(col).join("")
    return row(html)
}
function image(el) {
    return row(`<img src="${el.value}"  alt="logo"/>`)
}

export const templates = {
    title,
    text,
    columns,
    image
}