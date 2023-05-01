import "./render.js";
import "./flash-keys.js";
import "./change-language.js";
import "./function-keys.js";

// Служебная инфо в консоль
document.addEventListener( "keydown", (evt) => {
  let key = evt.key;
  let code = evt.code;
  console.log("Code - " + code);
  console.log("Key - " + key);
});
console.log(localStorage.getItem('lang'));
