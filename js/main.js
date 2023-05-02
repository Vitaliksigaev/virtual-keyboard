alert('v0.1.1 Привет всем. Основной функционал сделал. Допиливаю моменты c кликами и Uppercase. Если будут вопросы или что то не работает - пишите. Буду рад любой обратной связи. Сорри за дизайн. =)');
const body = document.querySelector('body');

const info = document.createElement('div');
info.className = 'info-container';
info.innerHTML = '<p> Переключение языков СТРЛ + АЛЬТ - клавиатура меняется.</p> <p>На инпуте стоит автофокус</p> <p>Делалась клава на маке.</p>';
body.append(info);

// let textarea = document.createElement('div');
// textarea.className = 'textarea';
// textarea.innerHTML = '<input class="text-input" type="text" autofocus ">';
// body.append(textarea);

const textarea2 = document.createElement('div');
textarea2.className = 'textarea2';
textarea2.innerHTML = '<textarea rows="15" cols="100" name="text" autofocus></textarea>';
body.append(textarea2);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard-container';
body.append(keyboard);

function clearKeyBoards() {
  keyboard.innerHTML = '';
}

const keyboardKeysEN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
  ['Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'ContextMenu', 'Control'],
];
const keyboardKeysRU = [
  [']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift'],
  ['Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'ContextMenu', 'Control'],
];

function changeInputValue(btn) {
  const inputValue = document.querySelector('textarea'); // textarea input
  if (btn.innerText.length === 1) {
    inputValue.value += btn.innerText;
    // console.log(inputValue.value);
    // console.log(btn.innerText);
  }
  if (btn.innerText === 'Backspace') {
    inputValue.value = inputValue.value.slice(0, -1);
  }
}

function createKeyboard(keyboardLanguage) {
  for (let i = 0; i < keyboardLanguage.length; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);

    for (let j = 0; j < keyboardLanguage[i].length; j += 1) {
      const btn = document.createElement('div');
      btn.className = 'keys';
      btn.innerText = keyboardLanguage[i][j];
      btn.setAttribute('keyname', keyboardLanguage[i][j]);
      btn.setAttribute('lowerCaseName', keyboardLanguage[i][j].toLowerCase());
      btn.addEventListener('click', () => {
        changeInputValue(btn);
        btn.classList.toggle('active-click');
      });

      if (keyboardLanguage[i][j].length > 1) {
        btn.className = ` keys keys_${keyboardLanguage[i][j].toLowerCase()}`;
      }
      row.append(btn);
    }
  }

  const keys = document.querySelectorAll('.keys');
  const space = document.querySelector('.keys_space');

  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
        keys[i].classList.add('active');
      }
      if (e.code === 'Space') {
        space.classList.add('active');
      }
      console.log(e.code);
    }
  });

  document.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
        keys[i].classList.remove('active');
      }
      if (e.code === 'Space') {
        space.classList.remove('active');
      }
    }
  });
}
createKeyboard(keyboardKeysEN);

function checkKeyboard() {
  const check = document.querySelectorAll('.keys');
  if (check[37].getAttribute('keyname') === 'L' || check[37].getAttribute('keyname') === 'l') {
    clearKeyBoards();
    createKeyboard(keyboardKeysRU);
  } else {
    clearKeyBoards();
    createKeyboard(keyboardKeysEN);
  }
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (const code of codes) {
      if (!pressed.has(code)) {
        return
      }
    }

    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => checkKeyboard(),
  'AltLeft',
  'ControlLeft',
);
