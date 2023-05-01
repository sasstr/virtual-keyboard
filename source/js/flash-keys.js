const keyElements = [...document.querySelectorAll('.keyboard__key')];
const textarea = document.querySelector('.display__textarea');
// Слушатель нажатия на клавиши на обычной клавиатуре и отображение на виртуальной нажатых клавиш
const keyboardKeyDownHandler = (evtBoard) => {
  if (evtBoard.code === 'Tab') {
    evtBoard.preventDefault();
  }
  const el = keyElements.find((element) => element.dataset.code === evtBoard.code);
  el.classList.add('active');
};

const keyboardKeyUpHandler = (evtBoardUp) => {
  const elem = keyElements.find((el) => el.dataset.code === evtBoardUp.code);
  elem.classList.remove('active');
};

textarea.addEventListener('keydown', keyboardKeyDownHandler);
textarea.addEventListener('keyup', keyboardKeyUpHandler);
