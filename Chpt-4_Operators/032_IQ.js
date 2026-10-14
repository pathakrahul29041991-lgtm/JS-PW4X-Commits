let responsetime = 850; // ms
let sla = 1000; // ms
let responsestatus = responsetime < sla ? "Pass" : "Fail"; // condition ? if_true : if_false
console.log(responsestatus); // Pass