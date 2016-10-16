fdescribe('Outer suites', function () {

    beforeAll(function() {
        // runs before all tests in this block
        console.log('outer beforeAll');
    });

    afterAll(function() {
        // runs after all tests in this block
        console.log('outer afterAll')
    });

    beforeEach(function() {
        // this.name = 'Larry';
        // runs before each test in this block
        console.log('outer beforeEach')
    });

    afterEach(function() {
        // runs after each test in this block
        console.log('outer afterEach')
    });

    it('outer spec', function () {
        console.log('outer spec');
        // console.log( this.name);
        expect(true).toBeTruthy();
    });
    describe('Inner suites', function () {

        beforeAll(function() {
            // runs before all tests in this block
            console.log('inner beforeAll');
        });

        afterAll(function() {
            // runs after all tests in this block
            console.log('inner afterAll')
        });

        beforeEach(function() {
            // runs before each test in this block
            console.log('inner beforeEach')
        });

        afterEach(function() {
            // runs after each test in this block
            console.log('inner afterEach')
        });

        it('inner spec', function () {
            console.log('inner spec');
            expect(true).toBeTruthy();
        });
    });


});