import { lang } from "./change-language.js";

const body = document.body;
const display = body.querySelector('.display__textarea');
const spaceKey = body.querySelector('.space');
const backspaceKey = body.querySelector('.backspace');
const deleteKey = body.querySelector('.delete');
const tabKey = body.querySelector('.tab');
const capsLock = body.querySelector('.caps-lock');
const enterKey = body.querySelector('.enter');
const shiftKeys = body.querySelectorAll('.shift');
const optionKeys = body.querySelectorAll('.option');
const keys = body.querySelectorAll('.letter-key');
const shiftOffNumber = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const shiftEngArr = ['±', '!','@','#','$','%','^', '&', '*','(',')','_','+'];
const shiftRusArr = ['<', '!','№','"','%',':',',', '.', ';','(',')','_','+'];
const rowNumberKeys = body.querySelectorAll('.row-0');
const spaceCode = '\u00A0';
const shiftNumberLang = {
  'rus': shiftRusArr,
  'eng': shiftEngArr,
};
const optionNumberEngArr = ['§', '¡', '™', '£', '¢', '∞', '§', '¶', '•', 'ª', 'º', '-', '≠'];
const optionNumberRusArr = ['§', '!', '@', '#', '$', '%', '^', '&', '*', '{','} ','-', '»'];
const optionNumberLang = {
  'rus': optionNumberRusArr,
  'eng': optionNumberEngArr,
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
const optionLangKeys = {
  'rus': rusOptionKeys,
  'eng': engOptionKeys,
};
const arrows = body.querySelectorAll('.arrow');
// Стрелки вниз-вверх
const direction = {
  'ArrowDown': '↓',
  'ArrowUp': '↑',
};
// Возвращает клавиатуру в начальное состояние. С учетом текущего языка
const initKeyboard = () => {
  keys.forEach((key, i)=>{ 
    key.textContent = lang[localStorage.getItem('lang')][i];
    key.classList.remove('active');
  });
  rowNumberKeys.forEach((keyNumber, i)=>{
    keyNumber.textContent = shiftOffNumber[i];
    keyNumber.classList.remove('active');
  });
};

const insertSymbolOnPosition = (symbol) => {
  if(display.value.length > display.selectionEnd){
    const start = display.value.slice(0, display.selectionEnd);
    const end = display.value.slice(display.selectionStart);
    display.value = start + symbol + end;
    display.setSelectionRange(start.length+1, start.length+1);
    display.focus();
  } else {
    display.value += symbol;
    display.focus();
  }
};

// Функция слушатель нажатия на пробел Space
const spaceClickHandler = (evtSpace) => {
  evtSpace.preventDefault();
  insertSymbolOnPosition(spaceCode);
};

// Функция слушатель нажатия на Tab
spaceKey.addEventListener('click', spaceClickHandler);

const tabClickHandler = (evtTab) => {
  evtTab.preventDefault();
  insertSymbolOnPosition('\t');
};

tabKey.addEventListener('click', tabClickHandler);

// Функция слушатель кнопки backspace
const backspaceClickHandler =  (evtBackspace) => {
  if(display.value.length > 0) {
    evtBackspace.preventDefault();
    const start = display.value.slice(0, display.selectionEnd).slice(0, -1);
    const end = display.value.slice(display.selectionStart);
    display.value = start + end;
    display.setSelectionRange(start.length, start.length);
    display.focus();
  }
};

backspaceKey.addEventListener('click', backspaceClickHandler);

// Функция слушатель кнопки Delete
const deleteClickHandler = (evtDel) => {
  evtDel.preventDefault();
  if(display.value.length > display.selectionEnd){
    const start = display.value.slice(0, display.selectionEnd);
    const end = display.value.slice(display.selectionStart).slice(1);
    display.value = start + end;
    display.setSelectionRange(start.length, start.length);
    display.focus();
  }
};

deleteKey.addEventListener('click', deleteClickHandler);

// Функция слушатель нажатия на enter
const enterClickHandler = (evtEnter) => {
  evtEnter.preventDefault();
  insertSymbolOnPosition('\n');
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
  if(capsLock.classList.contains('active')){
    capsLock.classList.remove('active', 'caps-lock--flash');
  }
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
  if(evtArrow.target.dataset.code === 'ArrowDown' || evtArrow.target.dataset.code === 'ArrowUp') {
    if(display.value.length >= display.selectionEnd){
      insertSymbolOnPosition(direction[evtArrow.target.dataset.code]);
    }
  }

  if(evtArrow.target.dataset.code === 'ArrowLeft') {
    if(display.value.length > 0) {
      display.selectionStart -= 1;
      display.selectionEnd -= 1;
    }
  }
    if(evtArrow.target.dataset.code === 'ArrowRight') {
      if(display.value.length > display.selectionEnd) {
        display.selectionStart += 1;
      }
  }
  display.focus();
};

arrows.forEach((arrow)=> {arrow.addEventListener('click', arrowKeyClickHandler)});

// Функция печатает значение символов виртуальной клавиатуры на дисплеи
const keyClickHandler = (evtKey) => {
  evtKey.preventDefault();
  insertSymbolOnPosition(evtKey.target.textContent);
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
  if(shiftKeys[0].classList.contains('active') || shiftKeys[1].classList.contains('active')){
    shiftKeys.forEach((key)=> key.classList.remove('active'));
  }
  evtCapsLock.preventDefault();
  capsLock.classList.add('caps-lock--flash');
  capsLock.classList.add('active');
  capsLock.addEventListener('click', keyCapsLockOffClickHandler);
  capsLock.addEventListener('keydown', keyCapsLockOffClickHandler);
  keys.forEach((key)=> {
    key.textContent = key.textContent.toUpperCase();
    key.removeEventListener('click', keyShiftOffClickHandler);
    key.removeEventListener('keyup', keyShiftOffClickHandler);
  });
  display.focus();
};

capsLock.addEventListener('click', capsLockClickHandler);
capsLock.addEventListener('keydown', capsLockClickHandler);

// ======================================================= //
// Функция слушатель нажатия после активирования Option Alt
const keyOptionOffClickHandler = () => {
  optionKeys.forEach((key)=> key.classList.remove('active'));
  rowNumberKeys.forEach((key, i)=>{
    key.textContent = shiftOffNumber[i];
    key.removeEventListener('click', keyOptionOffClickHandler);
    key.removeEventListener('keyup', keyOptionOffClickHandler);
  });
  keys.forEach((key, i)=> {
    key.textContent = lang[localStorage.getItem('lang')][i];
    key.removeEventListener('click', keyOptionOffClickHandler);
    key.removeEventListener('keyup', keyOptionOffClickHandler);
  });
};

// Функция слушатель переключения регистра по нажатию на Option/ Alt
const optionClickHandler = (evtShift) => {
  evtShift.preventDefault();
  optionKeys.forEach((key)=> key.classList.add('active'));
  rowNumberKeys.forEach((key, i)=>{
    key.textContent = optionNumberLang[localStorage.getItem('lang')][i];
    key.addEventListener('click', keyOptionOffClickHandler);
    key.addEventListener('keyup', keyOptionOffClickHandler);
  });
  keys.forEach((key, i)=> {
    key.textContent = optionLangKeys[localStorage.getItem('lang')][i];
    key.addEventListener('click', keyOptionOffClickHandler);
    key.addEventListener('keyup', keyOptionOffClickHandler);
  });
  display.focus();
};

optionKeys.forEach((option)=> option.addEventListener('click', optionClickHandler));
optionKeys.forEach((option)=> option.addEventListener('keydown', optionClickHandler));
