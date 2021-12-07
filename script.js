let $ = document
let loader = $.querySelector('.loader')
window.addEventListener('load', loadAll)

function loadAll() {
    loader.classList.add('hidden')
}