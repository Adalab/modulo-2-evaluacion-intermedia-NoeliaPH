"use strict";

// 1. Variables

const userSelect = document.querySelector('.js_useroption');
const playButton = document.querySelector('.js_letplay');
const letsPlay = document.querySelector('.js_letplay');
const computerPlay = document.querySelector('.js_computerplay');
const numberResult = getRandom(10);

//2. Funciones

function getRandom(max) {
    return Math.ceil(Math.random() * max);
  }

  function play1(){
      const userOption = userSelect.value;
      if (userOption === "stone"){
      console.log ("Usuario elige piedra");
      } else if (userOption === "paper"){
      console.log ("Usuario elige papel");
      } else (userOption === "scissor")
      console.log ("Usuario elige piedra");
      }
  

  function play2(){
    const userOption = userSelect.value;
    const compOption = numberRandom();

    if (userOption === 'stone' && compOption === 'stone') {
       letsPlay.innerHTML = "Empate";
      } else if (userOption === 'paper' && compOption === 'paper') {
        letsPlay.innerHTML = "Empate";
      } else if (userOption === 'scissor' && compOption === 'scissor'){
        letsPlay.innerHTML = "Empate";
      } else if (userOption === 'stone' && compOption === 'paper'){
        letsPlay.innerHTML = "Gana";
      } else if (userOption === 'stone' && compOption === 'scissor'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'papel' && compOption === 'stone'){
        letsPlay.innerHTML = "Gana";
      } else if (userOption === 'papel' && compOption === 'scissor'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'scissor' && compOption === 'stone'){
        letsPlay.innerHTML = "Pierde";
      } else if (userOption === 'scissor' && compOption === 'paper')
        letsPlay.innerHTML = "Gana";
}


function numberRandom(){
    const numberResult = getRandom(10);

    if (numberResult <= 3){
        console.dir ("Movimiento computadora es piedra");
        return 'stone';
    } else if (numberResult <= 6){
        console.dir ("Movimiento computadora es papel");
        return 'paper';
    } else {
        console.dir ("Movimiento computadora es tijera");
        return 'scissor';
    }
    }
 

  function handleClick (event){
      event.preventDefault();
      play1();
      play2();
      
  }

// 3. Listener


computerPlay.addEventListener ('click', handleClick);