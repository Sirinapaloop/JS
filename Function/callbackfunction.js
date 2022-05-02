function createQuote(quote,callback){
    let myQuote = "Like i Always say, "+quote
    callback(myQuote) // 2
}

function logQuote(quote){
    console.log(quote +" Yes..")
}

createQuote(" You will getting better!",logQuote) // 1
