const SHA256 = require('crypto-js/sha256');  
// its used for importing header files in the form of sha256
class Block 
{
	constructor(index, timestamp, data, previousHash = '')
	{
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;  //amout :2 initially kept static
		this.previousHash = previousHash;
		this,hash = this.calculateHash();
	}

	calculateHash()  // this method calculates the hash value of the blocks
	{         
		return SHA256(this.index + this.timestamp +JSON.stringify(this.data) + this.previousHash).toString(); // to convert the data from integer to string
	}
}

class Blockchain 
{        
	constructor()
	{
		this.chain =  [
		this.createGenesisBlock()
		];
	}
	createGenesisBlock()
	{    
		//its the first block containing no previous hash value
		return new Block(0, "08/09/2018","Genesis Block","0");
		                //index,timestamp,data,previous HashValue

	}
	getLatestBlock()
	{ 
		//hash of this block is added to the next new block as previous blocks hash
		return this.chain[this.chain.length-1];
	}
	addBlock(newBlock)
	{
		newBlock.previousHash = this.getLatestBlock().hash; // to get hash value from previous blocks hash
		newBlock.hash = newBlock.calculateHash();

		this.chain.push(newBlock);  //to push blocks into the blockchain
	}
	isChainValid(){
		for(let i = 1; i < this.chain.length;i++){
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i-1];

			if(currentBlock.hash !== currentBlock.calculateHash()){
				return false;

			}
			if(currentBlock.previousHash !== previousBlock.hash){
				return false;
			}
		}
		return true;
	}


	let myCoin = new Blockchain(); //OOP'S application 

	myCoin.addBlock(new Block(1, "09/09/2018" , {amount:4}));  //two blocks will be created with these parameters and will be pushed to blockchain 
	myCoin.addBlock(new Block(2, "10/09/2018" , {amount:8}));


console.log(JSON.stringify(myCoin, null ,4));   //displays output

}

// the output of this code till here will showcase a genesis block along with its other two blocks with the static data given by us in it.

