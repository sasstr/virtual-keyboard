export const createKeyboard = () => {
  return `<div class="keyboard">
  <div class="keyboard__row keyboard__row--0">
    <button class="keyboard__key function-key row-0" data-code="Backquote" type="button">§</button>
    <button class="keyboard__key row-0" data-code="Digit1" type="button">1</button>
    <button class="keyboard__key row-0" data-code="Digit2" type="button">2</button>
    <button class="keyboard__key row-0" data-code="Digit3" type="button">3</button>
    <button class="keyboard__key row-0" data-code="Digit4" type="button">4</button>
    <button class="keyboard__key row-0" data-code="Digit5" type="button">5</button>
    <button class="keyboard__key row-0" data-code="Digit6" type="button">6</button>
    <button class="keyboard__key row-0" data-code="Digit7" type="button">7</button>
    <button class="keyboard__key row-0" data-code="Digit8" type="button">8</button>
    <button class="keyboard__key row-0" data-code="Digit9" type="button">9</button>
    <button class="keyboard__key row-0" data-code="Digit0" type="button">0</button>
    <button class="keyboard__key row-0" data-code="Minus" type="button">-</button>
    <button class="keyboard__key row-0" data-code="Equal" type="button">=</button>
    <button class="keyboard__key function-key backspace" data-code="Backspace" type="button">⌫ Backspace</button>
  </div>
  <div class="keyboard__row  keyboard__row--1">
    <button class="keyboard__key function-key tab" data-code="Tab" type="button">Tab ↹</button>
    <button class="keyboard__key letter-key" data-code="KeyQ" type="button">й</button>
    <button class="keyboard__key letter-key" data-code="KeyW" type="button">ц</button>
    <button class="keyboard__key letter-key" data-code="KeyE" type="button">у</button>
    <button class="keyboard__key letter-key" data-code="KeyR" type="button">к</button>
    <button class="keyboard__key letter-key" data-code="KeyT" type="button">е</button>
    <button class="keyboard__key letter-key" data-code="KeyY" type="button">н</button>
    <button class="keyboard__key letter-key" data-code="KeyU" type="button">г</button>
    <button class="keyboard__key letter-key" data-code="KeyI" type="button">ш</button>
    <button class="keyboard__key letter-key" data-code="KeyO" type="button">щ</button>
    <button class="keyboard__key letter-key" data-code="KeyP" type="button">з</button>
    <button class="keyboard__key letter-key" data-code="BracketLeft" type="button">х</button>
    <button class="keyboard__key letter-key" data-code="BracketRight" type="button">ъ</button>
    <button class="keyboard__key function-key delete" data-code="Delete" type="button">Del ⌦</button>
  </div>
  <div class="keyboard__row  keyboard__row--2">
    <button class="keyboard__key function-key caps-lock" data-code="CapsLock" type="button">Caps Lock ⇪</button>
    <button class="keyboard__key letter-key" data-code="KeyA" type="button">ф</button>
    <button class="keyboard__key letter-key" data-code="KeyS" type="button">ы</button>
    <button class="keyboard__key letter-key" data-code="KeyD" type="button">в</button>
    <button class="keyboard__key letter-key" data-code="KeyF" type="button">а</button>
    <button class="keyboard__key letter-key" data-code="KeyG" type="button">п</button>
    <button class="keyboard__key letter-key" data-code="KeyH" type="button">р</button>
    <button class="keyboard__key letter-key" data-code="KeyJ" type="button">о</button>
    <button class="keyboard__key letter-key" data-code="KeyK" type="button">л</button>
    <button class="keyboard__key letter-key" data-code="KeyL" type="button">д</button>
    <button class="keyboard__key letter-key" data-code="Semicolon" type="button">ж</button>
    <button class="keyboard__key letter-key" data-code="Quote" type="button">э</button>
    <button class="keyboard__key letter-key" data-code="Backslash" type="button">ё</button>
    <button class="keyboard__key function-key enter" data-code="Enter" type="button">Enter ↵</button>
  </div>
  <div class="keyboard__row  keyboard__row--3">
    <button class="keyboard__key function-key shift-left" data-code="ShiftLeft" type="button">Shift ⇧</button>
    <button class="keyboard__key letter-key" data-code="IntlBackslash" type="button">]</button> 
    <button class="keyboard__key letter-key" data-code="KeyZ" type="button">я</button>
    <button class="keyboard__key letter-key" data-code="KeyX" type="button">ч</button>
    <button class="keyboard__key letter-key" data-code="KeyC" type="button">с</button>
    <button class="keyboard__key letter-key" data-code="KeyV" type="button">м</button>
    <button class="keyboard__key letter-key" data-code="KeyB" type="button">и</button>
    <button class="keyboard__key letter-key" data-code="KeyN" type="button">т</button>
    <button class="keyboard__key letter-key" data-code="KeyM" type="button">ь</button>
    <button class="keyboard__key letter-key" data-code="Comma" type="button">б</button>
    <button class="keyboard__key letter-key" data-code="Period" type="button">ю</button>
    <button class="keyboard__key" data-code="Slash" type="button">/</button>
    <button class="keyboard__key function-key up" data-code="ArrowUp" type="button">↑</button>
    <button class="keyboard__key function-key shift-right" data-code="ShiftRight" type="button">Shift ⇧</button>
  </div>
  <div class="keyboard__row  keyboard__row--4">
    <button class="keyboard__key function-key ctrl" data-code="ControlLeft" type="button">^<br>Ctrl</button>
    <button class="keyboard__key function-key option-left" data-code="AltLeft" type="button">⌥<br>Option</button>
    <button class="keyboard__key function-key command-left" data-code="MetaLeft" type="button">⌘<br>Command</button>
    <button class="keyboard__key function-key space" data-code="Space" type="button">Space</button>
    <button class="keyboard__key function-key command-right" data-code="MetaRight" type="button">⌘<br>Command</button>
    <button class="keyboard__key function-key option-right" data-code="AltRight" type="button">⌥<br>Option</button>
    <button class="keyboard__key function-key left" data-code="ArrowLeft" type="button">←</button>
    <button class="keyboard__key function-key down" data-code="ArrowDown" type="button">↓</button>
    <button class="keyboard__key function-key right" data-code="ArrowRight" type="button">→</button>
  </div>
</div>`;
};
