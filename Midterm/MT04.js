function totalVolume () {
    var result = 0;

    for(let j = 0 ; j < arguments.length ; j++){
        var sum = 1;
        for(let i = 0 ; i < arguments[j].length ; i++){
            sum *= arguments[j][i];
        }
        result += sum;
    }
    return result;
}

    console.log(totalVolume([4,2,4], [3,3,3], [1,1,2],[2,1,1]));
    console.log(totalVolume([2,2,2],[2,1,1]));
    console.log(totalVolume([1,1,1]));