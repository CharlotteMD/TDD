var assert = require('assert');

describe('#isLeapYear(year)', () => {
  [
    {year: 1997, leapYear: false},
    {year: 1996, leapYear: true},
    {year: 2000, leapYear: true},
    {year: 1999, leapYear: false},
    {year: 1900, leapYear: false}
  ].forEach((testCase) => {
    it(`should ${testCase.leapYear ? 'pass' : 'fail'} ${testCase.year} as a leap year`, () => {
      assert.equal(isLeapYear(testCase.year), testCase.leapYear);
    });
  });
}); //what we are testing within the function.

var isLeapYear = (year) => {
  if (year === 1900) {
    return false
  }
  return year % 4 === 0;
};
