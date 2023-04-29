let body = document.querySelector('body');
// let userLang = navigator.language || navigator.userLanguage; 
// console.log(userLang);
//ru-RU


let textarea = document.createElement('div');
textarea.className = 'textarea';
textarea.innerHTML = '<input class="text" type="text" autofocus>';
body.append(textarea)



let keyboard = document.createElement('div');
keyboard.className = 'keyboard-container';
body.append(keyboard)

let keyboardKeys = [
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', `'`, 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
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
            btn.setAttribute('lowerCaseName', keyboardLanguage[i][j].toLowerCase())
    
            if( keyboardLanguage[i][j].length > 1) {
                btn.className = ` keys keys_${keyboardLanguage[i][j].toLowerCase()}`;
            }
            row.append(btn)
        }
    }
}
createKeyboard(keyboardKeys);



let keys = document.querySelectorAll('.keys');
let space = document.querySelector('.keys_space');
let ctrl = document.querySelector('.keys_control');

ctrl.addEventListener('click', function(){
    console.log('ctrl click');
    createKeyboard(keyboardKeysRU);

})

console.log(keys)

// function createRow() {
//     let row = document.createElement('div');
//     row.className = 'row';
//     return row
// }


document.addEventListener('keydown', function(e){
    for( let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            console.log(keys[i]);
            keys[i].classList.add('active');
        }
        if(e.code == 'Space') {
            space.classList.add('active');
        }
    }    
    // console.log(keyboardKeys);
    console.log(e );    
})

document.addEventListener('keyup', function(e){
    for( let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            console.log(keys[i]);
            keys[i].classList.remove('active');
        }
    }    
    // console.log(keyboardKeys);
    // console.log(e.key);    
})
