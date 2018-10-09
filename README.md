# BLOCKCHAIN
## what is a blockchain?
It is a **immutable** database.Data cant be edited or deleted,it can only be appended.
Block+Chain=BLOCKCHAIN where block is block of code and chain is pointer to those data/block.
## Types of networks
###### Centralised network
A network in which all clients make request to a *single server*.
###### Distributed network
A network in which data is stored in all the nodes of a network at a time and even if one
node fails to save the transaction an error message will be generated.
###### Decentralised network
A network in which if a data/transaction is saved in one node then it is treated as succesful one.
## Types of blockchain
###### public 
They have ledgers visible to everyone on the internet and anyone can verify and add a block of
transaction to the block chain.In this type of malicious activity can be spoteed  but the person
behind the malicious activity wont be caught.
Example- Bitcoin,Etherum.
###### private
All permissions are kept centralized to an organization.They allow only specific people in the
organization to verify and add transaction blocks but everyone in the internet is generally
allowed to view the blockchain.
Example- Multichain,Blockstack.
###### consortium
Its controlled by a consortium of members where only verified set of nodes have acces to 
the data  or block in the blockchain.
Example- Ripple,R3.
## concept of Hashes
###### Hash Functions
It converts data of any type of size to a fixed size.
###### properties of hash functions
1. Collision free - two different data sets wont have a same hash value.
2. Hiding - when data is hashed you cant find the actual data.
## Transaction flow in blockchain
1. someone requests a transaction
2. requested transaction is broadcasted to a peer-to-peer network consisting of nodes
3. the network of nodes validates the transaction and the users status using known algorithms.
4. once verified,the transaction is combined with other transactions to create a new block of data for the ledger
   which rom merkel root and is unalterable.
## Forks in blockchain
## Soft fork
It restricts the set of rules
Example - a soft fork is the one that restricts the block size limit from 1 MB to 500 KB, even though a 1MB block
which was previously considered valid. Full nodes that upgrade to support this soft fork will reject any blocks
larger than 500 KB after soft fork activates.


![screenshot 270](https://user-images.githubusercontent.com/30682653/46692574-464b5b00-cc25-11e8-85a4-025fdccbf67a.png)
   
   
## Hard fork
It loosens the set of rules
Example - increases the blocksize limit from 1 MB to 2 MB, even though a 2 MB block which was previously considered invalid.
Full nodes that upgrade to support this hard fork will accept any block upto 2 MB in size after the activation of hard fork.
###### proof of work
a piece of data which is difficult to produce but easy for others to verify and which satisfies certain requirements
###### Job of Miner
He is given a merkel root and a nonce along with a target hash, a miner has to make some computations and find a certain
value from merkel root and nonce which should be less than or equal to target hash.
Note - a nonce is a random number taken to solve a proof of work and we need to start our prediction setting nonce as 0
and later incrementing its value
a new block is generally added in a bitcoin network after every 10 minutes.
###### proof of stake
creator of a new block is choosen depending on the wealth possesed by him  called stake.
![screenshot 271](https://user-images.githubusercontent.com/30682653/46692662-81e62500-cc25-11e8-82c3-0ef37d2409a8.png)
## Etherum
1. It was conceptualized by vitalik buterin in november 2013
2. it is turing complete i.e; loops can be used
3. it is a platform to develop Dapp.
4. value token of ethereum blockchain is ether


![screenshot 274](https://user-images.githubusercontent.com/30682653/46694018-2d44a900-cc29-11e8-9d97-8406ec85604c.png) 
###### gas
Everytime a contract is executed, ethereum consumes tokens which is termed as gas to run the computation
minimum gas limit is 21000
###### estimating transaction costs
its based on two factors
1. GasUsed = total gas consumed by the transaction
2. GasPrice = its the price in ether for 1 unit of gas specified in the transaction
Note - Gas is used only because the value of ether is not constant.
Total cost = GasUsed * GasPrice 

![screenshot 275](https://user-images.githubusercontent.com/30682653/46694110-6d0b9080-cc29-11e8-9ff1-4b85895b8ef3.png)
## Solidity
1. its a contact-oriented, high-level language whose syntax is similar to javascript
2. it is statistically typed which supports inheritance,libraries and comlex user-defined types among other features.
3. it compiles instructions into bytecode so that they can then be read by the network
4. it is turing complete.
refer this - https://github.com/srijithsrk/solidity
###### Smart Contract
its a code which runs between two people and it also avoids middleman
you can refer some smart contracts here - https://github.com/srijithsrk/Smart-Contracts
###### ERC20
https://github.com/srijithsrk/ERC20
https://github.com/srijithsrk/my_cryptocurrency



