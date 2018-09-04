// Write some code to transfer a specified amount of money from one bank account (the payer) to another (the payee)
var assert = require('assert');
describe('transferMoneyTo', () => {
  it('increases payee bank account by £50 on payment transfer from another person', () => {
    let alex = new BankAccount(50)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(50, robin)
    assert.equal(robin.balance, 50)
  })

  it('increases payee bank account by £30 on payment transfer from another person', () => {
    let alex = new BankAccount(50)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(30, robin)
    assert.equal(robin.balance, 30)
  })

  it('decreases payer\'s bank account by £30 on payment transfer to another person', () => {
    let alex = new BankAccount(50)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(30, robin)
    assert.equal(alex.balance, 20)
  })

  it('does not decrease payer\'s bank balance when they transfer £30 to payee but have insufficient funds in their bank account', () => {
    let alex = new BankAccount(20)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(30, robin)
    assert.equal(alex.balance, 20)
  })

  it('does not decrease payer\'s bank balance when they transfer £600 to payee but have insufficient funds in their bank account', () => {
    let alex = new BankAccount(50)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(600, robin)
    assert.equal(alex.balance, 50)
  })

  it('does not increase payee\'s bank balance when payer transfers £30 to payee but has insufficient funds in their bank account', () => {
    let alex = new BankAccount(10)
    let robin = new BankAccount(0)
    alex.transferMoneyTo(30, robin)
    assert.equal(robin.balance, 0)
  })

  it('throws an error when payer tries to transfer £30 and they have insufficient funds in their bank account', () => {
    let alex = new BankAccount(20)
    let robin = new BankAccount(0)
    assert.throws(() => alex.transferMoneyTo(30, robin), Error)
  })


})


class BankAccount {
  constructor(balance) {
    this.balance = balance
  }

  transferMoneyTo(amount, to) {
    if (this.balance >= amount) {
      to.balance += amount
      this.balance -= amount
    }
  }

}




// Write some code to keep a record of the transfer for both bank accounts in a transaction history
// Write some code to query a bank account's transaction history for any bank transfers to or from a specific account
