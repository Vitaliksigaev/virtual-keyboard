let body = document.querySelector('body');

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

for( let i = 0; i < keyboardKeys.length; i++ ) {

    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row)

    for (let j = 0; j < keyboardKeys[i].length; j++) {
        let btn = document.createElement('div');
        btn.className = 'keys';
        btn.innerText = keyboardKeys[i][j];
        btn.setAttribute('keyname', keyboardKeys[i][j]);
        btn.setAttribute('lowerCaseName', keyboardKeys[i][j].toLowerCase() )
        // btn.addEventListener('click', function() {
        //     console.log(keyboardKeys[i][j]);
        //     if(e.keys == keyboardKeys[i][j].getAttribute('keyname')) {
        //         console.log(keys)
        //     } 
        // })    

        row.append(btn)
    }
}

let keys = document.querySelectorAll('.keys');
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
            keys[i].classList.toggle('btn-animated');
        }
    }
    
    console.log(keyboardKeys);
    console.log(e.key);

    
})