const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {

    const blockChain = new Blockchain();
    it('should contain a `chain` Array instance', () => {
        expect(blockChain.chain instanceof Array).toBe(true);
    });

    it('should starts with the genesis block', () => {
        expect(blockChain.chain[0]).toEqual(Block.genesis());
    });

    it('should adds new block to the chain', () => {
        const newData = 'foo bar';
        blockChain.addBlock({ data: newData });

        expect(blockChain.chain[blockChain.chain.length - 1].data).toEqual(newData);
    });
});