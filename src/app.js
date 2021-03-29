/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Poker cards generator
window.onload = function() {
  //write your code here
  //   var suitsContent = ["\u2666", "\u2665", "\u2663", "\u2660"];
  var suitsContent = ["\u2665", "\u2660", "\u2663", "\u2666"];
  var suitsClasses = ["corazon", "espadas", "trebol", "diamante"];
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomPosition = Math.floor(Math.random() * suitsClasses.length);
  let paloTop = document.querySelector(".topSuit");
  let paloInferior = document.querySelector(".bottomSuit");
  paloTop.innerHTML = suitsContent[randomPosition];
  paloInferior.innerHTML = suitsContent[randomPosition];

  paloTop.className = "topSuit";
  paloTop.classList.add(suitsClasses[randomPosition]);
  paloInferior.className = "suits bottomSuit d-flex flex-item";
  paloInferior.classList.add(suitsClasses[randomPosition]);

  let newNumber = Math.floor(Math.random() * numbers.length);
  let value = document.querySelector(".number");
  value.innerHTML = numbers[newNumber];
};

// // Poker cards generator

// window.onload = function() {
//   //write your code here
//   var suits = ["\u2666", "\u2665", "\u2663", "\u2660"];
//   var numbers = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];

//   let newSuit = Math.floor(Math.random() * suits.length);
//   let palo = document.querySelector(".suits");
//   palo.innerHTML = suits[newSuit];

//   let paloInferior = document.querySelector(".bottomSuit");
//   paloInferior.innerHTML = suits[newSuit];

//   let newNumber = Math.floor(Math.random() * numbers.length);
//   let value = document.querySelector(".number");
//   value.innerHTML = numbers[newNumber];
// };
