describe('Registration Numbers', () => {
    it('should be able to get correct data format', () => {
        assert.equal(makeChanges().validateNumber("ca0890"), "CA0890");
    });
    it('Should be able to give out an error for empty value', () => {
        assert.equal(makeChanges().validateNumber(" ca0890"), "Please insert registration number");
    });
    //validate radio button now
    it('Should accept the reg num for cape town', () => {
        var fun = makeChanges();
        fun.validateNumber("cj212");
        assert.equal(fun.validateRadio("cape town"), "CA");
    });
    it('Should accept the reg num for paarl', () => {
        var fun = makeChanges();
        fun.validateNumber("ca212");
        assert.equal(fun.validateRadio("paarl"), "CJ");
    });
    it('Should accept the reg num for stellenbosch', () => {
        var fun = makeChanges();
        fun.validateNumber("cl212");
        assert.equal(fun.validateRadio("stellenbosch"), "CL");
    });
    //return all
    it('Should accept the reg num for all', () => {
        var fun = makeChanges();
        fun.validateNumber("cl212");
        assert.equal(fun.validateRadio("George"), "All");
    });
});