# Banking System

---

## Requirements:

- **Node.js** - Download from [nodejs.org](https://nodejs.org/en) 
- **Code Editor** - Any editor of your choice. [Visual Studio Code](https://code.visualstudio.com/) is recommended.
  
## How to Run the Program

Download all provided files<br/>
Open your terminal/command prompt.<br/>
Navigate to the location where you want to save the project.<br/>
Create a new directory by running:<br/>
&emsp;mkdir banking-system<br/>
&emsp;cd banking-system<br/>
Create the following folders, and insert the downloaded files in the directory following this structure:<br/>

banking-system/<br/>
-actions/<br/>
----Account.js<br/>
----Deposit.js<br/>
----Freeze.js<br/>
----Transfer.js<br/>
----TransactionHistory.js<br/>
----Withdraw.js<br/>
-database/<br/>
----accounts.json<br/>
----transactions.json<br/>
-index.js

-Use the following command to start the application:<br/>
&emsp;node index.js
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



