import "./render.js";
import "./change-language.js";

if(!localStorage.getItem('lang')){
  localStorage.setItem('lang', 'rus');
};

const body = document.body;
const display = body.querySelector('.display__textarea');
const spaceKey = body.querySelector('.space');
const spaceCode = '\u00A0';

const spaceClickHandler = (evt) => {
  evt.preventDefault();
  display.textContent += spaceCode;
};

// Слушатель нажатия на пробел
spaceKey.addEventListener('click', spaceClickHandler);

const keyElements = [...body.querySelectorAll('.keyboard__key')];
// Слушатель нажатия на клавиши на обычной клавиатуре и отображение на виртуальной нажатых клавиш
const keyboardKeyDownHandler = (evtBoard)=> {
  if(evtBoard.code === 'Tab') {
    evtBoard.preventDefault();
  }
  let el = keyElements.find((el)=> el.dataset.code === evtBoard.code);
  el.classList.add('active');
};

const keyboardKeyUpHandler = (evtBoardUp)=> {
  let el = keyElements.find((el)=> el.dataset.code === evtBoardUp.code);
  el.classList.remove('active');
};

display.addEventListener('keydown', keyboardKeyDownHandler);
display.addEventListener('keyup', keyboardKeyUpHandler);

document.addEventListener( "keydown", (evt) => {
  let key = evt.key;
  let code = evt.code;
  console.log("Code - " + code);
  console.log("Key - " + key);
});
console.log(localStorage.getItem('lang'));
