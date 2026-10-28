//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}


console.log(getResult(78));
console.log(getResult(43));

//Another example
function doubleMe(a){
    return a*2;
}

const doubleMeA = (a) => a*2;

doubleMe(2)
doubleMeA(2);