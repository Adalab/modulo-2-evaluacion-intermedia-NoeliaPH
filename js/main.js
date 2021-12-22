"use strict";

// 1. Variables

const userSelect = document.querySelector(".js_useroption");
const playButton = document.querySelector(".js_letplay");
const letsPlay = document.querySelector(".js_letplay");
const computerPlay = document.querySelector(".js_computerplay");
let counter = 0;
let playerPoint = 0;
let computerPoint = 0;

//2. Funciones

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

function play1() {
  const userOption = userSelect.value;
  console.log("Play1", userOption);
  if (userOption === "stone") {
    console.log("Usuario elige piedra");
  } else if (userOption === "paper") {
    console.log("Usuario elige papel");
  } else if (userOption === "scissor") console.log("Usuario elige scissor");
}

function play2() {
  const userOption = userSelect.value;
  console.log(userOption);
  const compOption = numberRandom();
  console.log(compOption);
  let pointPlayer = document.querySelector(".js_pointplayer");
  let pointComputer = document.querySelector(".js_pointcomputer");

  console.log(pointPlayer.innerHTML);
  if (userOption === "stone" && compOption === "stone") {
    letsPlay.innerHTML = "Empate";
  } else if (userOption === "paper" && compOption === "paper") {
    letsPlay.innerHTML = "Empate";
  } else if (userOption === "scissor" && compOption === "scissor") {
    letsPlay.innerHTML = "Empate";
  } else if (userOption === "stone" && compOption === "paper") {
    letsPlay.innerHTML = "Gana";
    playerPoint++;
    pointPlayer.innerHTML = playerPoint;
  } else if (userOption === "stone" && compOption === "scissor") {
    letsPlay.innerHTML = "Pierde";
    computerPoint++;
    pointComputer.innerHTML = computerPoint;
  } else if (userOption === "papel" && compOption === "stone") {
    letsPlay.innerHTML = "Gana";
    playerPoint++;
    pointPlayer.innerHTML = playerPoint;
  } else if (userOption === "papel" && compOption === "scissor") {
    letsPlay.innerHTML = "Pierde";
    computerPoint++;
    pointComputer.innerHTML = computerPoint;
  } else if (userOption === "scissor" && compOption === "stone") {
    letsPlay.innerHTML = "Pierde";
    computerPoint++;
    pointComputer.innerHTML = computerPoint;
  } else if (userOption === "scissor" && compOption === "paper") {
    letsPlay.innerHTML = "Gana";
    playerPoint++;
    pointPlayer.innerHTML = playerPoint;
  }
}

function numberRandom() {
  const numberResult = getRandom(10);

  if (numberResult <= 3) {
    console.dir("Movimiento computadora es piedra");
    return "stone";
  } else if (numberResult <= 6) {
    console.dir("Movimiento computadora es papel");
    return "paper";
  } else {
    console.dir("Movimiento computadora es tijera");
    return "scissor";
  }
}

function handleClick(event) {
  event.preventDefault();
  play1();
  play2();
  counter++;
  if (counter === 10) {
    counter = 0;
    playerPoint = 0;
    computerPoint = 0;
    document.querySelector(".js_pointplayer").innerHTML = playerPoint;
    document.querySelector(".js_pointcomputer").innerHTML = computerPoint;
  }
}

// 3. Listener

computerPlay.addEventListener("click", handleClick);
