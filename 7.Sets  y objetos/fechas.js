const date = new Date();
console.log(date);

const date2 = new Date(1998, 10, 13, 14, 23, 54);
console.log(date2)

const date3 = new Date(1000000);
console.log(date3)

const date4 = new Date("November 13, 1998");
console.log(date4)

let day = date.getDate();
let mounth = date.getMonth() +1;
let year = date.getFullYear();

console.log("FECHA: " + day+ " / " + mounth + " / " + year);
console.log(date.toLocaleDateString("en-US"));