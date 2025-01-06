const Account = require('./Account');

class Deposit extends Account {
    deposit(accountId, amount) {
        const accounts = this.loadDatabase(this.accountsFile);
        if (!accounts[accountId]) return console.log('Account not found.');
        if (accounts[accountId].frozen) return console.log('Account is frozen.');

        accounts[accountId].balance += amount;
        this.saveDatabase(this.accountsFile, accounts);

        const transactions = this.loadDatabase(this.transactionsFile);
        transactions[accountId].push({
            type: 'Deposit',
            amount,
            date: new Date(),
        });
        this.saveDatabase(this.transactionsFile, transactions);

        console.log(`Deposited $${amount}. New balance: $${accounts[accountId].balance}`);
    }
}

module.exports = Deposit;