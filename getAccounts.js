const Web3 = require ('web3');

let run = () => {

var web3 = new Web3 ('https://mainnet.infura.io/v3/b842c5076ac4499884e201d7948dc9d2');
/* console.log(eth); */
var filter = web3.eth.filter({toBlock:'latest'});

filter.watch(function (error, log) {
 console.log(log); //  {"address":"0x0000000000000000000000000000000000000000", "data":"0x0000000000000000000000000000000000000000000000000000000000000000", ...}
});

// get all past logs again.
var myResults = filter.get(function(error, logs){  });
// stops and uninstalls the filter
filter.stopWatching();






}

run();
