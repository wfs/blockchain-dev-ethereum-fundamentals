/*########################
##    CONFIGURATION     ##
########################*/

// -- Step 1: Set up the appropriate configuration
var Web3 = require("web3");

var EthereumTransaction = require("@ethereumjs/tx");
// https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/README.md
// https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/docs/README.md

var web3 = new Web3("HTTP://127.0.0.1:7545"); // 8545 if using ganache-cli

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = "0x7BF62A7e1fB091c6BE65ced3Dd7fBe60cb4f255f"; // "Account 0 ganache ui" in Metamask
var receivingAddress = "0x55A43129A63408f8Ea9EFb4E0dD15FEfdC83d5Cd"; // "Account 1 ganache ui" in Metamask

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
  "67cb5b9ff00af340fa02eebf1381378bbf7d71d52f0db6e6c47182e6a76e9c51"; // "Account 0 ganache ui" in Metamask
var privateKeySenderHex = new Buffer.from(privateKeySender, "hex"); // https://nodejs.org/en/docs/guides/buffer-constructor-deprecation/
var tx = EthereumTransaction.Transaction.fromTxData(rawTransaction);
var signedTx = tx.sign(privateKeySenderHex);

/*#######################################
## Send the transaction to the network ##
#######################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = signedTx.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
