//Ex-3
function Add(a,b,c){
    return a+b+c;
}

let num = [1,2,3,4,5];

console.log(Add(...num));

//Ex-2
function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
hasError(...responseCodes);