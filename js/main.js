"use strict";

// 1. Variables

const userOption = document.querySelector('.js_useroption');
const playButton = document.querySelector('.js_play');
const letsPlay = document.querySelector('.js_letplay');
const computerPlay = document.querySelector('.js_computerplay');

//2. Funciones

function getRandom(max) {
    return Math.ceil(Math.random() * max);
  }

  function play1(){
      if (userOption === "stone"){
      console.log ("Usuario elige piedra");
      } else if (userOption === "paper"){
      console.log ("Usuario elige papel");
      } else (userOption === "scissor")
      console.log ("Usuario elige piedra");
      }
  

  function play2(){
    if (userOption === 'stone') {
       letsPlay.innerHTML = "Empate";
      } else if (userOption === 'paper') {
        letsPlay.innerHTML = "Empate";
      } else if (userOption === 'scissor') {
        letsPlay.innerHTML = "Empate";
      } else if (userOption === 'stone' && computerPlay === 'paper'){
        letsPlay.innerHTML = "Gana";
      } else if (userOption === 'stone' && computerPlay === 'scissor'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'papel' && computerPlay === 'stone'){
        letsPlay.innerHTML = "Gana";
      } else if (userOption === 'papel' && computerPlay === 'scissor'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'scissor' && computerPlay === 'stone'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'scissor' && computerPlay === 'paper')
        letsPlay.innerHTML = "Gana";
}


function numberRandom(){
    if (getRandom(10) <= 3){
        console.dir ("Movimiento computadora es piedra");
    } else if (getRandom(10) <= 6){
        console.dir ("Movimiento computadora es papel");
    } else (getRandom(10)<=10)
        console.dir ("Movimiento computadora es tijera");
    }
 

  function handleClick (event){
      event.preventDefault();
      play1();
      play2();
      
  }

// 3. Listener


playButton.addEventListener ('click', handleClick);