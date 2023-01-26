const changeLetters = (words, letter) => {
    console.log(words);
    words.forEach((element) => {
        element.replaceAll(letter, 'X')
    });
    return words
}


console.log(changeLetters(['manzana', 'banana', 'mandarina', 'pantalla'], 'a'));