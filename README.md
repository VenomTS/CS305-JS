# Banking System

---

## Requirements:

- **Node.js** - Download from [nodejs.org](https://nodejs.org/en) 
- **Code Editor** - Any editor of your choice. [Visual Studio Code](https://code.visualstudio.com/) is recommended.
- 
## How to Run the Program

-Download all provided files
-Open your terminal/command prompt.
-Navigate to the location where you want to save the project.
-Create a new directory by running:
  mkdir banking-system
  cd banking-system
-Create the following folders, and insert the downloaded files in the directory following this structure:

banking-system/
├── actions/
│   ├── Account.js
│   ├── Deposit.js
│   ├── Freeze.js
│   ├── Transfer.js
│   ├── TransactionHistory.js
│   ├── Withdraw.js
├── database/
│   ├── accounts.json
│   ├── transactions.json
├── index.js

-Use the following command to start the application:
  node index.js
## Usage:

After running the program, the terminal will display options to either create a new account or log in to an existing one. To perform actions like depositing, withdrawing, freezing/unfreezing, or transferring funds, an account must be created. Each action is presented by a number on the terminal; to select an action, simply enter the corresponding number.

## Goals:

This project aims to create a realistic simulation of a banking system, similar to what users might experience at an ATM or in an online banking app.

- Create and manage accounts stored in a database.
- Simulate realistic banking transactions.
- Track all previous transactions.
- Enable freezing and unfreezing of accounts.

## Features:

- **Account Management**  
  Users can create accounts, which are stored in a database, and manage them. Every change is reflected in the database to ensure data consistency.

- **Simulated Banking Transactions**  
  Allows users to perform realistic bank transactions, including deposits, withdrawals, and fund transfers.

- **Transaction History**  
  Users can view a history of all their successful transactions, including details like the amount and, for transfers, the recipient's information.

- **Account Freezing/Unfreezing**  
  Users can freeze or unfreeze their accounts as needed, adding a layer of security.

---



