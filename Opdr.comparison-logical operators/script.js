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

//-----------------------------------------------------------------------------



//Opdracht: Comparison && Logical Operators

//Deel 1: 50% korting
const age = 18;
if ( age >= 18 && age <=25) {
    console.log("Je krijgt 50% korting!");
}else {
    console.log("Sorry, je krijgt geen korting!");
}

//Deel 2: Ludieke actie! 
const name = "Sarah" || "Bram";
if (name === "Sarah"){
    console.log("Je krijgt een gratis biertje");
}else if (name === "Bram") {
    console.log("Je krijgt een gratis drankje");
}else {
    console.log("Alleen Sarahs en Brams krijgen een gratis biertje");
}

//Deel 3: Jubileum korting 
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