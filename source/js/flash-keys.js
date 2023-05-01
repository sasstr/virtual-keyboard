const keyElements = [...document.querySelectorAll('.keyboard__key')];
const textarea = document.querySelector('.display__textarea');
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

textarea.addEventListener('keydown', keyboardKeyDownHandler);
textarea.addEventListener('keyup', keyboardKeyUpHandler);