const Block = require('./block');
const Blockchain = require('./blockchain');

//let block = new Block(0, 'awuita de uwu');

const blockchain = new Blockchain('Hello World')

for(let i = 2; i < 10; i++){
    blockchain.addBlock(`Data del ${i}o Bloque`);
}

console.log(blockchain);