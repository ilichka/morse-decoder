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
    let letter;
    let slovo='';
    expr = expr.split('');
    for (let j = 0; j < expr.length;) {
        letter = expr.slice(j, j + 10);
        for (let i = 0; i < letter.length; i++) {
            if (letter[i] !== 0) {
                letter = letter.join('');
                letter = letter
                    .replace(/\*/g, 'q')
                    .replace(/11/g, '-')
                    .replace(/10/g, '.')
                    .replace(/00/g, ' ')
                    .replace(/qqqqqqqqqq/g, ' space')
                    .replace(/ +/g, ' ').trim();
                break;
            }
        }
        if (letter === 'space') {
            slovo += ' ';
        } else {
            if (letter !== undefined) {
                letter = MORSE_TABLE[letter];
                slovo += letter;
            }
        }
        j += 10;
    }
    return slovo;
}

module.exports = {
    decode
}