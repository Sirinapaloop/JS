function capToFront(str) {

    let array = str.split("");
    let result = "";
    let old = "";
   
    for(let x of array){
        if(x == x.toUpperCase()){
            result += x;
        }
        else{
            old += x;
        }
    }
    return (result + old);
}


    console.log(capToFront("hApPy"));
    console.log(capToFront("moveMENT"));
    console.log(capToFront("shOrtCAKE"));