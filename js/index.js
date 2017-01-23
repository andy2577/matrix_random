function generateMatrix() {
    let arr = [];
    for( let i = 0; i < 5; i++){
        let min = [];
        for( let j = 0; j < 5; j++){
            min.push(Math.ceil(Math.random() * 10)) ;
        }
        arr.push(min);
    }
    
    return arr;
}

function generateView() {
    
    let arr = generateMatrix();
    let table = document.createElement("table");
    table.style.border = "solid #0000FF";
    let str = '';
    for( let i = 0; i < 5; i++ ){
        str += '<tr>';
        for (let j = 0; j < 5; j++) {
            str += '<td>' + arr[i][j] + '</td>';
        }
        str += '</tr>';
    }
    table.innerHTML = str;
    document.body.appendChild(table);

}

generateView();