var Web3 = require("web3");

var url = "HTTP://127.0.0.1:7545"; // 8545 if using ganache-cli
// var url = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"; // Mainnet via infura

var web3 = new Web3(url);

// =====

/** ganache ui */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// web3.eth.getAccounts().then((accounts) => {
//   console.log("account sender balance ...");
//   web3.eth.getBalance(accounts[0]).then(console.log); // wei
//   console.log("account receiver balance ...");
//   web3.eth.getBalance(accounts[1]).then(console.log); // wei
// });

// https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html?highlight=blocks#gettransactioncount
/** Get the numbers of transactions sent from this address. */
web3.eth
  .getTransactionCount("0xdD2b4b8FAAe82278462b9C758106E0dF90E92281")
  .then(console.log);

// =====

/** Mainnet via infura */
// https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html?highlight=getgasprice#getgasprice
/** Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price. */
// web3.eth.getGasPrice().then((gasPrice) => {
//   console.log(gasPrice);
// });

// https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html?highlight=blocks#getuncle
/** Returns a blocks uncle by a given uncle index position. */
// web3.eth.getUncle(500, 0).then(console.log);

// https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html?highlight=blocks#getblocktransactioncount
/** Returns the number of transaction in a given block. */
// web3.eth.getBlockTransactionCount("14001911").then(console.log);
