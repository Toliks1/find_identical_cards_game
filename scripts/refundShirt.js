import {numberOfCards, cardCollection} from './main.js';

export const refundShirt = event =>{
	const shirtCollection = document.getElementsByClassName('shirt');
	const guessCollection = document.getElementsByClassName('guess');
	if (shirtCollection.length + guessCollection.length < numberOfCards-1){
		for (let i=0;i<numberOfCards;i++){
			if (!cardCollection[i].classList.contains('shirt')&&
				!cardCollection[i].classList.contains('guess')&&
				event.classList.contains('shirt')){
					cardCollection[i].classList.add('shirt');
			}
		}
	}	
}