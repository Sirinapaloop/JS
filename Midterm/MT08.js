function simplePair(data, value)  {
    let result = 0;
    let dataValue = [];

        for(let j = 0; j < data.length ; j++) {
            for(let i = 0; i < data.length; i++) {
                result = data[j] * data[i];
                if(result == value) {
                    if(data[j] == data[i]) {
                        return null;
                    }
                    dataValue.push(data[j]);
                    dataValue.push(data[i]);
                    return dataValue;
                }
            }
        }
    }

    console.log(simplePair([1,2,3], 3));
    console.log(simplePair([1,2,3], 6));
    console.log(simplePair([1,2,3], 9));