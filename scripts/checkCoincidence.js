import {cardArray} from './main.js';

const changeBackground = item => {
	item.classList.remove('wrImage', 'shirt');
	item.classList.add('guess');
}

export const checkCoincidence = ()=>{
	const nakedCardsArr = cardArray.filter(item => !item.classList.contains('shirt')&&
	!item.classList.contains('guess'));
	if (nakedCardsArr.length === 2){
		if(nakedCardsArr[0].style.background === nakedCardsArr[1].style.background){
			nakedCardsArr.forEach(item => setTimeout(changeBackground, 500, item));					
		}
	}
}
