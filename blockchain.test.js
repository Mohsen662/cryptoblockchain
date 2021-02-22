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

    describe('isValidChain()', () => {
       describe('when the chain is not start with the genesis block', () => {
           it('returns false', () => {
               blockChain.chain[0] = { data: 'fake-genesis' };
           });
        });
        describe('when the chain is start with the genesis block and has multiple blocks', () => {
            describe('and a lastHash reference has changed', () => {
               it('returns false', () => {});
            });

            describe('and a chain contains a block with an invalid field', () => {
                it('returns false', () => {});
            });

            describe('and a chain does not contain any invalid blocks', () => {
                it('returns true', () => {

                });
            });
        });
    });
});