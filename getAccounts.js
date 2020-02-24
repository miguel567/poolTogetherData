const Web3 = require ('web3');

let run = async () => {

var web3 = new Web3 ('wss://mainnet.infura.io/ws/v3/b842c5076ac4499884e201d7948dc9d2');
/* console.log(eth); */
web3.eth.getBlockNumber((err,block) => {
    console.log(block);
})


/* var subscription = web3.eth.subscribe('logs', {
    address: '0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958',
}, function(error, result){
    if (!error)
        console.log('results: ', result);
})
.on("connected", function(subscriptionId){
    console.log('subscription ID : ', subscriptionId);
})
.on("data", function(log){
    console.log(log);
})
.on("changed", function(log){
});
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
}); */
var options = {
    fromBlock: 9523259,
    toBlock: 'latest', 
    address: ['0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958']

}
 web3.eth.getPastLogs(options).then(console.log).catch(e => console.log(e));

}

run();
