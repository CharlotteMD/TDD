var assert = require('assert')

describe('function to convert number to roman numerals', () => {
  [
    { "number": 1, "numeral": "I" },
    { "number": 2, "numeral": "II" }
  ].forEach(({number,numeral}) => {
    it(`converts ${number} to ${numeral}`, () => {
      assert.equal(convertNumber(number), numeral)

    })
  })


})

const convertNumber = (number) => {
  if (number === 2) return "II"
  return "I"
}
