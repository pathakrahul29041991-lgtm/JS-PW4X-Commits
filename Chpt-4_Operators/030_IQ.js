let environment = "Staging";
let baseURL = environment === "prod" ? "https://production.example.com" : "https://staging.example.com"; // condition ? if_true : if_false
console.log(baseURL); // https://staging.example.com