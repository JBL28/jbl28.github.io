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
    location.href = `IR_Result.md?query=${sValue}`
}

function init() {
    search()
}

init()
