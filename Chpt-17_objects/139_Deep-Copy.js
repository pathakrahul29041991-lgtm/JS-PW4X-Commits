//Shallow copy
// let user1 = {name: "Rahul", Address: {city: "Pune", village: "Mulshi"}};

// let user2 = {...user1};  // High level copy

// user2.name="Hrishi";
// user2.Address.city="Mumbai";

// console.log(user1.name);
// console.log(user2.name);

// console.log("---------------------------")

// console.log(user1.Address.city);
// console.log(user2.Address.city);

//Deep copy

let user3 = {name: "Rahul", Address: {city: "Pune", village: "Mulshi"}};

let user4 = structuredClone(user3);  // High level copy

user4.name="Hrishi";
user4.Address.city="Mumbai";

console.log(user3.name);
console.log(user4.name);

console.log("---------------------------")

console.log(user3.Address.city);
console.log(user4.Address.city);   //avqan