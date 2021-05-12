//DEEL 1: code gedraaid in Node en alle verschillende inputs werken.
const myAge = 35;
if (myAge >= 18) {
    console.log("Yes, you can enter");
}else {
    console.log("Sorry, You cant enter");
}

//DEEL 2: code gedraaid in Node en alle verschillende inputs werken.
const isFemale = (false);
if (isFemale) {
    console.log("Its time for Ladiesnight!");
} else {
    console.log("Sorry, only ladies can enter");
}

//DEEL 2: code gedraaid in Node en alle verschillende inputs werken.
const driveStatus = "bob";
if (driveStatus == "bob") {
    console.log("You are save to drive");
}else if (driveStatus != "bob") {
    console.log("You have been drinking, you cant drive!")
}




//Opdracht: Comparison && Logical Operators----------------------------------

//DEEL 1: 50% korting
const age = 18;

if ( age >= 18 && age <=25) {
    console.log("Je krijgt 50% korting!");
}else {
    console.log("Sorry, je krijgt geen korting!");
}

//DEEL 2: Ludieke actie! 
const name = "Sarah" || "Bram";

if (name === "Sarah"){
    console.log("Je krijgt een gratis biertje");
}else if (name === "Bram") {
    console.log("Je krijgt een gratis drankje");
}else {
    console.log("Alleen Sarahs en Brams krijgen een gratis biertje");
}

//DEEL 3: Jubileum korting 
const totalAmount = 49;

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Gratis vega bitterballen!");
}else if (totalAmount >= 50 && totalAmount < 100){
    console.log("Gratis portie nachos");
}else if (totalAmount >= 100){
    console.log("Gratis fles champagne");
}else {
    console.log("Betalen maar!")
}


//Opdracht: Reference types: Objects & Arrays-------------------------------

//Deel 1 Objecten:

const person = {
    name: 'Geraisa',
    age: 35,
    evaluations: [7, 10, 9]
};

console.log(person);
//console.log(person.name); om alleen de naam te zien
//console.log(person.age); om alleen de leeftijd te zien
//console.log(person.evaluations); om alleen de gehaalde cijfers te laten zien.


//Deel 2 Arrays:

const array = ["groen", "blauw", "rood"];

array.push("geel");
array.push(5);
array.push({greeting: "hi ik ben een object"});

console.log(array[5]);
//console.log(array.lenth); om de lengte te loggen
//console.log(array[0]); om de eerste element te laten zien
//console.log(array[2]); om de laatste element te laten zien
//console.log(array[5]); om de laatste element te zien


//Deel 3: Bekijk een "real-life" object
