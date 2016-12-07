function isLetter(s) {
    var re = '[а-яА-ЯA-Za-z]+';
    return s.search(re) != -1;
}
function reverse(str) {
    var reversed, word, letter;
    var symbols, special;
    var wordList, wordListReverse = [], wordReverse;
    wordList = str.split(' ');
    for (var i = 0; i < wordList.length; i++) {
        word = wordList[i];
        symbols = [];
        special = [];
        for (var j = 0; j < word.length; j++) {
            letter = word.charAt(j);
            if (isLetter(letter)) {
                symbols.push(j);
            }
            else {
                special.push(j);
            }
        }
        symbols = symbols.reverse();
        wordReverse = '';
        for (var j = 0, sy = 0, sp = 0; j < word.length; j++) {
            if (special.indexOf(j) == -1) {
                wordReverse += word.charAt(symbols[sy++]);
            }
            else {
                wordReverse += word.charAt(special[sp++]);
            }
        }
        wordListReverse.push(wordReverse);
    }
    return wordListReverse.join(' ');
}
var list, reversed = [];
list = ['s1tar3t 2 hellow', 's1ta$%r3t 2 hel^low', 's1tar3t 2   low5'];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var e = list_1[_i];
    reversed.push(reverse(e));
}
console.log(reversed);
