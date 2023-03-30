const personalData ={
    nameFirstAndSecond: "Cristian Daniel",
    lastName: "Revoredo Meza",
    age: 24,
    height: 1.55,
    IamDeveloper: true
};

let edad = personalData.age;
console.log(edad);

let personalDataFriend = {
    nameFirstAndSecond: "Gabriel Sebastian",
    lastName: "Borja Nieto",
    age: 21,
    height: 1.65,
    IamDeveloper: false
};
let listPersonaData = [personalData, personalDataFriend];
console.log(listPersonaData);

console.log("-------------------------------------------")

let ordenado = listPersonaData.sort((a,b) => b.age - a.age);
console.log(ordenado)