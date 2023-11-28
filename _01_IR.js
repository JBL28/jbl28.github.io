const searchFrom = document.querySelector('.search-form')
const searchBox = document.querySelector('.search-input')

function handleSearch(event) {
    event.preventDefualt;
    const sValue = searchBox.value;
    search_on_naver(sValue);
}

function search(){
    searchFrom.addEventListener("click", handleSearch)
}

function search_on_naver(sValue) {
    location.href = `_01_IR_Result?query=${sValue}`
}

function init() {
    search()
}

init()
