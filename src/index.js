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
    let numLetters = (expr.length) / 10;
    //console.log('numLetters: '+numLetters);
    let exprDec = ''; 
    let letterDecI = '';
    for (let i=0; i < numLetters; i++) {          
        let letterI = expr.substr(10*i, 10);
        //console.log('letterI: '+letterI);
        let letterMorseI = '';
        for (let j=0; j<10; j+=2) {
            if (letterI[j] === '*') { 
                letterMorseI = letterMorseI + ' '; 
                j += 10;
            }
            while (letterI[j] === '0') { ++j }
            if ((letterI[j] === '1') && (letterI[j+1] === '0')) { letterMorseI = letterMorseI + '.' }
            else if ((letterI[j] === '1') && (letterI[j+1] === '1')) { letterMorseI = letterMorseI + '-' }                     
        }
        //console.log('letterMorseI : '+ letterMorseI); 
        if (letterMorseI === ' ') {
            exprDec = exprDec + letterMorseI;            
        } else {
            let key = letterMorseI; 
            let letterDecI = MORSE_TABLE[key]; 
            console.log('letterDecI: '+letterDecI);
            exprDec = exprDec + letterDecI;
        }                  
    }
    return exprDec;
}

//onsole.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'));

module.exports = {
    decode
}