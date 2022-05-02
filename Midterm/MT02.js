function highestDigit(num) {
    let data = num.toString().split("");
    let top = 0;
    
    for(let item of data) {
        if(item >= top) {
            top = item;
        }
    }

    return top;

}
    console.log(highestDigit(379));
    console.log(highestDigit(2));
    console.log(highestDigit(377401));

   