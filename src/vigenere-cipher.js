const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkArguments(...args) {
    if (args.some(arg => typeof arg !== 'string') || args.some(arg => !arg.trim())) {
      throw new Error('Incorrect arguments!');
    }
  }

  processMessage(message, key, mode) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyCharCode = this.alphabet.indexOf(keyChar);
        const shift = mode === 'encrypt' ? keyCharCode : -keyCharCode;
        const charIndex = this.alphabet.indexOf(char);
        const newIndex = (charIndex + shift + this.alphabet.length) % this.alphabet.length;
        result += this.alphabet[newIndex];
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    return this.processMessage(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key);
    return this.processMessage(encryptedMessage, key, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
