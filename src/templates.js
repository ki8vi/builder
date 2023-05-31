import {row, col, css} from "./utils";



function title(el) {
    const {tag = "h1", styles} = el.options
    return row(col(`<${tag}>${el.value}</${tag}>`), css(styles))
}
function text(el) {
    return row(col(`<p>${el.value}</p>`), css(el.options.styles))
}
function columns(el) {
    let html = el.value.map(col).join("")
    return row(html, css(el.options.styles))
}
function image(el) {
    const {imageStyles: is, styles} = el.options
    return row(`<img src="${el.value}"  style="${css(is)}" alt="logo"/>`, css(styles))
}

export const templates = {
    title,
    text,
    columns,
    image
}