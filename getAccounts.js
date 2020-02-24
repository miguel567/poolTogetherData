const Web3 = require ('web3');

let run = () => {

var eth = new Web3 ('https://mainnet.infura.io/v3/b842c5076ac4499884e201d7948dc9d2');
/* console.log(eth); */
eth.filter()
var filter = eth.filter({fromBlock:'9523259', toBlock:'latest', address: "0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958"});
filter.get(function (err, transactions) {
  transactions.forEach(function (tx) {
    var txInfo = eth.getTransaction(tx.transactionHash);
    console.log('GAS ', txInfo.gas, ' FROM: ', txInfo.from, ' INPUT: ', txInfo.input );
/*     txInfo.gas;
    txInfo.from;
    txInfo.input; */
    

  });
});






}

run();
