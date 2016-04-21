describe('an object that represents a loan', function(){
    it('provides a total of the fees', function(){

        //***
        // start with the first expect and then progressively show them more expects
        //***

        const data1 = {
            name: 'my loan',
            fees: [ 100, 150, 200 ]
        }
        const loan1 = new Loan(data1);

        expect(loan1.totalFees()).to.be.eq(450);

        const data2 = {
            name: 'my loan',
            fees: [ 100, 150, 200 ],
            feesApplied: false
        }
        const loan2 = new Loan(data2);

        expect(loan12.totalFees()).to.be.eq(0);


        const data3 = {
            name: 'my loan',
            fees: [ 100, 150, 200 ],
            transactionFee: 500,
            feesApplied: false
        }
        const loan3 = new Loan(data3);

        expect(loan3.totalFees()).to.be.eq(500);


        const data4 = {
            name: 'my loan',
            fees: [ 100, 150, 200 ],
            transactionFee: 500
        }
        const loan4 = new Loan(data4);

        expect(loan4.totalFees()).to.be.eq(950);

    });
});