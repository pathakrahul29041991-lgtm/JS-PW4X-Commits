let isCI = "true";
let browsermode = isCI ? "headless" : "headed"; // condition ? if_true : if_false
console.log(browsermode); // headless