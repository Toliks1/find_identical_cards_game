import {restart} from './randomNumbers.js';
import {refundShirt} from './refundShirt.js';
import {checkCoincidence} from './checkCoincidence.js';
import {checkWin} from './checkWin.js';


export const numberOfCards = 32;
export const wrapper = document.getElementsByClassName('grid_contain')[0];
let attempt = document.getElementsByClassName('attempts')[0].children[0];
const button = document.getElementById('but');
export let counterForWin = 0;

restart();

export const cardCollection = wrapper.children;
export const cardArray  = [...cardCollection];

const showAttempts = val => val%2 === 0 && (attempt.textContent = `Attempt № ${counterForWin/2}`)

const turnOnButton =  val => counterForWin > val && (button.disabled = false); 

wrapper.addEventListener('click', (event) => {
	refundShirt(event.target);
	event.target.classList.contains('shirt') && (counterForWin+=1);
	event.target.classList.remove('shirt');
	checkCoincidence();
	showAttempts(counterForWin);
	checkWin();
	turnOnButton(numberOfCards);
})

button.addEventListener('click',()=>{
	counterForWin-=2;
	showAttempts(counterForWin);
	counterForWin < numberOfCards ? (button.disabled = true) : turnOnButton(numberOfCards);
})
