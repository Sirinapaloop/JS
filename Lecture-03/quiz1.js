let value1 = ['apple', 1 , false];
let value2 = ['Fries', 2 ,true];
let value3 = ['Mars', 9 , 'Apple'];

    if (checkArrayType(value1,value2) == true) {
        console.log("Value1 is equals to Value2")
    }
    if (checkArrayType(value1,value2) == false) {
        console.log("Value1 isn't equals to Value2")
    }
    if (checkArrayType(value1,value3) == true) {
        console.log("Value1 is equals to Value3")
    }
    if (checkArrayType(value1,value3) == false) {
        console.log("Value1 isn't equals to Value3")
    }
    if (checkArrayType(value2,value3) ==true) {
        console.log("Value2is equals to Value3")
    }
    if (checkArrayType(value2,value3) == false) {
        console.log("Value2 isn't equals to Value3")
    }
    //console.log(checkArrayType(value1,value2))
    //console.log(checkArrayType(value1,value3))
    //console.log(checkArrayType(value2,value3))

function checkArrayType(arr1,arr2){
    for (let i = 0 ; i < 3 ; i++){
        if(typeof(arr1[i]) != typeof(arr2[i])){
            return false;
        }
    }
    return true;

}