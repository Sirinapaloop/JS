function isValidIP(str)  {

    array = str.split(".");

    if(array.length != 4){
        return false;
    }
    for(let x of array){
        if(!(x.length == x)){
            if(x.charAt(0) == "0"){
                return false;
            }
        }
        if(x > 255 || x < 0){
            return false
        }
    }
    if(parseInt(array[array.length-1]) == 0){
        return false
    }
    return true
}

    console.log(isValidIP("1.2.3.4"));
    console.log(isValidIP("1.2.3"));
    console.log(isValidIP("1.2.3.4.5"));
    console.log(isValidIP("123.45.67.89"));
    console.log(isValidIP("123.456.78.90"));
    console.log(isValidIP("123.045.067.089"));