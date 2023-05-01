const body = document.body;
const display = body.querySelector('.display__textarea');
const spaceKey = body.querySelector('.space');
const backspaceKey = body.querySelector('.backspace');
const tabKey = body.querySelector('.tab');
const capsLock = body.querySelector('.caps-lock');
const enterKey = body.querySelector('.enter');
const shiftKeys = body.querySelectorAll('.shift');
const keys = body.querySelectorAll('.letter-key');
const shiftOffNumber = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const shiftEngArr = ['±', '!','@','#','$','%','^', '&', '*','(',')','_','+'];
const shiftRusArr = ['<', '!','№','"','%',':',',', '.', ';','(',')','_','+'];
const optionsKey = ['§','¡','™', '£', '¢', '∞', '§', '¶', '•', 'ª', 'º', '–', '≠']
const rowNumberKeys = body.querySelectorAll('.row-0');
const spaceCode = '\u00A0';
const shiftNumberLang = {
  'rus': shiftRusArr,
  'eng': shiftEngArr,
};
const rusOptionKeys = [
  'ј','џ','ќ','®','†','њ','¨','ѓ','ѕ','ў','“','ъ',
  'ƒ','ы','ћ','÷','©','₽','°','љ','∆','…','э','ё',
  ']','ђ','≈','≠','µ','и','˜','™','≤','≥','“'
];
const engOptionKeys = [
  'œ','∑','´','®','†','¥','¨','ˆ','ø','π','“','‘',
  'å','ß','∂','ƒ','©','р','°','љ','∆','…','э','ё',
  '`','Ω','≈','ç','√','∫','~','µ','≤','≥','÷'
];
const arrows = body.querySelectorAll('.arrow');
// Стрелки вниз-вверх-влево-вправо
const direction = {
  'ArrowRight': '→',
  'ArrowDown': '↓',
  'ArrowLeft': '←',
  'ArrowUp': '↑',
};

// Функция слушатель нажатия на пробел
const spaceClickHandler = (evtSpace) => {
  evtSpace.preventDefault();
  display.value += spaceCode;
  display.focus();
};

// Функция слушатель нажатия на Tab
spaceKey.addEventListener('click', spaceClickHandler);

const tabClickHandler = (evtTab) => {
  evtTab.preventDefault();
  display.value += '\t';
  display.focus();
};

tabKey.addEventListener('click', tabClickHandler);

// Функция слушатель кнопки backspace
const backspaceClickHandler =  (evtBackspace) => {
  if(display.value.length > 0) {
    evtBackspace.preventDefault();
    display.value = display.value.slice(0, -1);
    display.focus();
  }  
};

backspaceKey.addEventListener('click', backspaceClickHandler);

// Функция слушатель нажатия на enter
const enterClickHandler = (evtEnter) => {
  evtEnter.preventDefault();
  display.value +=  '\n';
  display.focus();
};

enterKey.addEventListener('click', enterClickHandler);

// Функция слушатель нажатия после активирования SHIFT
const keyShiftOffClickHandler = () => {
  shiftKeys.forEach((key)=> key.classList.remove('active'));
  rowNumberKeys.forEach((key, i)=>{
    key.textContent = shiftOffNumber[i];
    key.removeEventListener('click', keyShiftOffClickHandler);
    key.removeEventListener('keyup', keyShiftOffClickHandler);
  });
  keys.forEach((key)=> {
    key.textContent = key.textContent.toLowerCase();
    key.removeEventListener('click', keyShiftOffClickHandler);
    key.removeEventListener('keyup', keyShiftOffClickHandler);
  });
};

// Функция слушатель переключения регистра по нажатию на SHIFT
const shiftClickHandler = (evtShift) => {
  evtShift.preventDefault();
  shiftKeys.forEach((key)=> key.classList.add('active'));
  rowNumberKeys.forEach((key, i)=>{
    key.textContent = shiftNumberLang[localStorage.getItem('lang')][i];
    key.addEventListener('click', keyShiftOffClickHandler);
    key.addEventListener('keyup', keyShiftOffClickHandler);
  });
  keys.forEach((key)=> {
    key.textContent = key.textContent.toUpperCase();
    key.addEventListener('click', keyShiftOffClickHandler);
    key.addEventListener('keyup', keyShiftOffClickHandler);
  });
  display.focus();
};

shiftKeys.forEach((shift)=> shift.addEventListener('click', shiftClickHandler));
shiftKeys.forEach((shift)=> shift.addEventListener('keydown', shiftClickHandler));

// Функция слушатель нажатия на стрелки вниз-вверх-влево-вправо
const arrowKeyClickHandler = (evtArrow) => {
  evtArrow.preventDefault();
  display.value +=  direction[evtArrow.target.dataset.code];
  // if(evtArrow.target.dataset.code === 'ArrowLeft') {
  //   if(display.value.length > 0) {
  //     display.selectionStart -= 1;
  //     display.selectionEnd -= 1;
  //   }
  // }
  //   if(evtArrow.target.dataset.code === 'ArrowRight') {
  //     if(display.value.length > display.selectionEnd) {
  //       display.selectionStart += 1;
  //     }
  // }
  display.focus();
};

display.addEventListener('click', ()=> {
  console.log(display.selectionStart);
});

arrows.forEach((arrow)=> {arrow.addEventListener('click', arrowKeyClickHandler)});

// Функция печатает значение символов виртуальной клавиатуры на дисплеи
const keyClickHandler = (evtKey) => {
  evtKey.preventDefault();
  display.value += evtKey.target.textContent;
  display.focus();
};

keys.forEach((key)=> {key.addEventListener('click', keyClickHandler)});
rowNumberKeys.forEach((key)=> {key.addEventListener('click', keyClickHandler)});

// Caps-Lock --------------------------------- // 

// Функция слушатель нажатия после активирования Caps Lock
const keyCapsLockOffClickHandler = () => {
  capsLock.classList.remove('caps-lock--flash');
  capsLock.classList.remove('active');
  capsLock.removeEventListener('click', keyCapsLockOffClickHandler);
  capsLock.removeEventListener('keydown', keyCapsLockOffClickHandler);
  keys.forEach((key)=> {
    key.textContent = key.textContent.toLowerCase();
  });
  display.focus();
};

// Функция слушатель переключения регистра по нажатию на Caps Lock
const capsLockClickHandler = (evtCapsLock) => {
  evtCapsLock.preventDefault();
  capsLock.classList.add('caps-lock--flash');
  capsLock.classList.add('active');
  capsLock.addEventListener('click', keyCapsLockOffClickHandler);
  capsLock.addEventListener('keydown', keyCapsLockOffClickHandler);
  keys.forEach((key)=> {
    key.textContent = key.textContent.toUpperCase();
  });
  display.focus();
};

capsLock.addEventListener('click', capsLockClickHandler);
capsLock.addEventListener('keydown', capsLockClickHandler);
