
function returnQuery(){
    const recieveData = location.href.split('=')[1];
    const Query = decodeURI(recieveData)

    document.getElementById('text').innerHTML = `<div style="color: #019e7c;">${Query}의 검색 결과입니다.<div>`;
}
    

returnQuery();