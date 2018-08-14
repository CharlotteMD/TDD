var isLeapYear = require('./LeapYear');
var assert = require('assert');

describe('#isLeapYear(year)', () => {
  [
    {year: 1997, leapYear: false},
    {year: 1996, leapYear: true},
    {year: 2000, leapYear: true},
    {year: 1999, leapYear: false},
    {year: 1900, leapYear: false},
    {year: 1800, leapYear: false},
    {year: 2400, leapYear: true}
  ].forEach((testCase) => {
    it(`should ${testCase.leapYear ? 'pass' : 'fail'} ${testCase.year} as a leap year`, () => {
      assert.equal(isLeapYear(testCase.year), testCase.leapYear);
    });
  });
}); //what we are testing within the function.
