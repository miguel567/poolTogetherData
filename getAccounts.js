const Web3 = require ('web3');
const fs = require('fs');



let run = async () => {

    /* Connect to WEB3 */
var web3 = new Web3 ('wss://mainnet.infura.io/ws/v3/b842c5076ac4499884e201d7948dc9d2');
/* print out current block */
web3.eth.getBlockNumber((err,block) => {
    console.log(block);
})

/* Get logs fromBLock until current block for contract address */
var options = {
    fromBlock: 9577730,
    toBlock: 'latest', 
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef']

}

 web3.eth.getPastLogs(options).then((logs)=>{
     /* var transactions = JSON.stringify(logs); */
     console.log(logs);
/* Store Logs in output file */
/*     fs.writeFile('output.json', JSON.stringify(logs) ,function (err) {
        if (err) return console.log(err);
        console.log('output created.');
      });
 */
/* REQUEST TX DATA from TX hash from BLOCK */
/*       for( var tx in logs) {
          
          var txCount = new Map();
          web3.eth.getTransaction(logs[tx].transactionHash).then((txData) =>{
            if(txData.s = '0x234409440000000000000000000000000000000000000000000000015af1d78b58c40000'){
                if(!txCount.has(txData.from)){
                    txCount.set(txData.from,1);

                } else {

                    txCount.set(txData.from,txCount.get(txData.from)+1);
                }
                console.log(txCount.size, ' from: ', txData.from, ' Deposit count: ', txCount.get(txData.from));
            }


          }).catch(e => console.log(e));

      } */
 }).catch(e => console.log(e));


 /* web3.eth.getTransaction('0x41432e56d4a5dc30482a1f16a12bc52025c2e544982fa9707d869d31159c9074').then(console.log).catch(e => console.log(e)); */

}

run();
