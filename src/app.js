/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Poker cards generator

window.onload = function() {
  //write your code here
  var suits = ["diamonds", "hearts", "shamrocks", "spades"];
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

  let newSuit = Math.floor(Math.random() * suits.length);
  let palo = document.querySelector(".suits");
  palo.innerHTML = suits[newSuit];

  let paloInferior = document.querySelector(".bottomSuit");
  paloInferior.innerHTML = suits[newSuit];

  let newNumber = Math.floor(Math.random() * numbers.length);
  let value = document.querySelector(".number");
  value.innerHTML = numbers[newNumber];
};
