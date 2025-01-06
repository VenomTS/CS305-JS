const Account = require('./Account');

class TransactionHistory extends Account {
    viewTransactions(accountId) {
        const transactions = this.loadDatabase(this.transactionsFile);
        if (!transactions[accountId] || transactions[accountId].length === 0) {
            console.log('No transactions found.');
            return;
        }

        console.log('Transaction History:');
        transactions[accountId].forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction.type} - $${transaction.amount} - ${transaction.date}`);
        });
    }
}

module.exports = TransactionHistory;