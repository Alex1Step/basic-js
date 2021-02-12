// const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.condition = isDirect
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.square = [];
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        this.square.push(row);
    }
  }

  getSquare() {
    return this.square;
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    // Длина финальной строки
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += firstString[it];
        it++;
    }
    let finishResultString = "";
    let counter = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (this.alphabet.indexOf(secondString[i].toUpperCase())<0) {
          finishResultString += secondString[i].toUpperCase()
          counter += 1
          continue
        }
      finishResultString += resultString[i - counter]
    }
    return finishResultString;
}

  encrypt(message, key) {
    if (!arguments.length) throw new Error ('Error');
    let encryptMessage = "";
        // Дублируем ключ до длины сообщения
        let newKey = this.repeatString(key, message);
        // Генерируем квадрат Виженера
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
          if (this.alphabet.indexOf(message[it].toUpperCase())<0) {
            encryptMessage += message[it]
          } else {
            // Индекс строки раный символу сообщения
            let i = this.alphabet.indexOf(message[it].toUpperCase());
            // Индекс колонки раный символу ключа
            let j = this.alphabet.indexOf(newKey[it].toUpperCase());
            // Зашифрованный символ равный пересечению индекса строки и колонки
            encryptMessage += this.square[i][j];
          }
        }

        if (this.condition === false) {
          return encryptMessage.split('').reverse().join('')
        } else {
          return encryptMessage;
        }
  }   

  decrypt(message, key) {
    if (!arguments.length) throw new Error ('Error');
    let decryptMessage = "";
        let newKey = this.repeatString(key, message);
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
          if (this.alphabet.indexOf(message[it].toUpperCase())<0) {
            decryptMessage += message[it]
          } else {
            // Берем символ ключа и ищем индекс строки с данным символом
            let i = this.alphabet.indexOf(newKey[it].toUpperCase());
            let j = this.square[i].indexOf(message[it].toUpperCase());
            decryptMessage += this.alphabet[j];
          }
        }

        if (this.condition === false) {
          return decryptMessage.split('').reverse().join('')
        } else {
          return decryptMessage;
        }
  }
}

module.exports = VigenereCipheringMachine;