var Web3 = require("web3");

var url = "HTTP://127.0.0.1:7545"; // 8545 if using ganache-cli

var web3 = new Web3(url);

//web3.eth.getAccounts().then(accounts => console.log(accounts));
// sender account ...
//web3.eth.getAccounts().then((accounts) => console.log(accounts[0]));
// receiver account ...
//web3.eth.getAccounts().then((accounts) => console.log(accounts[1]));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
web3.eth.getAccounts().then((accounts) => {
  console.log("account sender balance ...");
  web3.eth.getBalance(accounts[0]).then(console.log); // wei
  console.log("account receiver balance ...");
  web3.eth.getBalance(accounts[1]).then(console.log); // wei
});
