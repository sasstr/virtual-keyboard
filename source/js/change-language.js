// Переключения языка ru-eng
if(!localStorage.getItem('lang')){
  localStorage.setItem('lang', 'rus');
};

const lettersKey = document.querySelectorAll('.letter-key');
const engKeys = [
  'q','w','e','r','t','y','u','i','o','p','[', ']', 
  'a','s','d','f','g','h','j','k','l',';','"','\\',
  '`','z','x','c','v','b','n','m',',','.','/'
];
const rusKeys = [
  'й','ц','у','к','е','н','г','ш','щ','з','х','ъ',
  'ф','ы','в','а','п','р','о','л','д','ж','э','ё',
  ']','я','ч','с','м','и','т','ь','б','ю','/'
];

const lang = {
  'rus': rusKeys,
  'eng': engKeys,
};
// Функция сохраняет состояние выбранного языка при перезагрузки страницы
const setLang = () => {
  lettersKey.forEach((key, i)=>{ key.textContent = lang[localStorage.getItem('lang')][i]});
};
setLang();

const changeLang = (evt) => {
  if (evt.shiftKey && evt.ctrlKey) {
    if(localStorage.getItem('lang') === 'rus'){
      lettersKey.forEach((key, i)=>{ key.textContent = engKeys[i]})
      localStorage.setItem('lang', 'eng')
    } else {
      lettersKey.forEach((key, i)=>{ key.textContent = rusKeys[i]})
      localStorage.setItem('lang', 'rus')
    }
  }
};

window.addEventListener('keydown', changeLang);