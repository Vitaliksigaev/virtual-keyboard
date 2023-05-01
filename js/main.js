alert('Привет всем. Основной функционал сделал. Допиливаю моменты c кликами и Uppercase. Если будут вопросы или что то не работает - пишите. Буду рад любой обратной связи. Сорри за дизайн. =)')
let body = document.querySelector('body');

let info = document.createElement('div');
info.className = 'info-container'
info.innerHTML= "<p> Переключение языков СТРЛ + АЛЬТ - клавиатура меняется.</p> <p>На инпуте стоит автофокус</p> <p>Делалась клава на маке.</p>";
body.append(info);

let textarea = document.createElement('div');
textarea.className = 'textarea';
textarea.innerHTML = '<input class="text-input" type="text" autofocus ">';
body.append(textarea);



let keyboard = document.createElement('div');
keyboard.className = 'keyboard-container';
body.append(keyboard);


function clearKeyBoards () {
    let test = document.querySelector('.keyboard-container');
    keyboard.innerHTML = '';
}

let keyboardKeysEN = [
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'ContextMenu', 'Control']
]
let keyboardKeysRU = [
    [ ']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', `э`, 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Shift'],
    ['Control', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'ContextMenu', 'Control']
]

function createKeyboard(keyboardLanguage) {
    for( let i = 0; i < keyboardLanguage.length; i++ ) {
        let row = document.createElement('div');
        row.className = 'row';
        keyboard.append(row)
    
        for (let j = 0; j < keyboardLanguage[i].length; j++) {
            let btn = document.createElement('div');
            btn.className = 'keys';
            btn.innerText = keyboardLanguage[i][j];
            btn.setAttribute('keyname', keyboardLanguage[i][j]);
            btn.setAttribute('lowerCaseName', keyboardLanguage[i][j].toLowerCase());
            btn.addEventListener('click', function(){
                changeInputValue(btn);
                btn.classList.toggle('active-click')
            })
    
            if(keyboardLanguage[i][j].length > 1) {
                btn.className = ` keys keys_${keyboardLanguage[i][j].toLowerCase()}`;
            }
            row.append(btn)
        }
    };

    let keys = document.querySelectorAll('.keys');
    let space = document.querySelector('.keys_space');
    let ctrl = document.querySelector('.keys_control');

    document.addEventListener('keydown', function(e){
        let inputValue = document.querySelector('input');

        for( let i = 0; i < keys.length; i++) {
            if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.add('active');
            }
            if(e.code == 'Space') {
                space.classList.add('active');
            }
        }
    })

    document.addEventListener('keyup', function(e){
        for( let i = 0; i < keys.length; i++) {
            if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.remove('active');
            }
            if(e.code == 'Space') {
                space.classList.remove('active');
            }
        }
    })
}
createKeyboard(keyboardKeysEN);

function checkKeyboard () {
    let check = document.querySelectorAll('.keys');
    if(check[37].getAttribute('keyname') == 'L' || check[37].getAttribute('keyname') == 'l') {
        clearKeyBoards();
        createKeyboard(keyboardKeysRU);
    } else {
        clearKeyBoards();
        createKeyboard(keyboardKeysEN); 
    }
}

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);
      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }

      pressed.clear();
      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });
  }

  runOnKeys(
    () => checkKeyboard (),
    "AltLeft",
    "ControlLeft"
  );


function changeInputValue(btn) {
    let inputValue = document.querySelector('input');
    if(btn.innerText.length == 1) {
        inputValue.value += btn.innerText;
        console.log(inputValue.value);
        console.log(btn.innerText);
    }
    if(btn.innerText == 'Backspace') {
        inputValue.value = inputValue.value.slice(0, -1);
    }

}