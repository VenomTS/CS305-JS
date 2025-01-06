const fs = require('fs');

class Account {
    constructor() {
        this.accountsFile = './database/accounts.json';
        this.transactionsFile = './database/transactions.json';
    }

    loadDatabase(file) {
        if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({}));
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    }

    saveDatabase(file, data) {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }

    generateAccountId() {
        return `AC${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    }

    createAccount(name) {
        const accounts = this.loadDatabase(this.accountsFile);
        const accountId = this.generateAccountId();
        accounts[accountId] = {
            name,
            balance: 0,
            frozen: false,
        };
        this.saveDatabase(this.accountsFile, accounts);

        const transactions = this.loadDatabase(this.transactionsFile);
        transactions[accountId] = [];
        this.saveDatabase(this.transactionsFile, transactions);

        console.log(`Account created! Your account ID is: ${accountId}`);
        return accountId;
    }
}

module.exports = Account;