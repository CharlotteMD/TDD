var assert = require('assert')

describe('function to convert number to roman numerals', () => {
  [
    { "number": 1, "numeral": "I" },
    { "number": 2, "numeral": "II" },
    { "number": 3, "numeral": "III" },
    {"number": 4, "numeral":"IV"},
    {"number": 5, "numeral":"V"},
    {"number": 6, "numeral":"VI"},
    {"number": 7, "numeral":"VII"},
    {"number": 8, "numeral":"VIII"},
    {"number": 9, "numeral":"IX"},
    {"number": 10, "numeral":"X"},
    {"number": 13, "numeral":"XIII"},
    {"number": 14, "numeral":"XIV"},
    {"number": 19, "numeral":"XIX"},
    {"number": 20, "numeral":"XX"},
    {"number": 39, "numeral":"XXXIX"},
    {"number": 40, "numeral":"XL"},
    {"number": 41, "numeral":"XLI"},
    {"number": 50, "numeral":"L"},
    {"number": 86, "numeral":"LXXXVI"},
    {"number": 90, "numeral":"XC"},
    {"number": 100, "numeral":"C"}
  ].forEach(({number,numeral}) => {
    it(`converts ${number} to ${numeral}`, () => {
      assert.equal(convertNumber(number), numeral)

    })
  })


})

const convertNumber = (number) => {
  const numbersToSymbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C"
  }

  if (number === 0) {
    return "";
  }
  if (numbersToSymbols[number]) {
    return numbersToSymbols[number]
  }
  if (number < 4) {
    return numbersToSymbols[1] + convertNumber(number - 1);
  }
  if (number < 5) {
    return "IV" + convertNumber(number - 4);
  }
  if (number < 9) {
    return numbersToSymbols[5] + convertNumber(number-5);
  }
  if (number < 10) {
    return "IX" + convertNumber(number - 9);
  }
  if (number < 40) {
    return numbersToSymbols[10]  + convertNumber(number-10)
  }
  if (number < 50) {
    return "XL" + convertNumber(number-40);
  }
  if (number < 90) {
    return numbersToSymbols[50] + convertNumber(number-50);
  }
  if (number < 100) {
    return "XC" + convertNumber(number-90);
  }
  if (number === 100) {
    return numbersToSymbols[100];
  }

}
