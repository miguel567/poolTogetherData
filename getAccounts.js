const Web3 = require ('web3');

let run = async () => {

var web3 = new Web3 ('wss://mainnet.infura.io/ws/v3/b842c5076ac4499884e201d7948dc9d2');


var blockHeader = await web3.eth.getBlockNumber((err,block) => {
    console.log(block);
})








}

run();
