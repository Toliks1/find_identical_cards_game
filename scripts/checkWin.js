import {cardArray, counterForWin} from './main.js';

export const checkWin = ()=>{
	const shirtsArr = cardArray.filter(item => item.classList.contains('shirt'));
	if(shirtsArr.length===0){
		document.body.insertAdjacentHTML(`afterbegin`, `
            <div class="modal-shadow">
                <div class="modal">
                    <p></p>
                    <button>Restart</button>
                </div>
            </div>
        `);
		const message = document.getElementsByClassName('modal')[0].children[0];
		const but = document.getElementsByClassName('modal')[0].children[1];
		message.textContent = `You Win!!! Number of attempts: ${counterForWin/2}`;
		but.addEventListener('click', () => location.reload())  
	}
}