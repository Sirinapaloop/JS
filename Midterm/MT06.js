function removeDups(data) {
    let dataValue =[];
    let count = 0;

    for(let j = 0 ; j < data.length ; j++) {
        for(let i = 0 ; i < dataValue.length ; i++) {
            if (dataValue[i] == data[j]) {
                count = 1;
                }
        }
        if (count == 0){
            dataValue.push(data[j]);
        }
    }
    return dataValue;
}


console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(['The', 'big', 'cat']));
console.log(removeDups(['John', 'Taylor', 'John']));