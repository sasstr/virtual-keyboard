import { createTitle } from "./title.js";
import { createDisplay } from "./display.js";
import { createDescription } from "./description.js";
import { createKeyboard } from "./keyboard.js";

const templates = [createTitle, createDisplay, createDescription, createKeyboard];
const body = document.body;
const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

/** Функция добавления на страницу разметки htmlElement-а
 *
 * @param {HTMLElement} container контейнер в который будет вставлен htmlElement
 * @param {string} template разметка htmlElement-а
 * @param {string} place место куда надо вставить разметку htmlElement-a
 *  по умолчанию значение 'beforeend'
 */
const render = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

templates.forEach((createTemplate)=> render(body, createTemplate()) );

const display = body.querySelector('.display__textarea');
const spaceKey = body.querySelector('.space');
const spaceCode = '\u00A0';

const spaceClickHandler = (evt) => {
  evt.preventDefault();
  display.textContent += spaceCode;
};

spaceKey.addEventListener('click', spaceClickHandler);

document.addEventListener( "keydown", (evt) => {
  let key = evt.key;
  let code = evt.code;
  console.log("Code - " + code);
  console.log("Key - " + key);
});
