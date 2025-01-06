const Account = require('./Account');

class Transfer extends Account {
    transfer(senderId, recipientId, amount) {
        const accounts = this.loadDatabase(this.accountsFile);
        if (!accounts[senderId] || !accounts[recipientId]) return console.log('Invalid account ID(s).');
        if (accounts[senderId].frozen || accounts[recipientId].frozen) return console.log('One or both accounts are frozen.');
        if (accounts[senderId].balance < amount) return console.log('Insufficient balance.');

        accounts[senderId].balance -= amount;
        accounts[recipientId].balance += amount;
        this.saveDatabase(this.accountsFile, accounts);

        const transactions = this.loadDatabase(this.transactionsFile);
        transactions[senderId].push({
            type: 'Transfer Out',
            amount,
            recipient: recipientId,
            date: new Date(),
        });
        transactions[recipientId].push({
            type: 'Transfer In',
            amount,
            sender: senderId,
            date: new Date(),
        });
        this.saveDatabase(this.transactionsFile, transactions);

        console.log(`Transferred $${amount} to ${recipientId}.`);
    }
}

module.exports = Transfer;