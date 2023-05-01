import createTitle from './title.js';
import createDisplay from './display.js';
import createDescription from './description.js';
import createKeyboard from './keyboard.js';

const templates = [createTitle, createDisplay, createDescription, createKeyboard];
const { body } = document;
const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};
// Функция добавляет шаблон в разметку в указанное место
const render = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

templates.forEach((createTemplate) => render(body, createTemplate()));
