const Account = require('./Account');

class Freeze extends Account {
    freezeAccount(accountId) {
        const accounts = this.loadDatabase(this.accountsFile);
        if (!accounts[accountId]) return console.log('Account not found.');

        accounts[accountId].frozen = true;
        this.saveDatabase(this.accountsFile, accounts);
        console.log('Account has been frozen.');
    }

    unfreezeAccount(accountId) {
        const accounts = this.loadDatabase(this.accountsFile);
        if (!accounts[accountId]) return console.log('Account not found.');

        accounts[accountId].frozen = false;
        this.saveDatabase(this.accountsFile, accounts);
        console.log('Account has been unfrozen.');
    }
}

module.exports = Freeze;
