const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let inputString = expr.split('');
    let separatedInput = [];
    let encodedCharactersArray = [];

    while (inputString.length > 0) {
        separatedInput.push(inputString.splice(0, 2).join(''));
    }

    for (i = 0; i < separatedInput.length; i++) {
        if (separatedInput[i] == 10) {
            separatedInput[i] = '.'
        } else if (separatedInput[i] == 11) {
            separatedInput[i] = '-'
        } else if (separatedInput[i] == 00) {
            separatedInput[i] = ''
        } else if (separatedInput[i] == '**') {
            separatedInput[i] = ' '
        }
    }

    while (separatedInput.length > 0) {
        encodedCharactersArray.push(separatedInput.splice(0, 5).join(''));
    }

    for (j = 0; j < encodedCharactersArray.length; j++) {
        encodedCharactersArray[j] = MORSE_TABLE[encodedCharactersArray[j]]
        if (encodedCharactersArray[j] == undefined) {
            encodedCharactersArray[j] = ' ';
        }
    }

    return encodedCharactersArray.join('')
}

module.exports = {
    decode
}