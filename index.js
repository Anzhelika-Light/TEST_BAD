// const originalstr = The Tao gave birth to machine language.  Machine language gave birth
// to the assembler.
// The assembler gave birth to the compiler.  Now there are ten thousand
// languages.
// Each language has its purpose, however humble.  Each language
// expresses the Yin and Yang of software.  Each language has its place within
// the Tao.
// But do not program in COBOL if you can avoid it.
//         -- Geoffrey James, "The Tao of Programming"

const str = "The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, 'The Tao of Programming'";

const findFirstUniqueLetter = (str) => {
//Прибираємо зайві символи
const words = str
    .replace(/\-+/, '')
    .replaceAll('.', '')
    .replaceAll(',', '')
    .replaceAll('"', '')
    .replaceAll("'", '')
    .toLowerCase()
    .trim();

console.log(words);

// Створюємо масив слів з рядка 
const wordsArr = words.split(' ');
console.log(wordsArr);
// Прибираємо з нього пусті рядки, отримаємо кінцевий масив слів
const NewWordsArr = [];
for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i] !== '') {
        NewWordsArr.push(wordsArr[i]);
    }
}
console.log(NewWordsArr);

// Прибираємо повтори, залишаємо лише унікальні слова
const uniqueWordsArr = NewWordsArr.filter(
    (word, index, array) => array.indexOf(word) === index
);

console.log(uniqueWordsArr);

// Шукаємо першу унікальну літеру в кожному слові, додаємо в масив літер
const lettersArr = [];
let letter = '';
let lettersInEachWordArr = [];
for (const word of uniqueWordsArr) {

    lettersInEachWordArr = word.split('').filter(
        (letter, index, array) => array.indexOf(letter) === index
    );
    lettersArr.push(lettersInEachWordArr[0]);
}
console.log(lettersArr);

// Шукаємо першу унікальну літеру в масиві літер 
const uniqueLettersArr = lettersArr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
console.log(uniqueLettersArr[0]);
return uniqueLettersArr[0];
}

findFirstUniqueLetter(str);