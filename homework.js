
const shop = "Dalida's tech and music shop";

let IsShopOpen = true;//shop
let items = 23;//tech and music instruments
let viola = null;//violin is better
let aloiva = undefined;//strange name
let costumer = "Aman";

//ITEMS THAT ARE GOING TO BE SOLD
let music_instruments=[
    {
        name:"Guitar Yamaha F310",
        price: 80000,
    },
    {
        name:"Paganini's violin",
        price:9999999,
    },
    {
        name:"drums",
        price:120000,
    }
]
// MENTION
music_instruments.print = function() {
    console.log("Items are ready to be sold")
}
music_instruments.print(); 

let costumer2 = "Aibek"; // DO you have a guitar? Yamaha f310 to be sure.
console.log(music_instruments[0].name);
console.log("OO what a chance, what year?")
music_instruments[0].year = 2021;
console.log(music_instruments[0]);
delete music_instruments[0].year;

let costumer3 ="Aigul";// I want to upgrade my violin and I have a lot of money, do you have any worth items?
console.log("OOO WHAT A VIOLIN, WHO IS THE CREATOR AND WHAT CHARACTERISTICS?")
music_instruments[1]["CREATOR"]="kazakh";
let quality = 5;
music_instruments[1].quality=quality;
console.log(music_instruments[1]);

// TECH RELATED
let numOfItems = music_instruments.length;
console.log(`There are ${numOfItems} items in shop `);

let tech = [
    "keyboard",
    "mouse",
    "laptop",
];
console.log("UPDATE OF TECH");
tech.push("speaker");
tech.shift("computer");//ADDING THINGS

let games = [
    "GTA V",
    "BAUYRSAK",
    "Go away",
    "I am full",
];

let related_with_tech = tech.concat(games);//CONCATENATING ARRAYS
console.log(`These are tech related things: ${related_with_tech}`);//showing

let kid = 'Arman';
let found = false;
console.log('I have a question, do you have Gta4?');
for(let i = 0;i<games.length;i++){//searching for a game
    if(games[i]=="GTA 4"){//if exists we couting it
        found = true;
        console.log("Yes boy, here we go!");
    }
}
let result = (!found) ? "Unfortunately, we don't have, sorry": "It costs 25000";// checking by ternary operator
console.log(result);

// let selectedGame;
// let FInalBOught = selectedGame ?? "nothing"
// console.log(FInalBOught); 

console.log("It's time to check how much things are left in our shop");


function count_things(){
    console.log(related_with_tech.length+3)
}

count_things();

import {canBuyProduct} from second.js;

console.log(canBuyProduct("Gta 4"));//alternating way to check whether it exists


console.log("How much guitar costs?")
function showsmth({name,price}){//destructing
    console.log(`${name} costs ${price}`);
}
showsmth(music_instruments[0]);