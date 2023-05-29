export function title(el) {
    return `<div class="row">
                <div class="col-sm">
                    <h1>${el.value}</h1>
                </div>
            </div>`
}
export function text(el) {
    return `<div class="row">
                <div class="col-sm">
                    <p>${el.value}</p>
                </div>
            </div>`
}
export function columns(el) {
    let html = ""
    el.value.forEach(item => html += `<div class="col-sm">${item}</div>`)
    return `<div class="row">
                ${html}
            </div>`
}
export function image(el) {
    return `<div class="row">
                <img src="${el.value}"  alt="logo"/>
            </div>`
}