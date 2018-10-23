// Write some code to transfer a specified amount of money from one bank account (the payer) to another (the payee)
var assert = require('assert');
describe('BankAccount', () => {

  it('bank account has an ID', () => {
      const alexBankAccount = new BankAccount(50)
      assert.notEqual(alexBankAccount.id, undefined)
  })

  describe('transferMoneyTo', () => {
    it('increases payee bank account by £50 on payment transfer from another person', () => {
      let alex = new BankAccount(50)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(50, robin)
      assert.equal(robin.balance, 50)
      assert.equal(result, true)
    })

    it('increases payee bank account by £30 on payment transfer from another person', () => {
      let alex = new BankAccount(50)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(30, robin)
      assert.equal(robin.balance, 30)
      assert.equal(result, true)
    })

    it('decreases payer\'s bank account by £30 on payment transfer to another person', () => {
      let alex = new BankAccount(50)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(30, robin)
      assert.equal(alex.balance, 20)
      assert.equal(result, true)
    })

    it('does not decrease payer\'s bank balance when they transfer £30 to payee but have insufficient funds in their bank account', () => {
      let alex = new BankAccount(20)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(30, robin)
      assert.equal(alex.balance, 20)
      assert.equal(result, false)
    })

    it('does not decrease payer\'s bank balance when they transfer £600 to payee but have insufficient funds in their bank account', () => {
      let alex = new BankAccount(50)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(600, robin)
      assert.equal(alex.balance, 50)
      assert.equal(result, false)
    })

    it('does not increase payee\'s bank balance when payer transfers £30 to payee but has insufficient funds in their bank account', () => {
      let alex = new BankAccount(10)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(30, robin)
      assert.equal(robin.balance, 0)
      assert.equal(result, false)
    })

    it('returns false when payer tries to transfer £30 and they have insufficient funds in their bank account', () => {
      let alex = new BankAccount(20)
      let robin = new BankAccount(0)
      const result = alex.transferMoneyTo(30, robin)
      assert.equal(result, false)
    })
  })

  describe('keeping transaction history', () => {
    it('has an empty transaction history when a new bank account is created', () => {
      const alexBankAccount = new BankAccount(20)
      assert.deepEqual(alexBankAccount.transactionHistory, [])
    })

    it('sender has one transaction when a transfer is made to someone else', () => {
      const alexBankAccount = new BankAccount(20)
      const robinBankAccount = new BankAccount(10)
      alexBankAccount.transferMoneyTo(10, robinBankAccount)
      assert.deepEqual(alexBankAccount.transactionHistory, [{ amount: -10, sender: alexBankAccount.id, receiver: robinBankAccount.id }])
    })

    it('receiver has one transaction when a transfer is made to them', () => {
      const alexBankAccount = new BankAccount(20)
      const robinBankAccount = new BankAccount(10)
      alexBankAccount.transferMoneyTo(10, robinBankAccount)
      assert.deepEqual(robinBankAccount.transactionHistory, [{ amount: 10, sender: alexBankAccount.id, receiver: robinBankAccount.id }])
    })
  })

  describe('querying transaction history', () => {
    it('finds a transaction with Alex\'s ID in Robins Bank Account transaction history when looking specifically for Alex', () =>{
      const alexBankAccount = new BankAccount(20)
      const robinBankAccount = new BankAccount(20)
      alexBankAccount.transactionHistory.push({amount: -10, sender: alexBankAccount.id, receiver: robinBankAccount.id})
      robinBankAccount.transactionHistory.push({amount: 10, sender: alexBankAccount.id, receiver: robinBankAccount.id})

      result = robinBankAccount.queryTransactionHistory(alexBankAccount)
      assert.deepEqual(result, [{amount: 10, sender: alexBankAccount.id, receiver: robinBankAccount.id}] )
    })

    it('finds two transactions with Alex\'s ID in Robins Bank Account transaction history when looking specifically for Alex', () =>{
      const alexBankAccount = new BankAccount(100)
      const robinBankAccount = new BankAccount(20)
      alexBankAccount.transactionHistory.push({amount: -30, sender: alexBankAccount.id, receiver: robinBankAccount.id})
      alexBankAccount.transactionHistory.push({amount: -10, sender: alexBankAccount.id, receiver: robinBankAccount.id})
      robinBankAccount.transactionHistory.push({amount: 30, sender: alexBankAccount.id, receiver: robinBankAccount.id})
      robinBankAccount.transactionHistory.push({amount: 10, sender: alexBankAccount.id, receiver: robinBankAccount.id})

      result = robinBankAccount.queryTransactionHistory(alexBankAccount)
      assert.deepEqual(result, [{amount: 30, sender: alexBankAccount.id, receiver: robinBankAccount.id}, {amount: 10, sender: alexBankAccount.id, receiver: robinBankAccount.id}])
    })


  })
})

class BankAccount {
  constructor(balance) {
    this.id = Math.random().toString(36).substr(2, 9)
    this.balance = balance
    this.transactionHistory = []
  }

  transferMoneyTo(amount, to) {
    if (this.balance >= amount) {
      to.balance += amount
      this.balance -= amount
      this.recordTransaction(amount,to)
      return true
    } else {
      return false
    }
  }

  recordTransaction(amount, to) {
    this.transactionHistory.push({ amount: -amount, sender: this.id, receiver: to.id })
    to.transactionHistory.push({ amount: amount, sender: this.id, receiver: to.id })
  }

  queryTransactionHistory(user) {
    const transactions = this.transactionHistory.map((transaction) => {
      if (transaction.sender === user.id || transaction.receiver === user.id) {
        return transaction
      }
    })
    return transactions
  }
}



// Write some code to keep a record of the transfer for both bank accounts in a transaction history
// extract id creation to a function and test it
// Write some code to query a bank account's transaction history for any bank transfers to or from a specific account
