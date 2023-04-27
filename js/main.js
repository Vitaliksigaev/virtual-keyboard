let body = document.querySelector('body');

let textarea = document.createElement('div');
textarea.className = 'textarea';
textarea.innerHTML = '<input type="text" size="40">';
body.append(textarea)



let keyboard = document.createElement('div');
keyboard.className = 'keyboard-container';
body.append(keyboard)

let keyboardKeys = [
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\|'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Fn', 'Ctrl']
]

for( let i = 0; i < keyboardKeys.length; i++ ) {

    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row)

    for (let j = 0; j < keyboardKeys[i].length; j++) {
        let btn = document.createElement('div');
        btn.className = 'keys';
        btn.innerText = keyboardKeys[i][j];
        btn.addEventListener('click', function() {
            console.log(keyboardKeys[i][j]);
        })
        row.append(btn)
    }
}

function createRow() {
    let row = document.createElement('div');
    row.className = 'row';
    return row
}