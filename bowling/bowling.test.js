// Write a BowlingGame object with methods roll(pins) and getScore().
//
// This will be the game engine which follows the rules of bowling:
//
// The game consists of 10 frames, in each frame the player has the ability to knock down 10 pins.
// The score for the frame is the total number of pins knocked down + bonuses for strikes and spares.
// A spare is when the player knocks down all 10 pins in 2 tries. The bonus for a spare is the next roll.
// A strike is when the player knocks down all 10 pins in 1 try. The bonus is the next 2 rolls.
// In the tenth frame a player who rolls a spare / strike gets an extra roll(s) to complete the frame.
// No more than 3 rolls can be rolled in the 10th frame.

var assert = require('assert');

// at the start of game, score = 0
describe('get score', () => {

  it('at start, score = 0', () => {
    const game = new BowlingGame();
    const score = game.getScore();
    assert.equal(score, 0)
  })
  it('hit 1 pin, score = 1', () => {
    const game = new BowlingGame();
    game.roll(1);
    const score = game.getScore();
    assert.equal(score, 1)
  })
})



// if roll = 1 pin hit, score = 1

class BowlingGame {
  constructor() {
    this.score = 0;
  }

    getScore() {
      return this.score;
  }

    roll() {
      this.score++;
    }
}
