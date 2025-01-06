const readline = require('readline');
const Account = require('./actions/Account');
const Deposit = require('./actions/Deposit');
const Withdraw = require('./actions/Withdraw');
const Transfer = require('./actions/Transfer');
const TransactionHistory = require('./actions/TransactionHistory');
const Freeze = require('./actions/Freeze');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const account = new Account();
const deposit = new Deposit();
const withdraw = new Withdraw();
const transfer = new Transfer();
const transactionHistory = new TransactionHistory();
const freeze = new Freeze();

function mainMenu() {
    console.log(`
    1. Create Account
    2. Log In
    3. Exit
    `);
    rl.question('Choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter your name: ', (name) => {
                    account.createAccount(name);
                    mainMenu();
                });
                break;
            case '2':
                rl.question('Enter your account ID: ', (accountId) => {
                    if (!account.loadDatabase('./database/accounts.json')[accountId]) {
                        console.log('Invalid account ID.');
                        mainMenu();
                        return;
                    }
                    accountMenu(accountId);
                });
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log('Invalid choice. Try again.');
                mainMenu();
        }
    });
}

function accountMenu(accountId) {
    console.log(`
    1. Deposit
    2. Withdraw
    3. Transfer
    4. View Transactions
    5. Freeze Account
    6. Unfreeze Account
    7. Log Out
    `);
    rl.question('Choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter amount to deposit: ', (amount) => {
                    deposit.deposit(accountId, parseFloat(amount));
                    accountMenu(accountId);
                });
                break;
            case '2':
                rl.question('Enter amount to withdraw: ', (amount) => {
                    withdraw.withdraw(accountId, parseFloat(amount));
                    accountMenu(accountId);
                });
                break;
            case '3':
                rl.question('Enter recipient account ID: ', (recipientId) => {
                    rl.question('Enter amount to transfer: ', (amount) => {
                        transfer.transfer(accountId, recipientId, parseFloat(amount));
                        accountMenu(accountId);
                    });
                });
                break;
            case '4':
                transactionHistory.viewTransactions(accountId);
                accountMenu(accountId);
                break;
            case '5':
                freeze.freezeAccount(accountId);
                accountMenu(accountId);
                break;
            case '6':
                freeze.unfreezeAccount(accountId);
                accountMenu(accountId);
                break;
            case '7':
                mainMenu();
                break;
            default:
                console.log('Invalid choice. Try again.');
                accountMenu(accountId);
        }
    });
}

mainMenu();