import {numberOfCards, wrapper} from './main.js';

const getRandomNumber =()=> Math.ceil(Math.random()*numberOfCards);

const getNumbersArr = () =>{
	const arr =[];
	for (let i = 0; arr.length<numberOfCards;i++){
		let candidate = getRandomNumber();
		!arr.includes(candidate) && arr.push(candidate);
	}
	const resultArr = arr.map(item => item > numberOfCards/2 ? item -= numberOfCards/2 : item);
	return resultArr;
}

export const restart = () =>{
	const arrayForGame = getNumbersArr();
	for (let i=0;i<numberOfCards;i++){
		const card = document.createElement("DIV");
		wrapper.append(card);
		card.style.background = `url('images/${arrayForGame[i]}.jpg') 50% 50% / contain no-repeat`;
		card.classList.add('shirt','wrImage');
	}
}
