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
    0: "",
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C"
  }

  if (numbersToSymbols[number]) {
    return numbersToSymbols[number]
  }
  
    const keys = Object.keys(numbersToSymbols);
    const higherIndex = keys.findIndex(value => value > number )
    const key = keys[higherIndex - 1];
    return numbersToSymbols[key] + convertNumber(number - key);


}
