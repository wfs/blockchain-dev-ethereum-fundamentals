/*########################
##    CONFIGURATION     ##
########################*/

// -- Step 1: Set up the appropriate configuration
var Web3 = require("web3");

//var EthereumTransaction = require("ethereumjs-tx")
var EthereumTransaction = require("@ethereumjs/tx");
//import { Transaction } from "@ethereumjs/tx";
//import Common from "@ethereumjs/common";
// https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/README.md
// https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/docs/README.md

var web3 = new Web3("HTTP://127.0.0.1:7545"); // 8545 if using ganache-cli

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = "0xD57155Af37851AeFA918A7A61bD8c6b140367324"; // "Account 0 ui" in Metamask
var receivingAddress = "0xa55B941a5afEF0dD05D1C6a67Be7F0Aa2a1d5F93"; // "Account 1 ui" in Metamask

// -- Step 3: Check the balances of each address
console.log("sendingAddress current balance ...");
web3.eth.getBalance(sendingAddress).then(console.log);
console.log("receivingAddress current balance ...");
web3.eth.getBalance(receivingAddress).then(console.log);

/*########################
## CREATE A TRANSACTION ##
########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
  nonce: 0,
  to: receivingAddress,
  gasPrice: 20000000,
  gasLimit: 30000,
  value: 100,
  data: "",
}; // transfer 100 wei

// -- Step 5: View the raw transaction
rawTransaction;

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// Note: They haven't changed because they need to be signed...

/*########################
## Sign the Transaction ##
########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender =
  "95ab81243a99d28b4b6cfbb0831bef0106028d8bf5d9dc2b5509e36b82252cfe"; // "Account 0 ui" in Metamask
var privateKeySenderHex = new Buffer.from(privateKeySender, "hex"); // https://nodejs.org/en/docs/guides/buffer-constructor-deprecation/
//var transaction = new EthereumTransaction(rawTransaction);
var tx = EthereumTransaction.Transaction.fromTxData(rawTransaction);
//const tx = transaction.fromTxData(rawTransaction);
//transaction.sign(privateKeySenderHex);
var signedTx = tx.sign(privateKeySenderHex);

/*#######################################
## Send the transaction to the network ##
#######################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
//var serializedTransaction = transaction.serialize();
var serializedTransaction = signedTx.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
