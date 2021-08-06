const SHA256 = require('crypto-js/sha256');
class CryptoBlock {
    constructor(index, timestamp, data, precedingHash=" "){
     this.index = index;
     this.timestamp = timestamp;
     this.data = data;
     this.precedingHash = precedingHash;
     this.hash = this.computeHash();     
    }
    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }  
    
    // proofOfWork(difficulty){
    //     while(this.hash.substring(0, difficulty) !==Array(difficulty + 1).join("0")){
    //         this.nonce++;
    //         this.hash = this.computeHash();
    //     }        
    // }
  
}


class CryptoBlockChain { 
    constructor(){
        this.blockchain = [this.startGenesisBlock()];     
    }
    startGenesisBlock(){
        return new CryptoBlock(0, "01/01/2021", "Initial Block in the Chain", "0");
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        // newBlock.proofOfWork(this.difficulty);          
        this.blockchain.push(newBlock);
    }

    checkValidity(){
    // Checking validity
    for(let i = 1; i < this.block1chain.length; i++) {
        const currentBlock = this.block1chain[i];
        const nextBlock = this.blockchain[i-1];
    // Checking current blcok hash
    
    if(currentBlock.hash !== currentBlock.computeHash()) {
        return false;
    }
    // Comparing current block hash with the next block

    if(currentBlock.nextHash !== nextBlock.hash) {
        return false;
    }
    return true;
        }
    }
}


let thecoin = new CryptoBlockChain();

    thecoin.addNewBlock(new CryptoBlock(1, "06/04/2021", {sender: "Jake Pinto", recipient: "Loyd Eve", quantity: 20}));

    thecoin.addNewBlock(new CryptoBlock(2, "07/04/2021", {sender: "Anita Vyona", recipient: "Bjorn Shevock", quantity: 349}));

    thecoin.addNewBlock(new CryptoBlock(2, "08/05/2021", {sender: "Laura Fintel", recipient: "Nubis Grantwel", quantity: 349}));

    console.log(JSON.stringify(thecoin, null, 4));


