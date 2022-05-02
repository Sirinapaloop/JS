const furniture = ["Table", "Chairs", "Couch"];
furniture.forEach(myFunction);
function myFunction(name) {
    console.log(name);
    for(let char of name){
        console.log(char);
    }
}