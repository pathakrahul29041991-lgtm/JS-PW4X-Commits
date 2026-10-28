let A = [5, 1, 2, 1, 3, 2];

/*
let frequencyMap = A.reduce((acc, A) => {
    acc[A] = (acc[A] || 0) + 1;
    return acc;
}, {});

*/

let numbfreq = A.reduce((PreVal,A) => 
{
    PreVal[A] = (PreVal[A] || 0 )+ 1;
    return PreVal;
}, {});

console.log(numbfreq);