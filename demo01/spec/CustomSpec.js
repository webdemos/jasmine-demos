describe('Mocking calls with Jasmine[https://volaresystems.com/blog/post/2014/12/10/Mocking-calls-with-Jasmine]', function () {
    describe('Testing spies', function () {
        var jasmineHelpers = new JasmineHelpers();
        it('Should skip over the function being spied on', function () {
            // Arrange
            var myApp = new MyApp();
            spyOn(myApp, 'setFlag');
            myApp.setFlag();

            // Assert
            expect(myApp.flag).toBeFalsy();
        });
        it('Should replace the return value of function being spied on', function () {
            // Arrange
            var myApp = new MyApp();
            spyOn(myApp, 'getFlag').and.returnValue(true);

            // act
            var result = myApp.useFlagForSomething();

            // Assert
            expect(result).toEqual('It was true');
        });
        it('Should replace the return value of function being spied on', function () {
            // Arrange
            var myApp = new MyApp();
            // even though the reallyImporatantProcess have been called, but won't be executed
            //spyOn(myApp, 'reallyImporatantProcess');
            // This will call the real reallyImporatantProcess method
            spyOn(myApp, 'reallyImporatantProcess').and.callThrough();

            // act
            var result = myApp.useFlagForSomething();

            // Assert
            expect(myApp.reallyImporatantProcess).toHaveBeenCalled();
            expect(result).toEqual('It was false');
        });
        fit('Should spy on async calls and use helpers to mock success/failure', function () {
            // Arrange
            var myApp = new MyApp();
            spyOn(myApp, 'testAsync').and.callFake(function () {
                return jasmineHelpers.deferredSuccess('The async call succeeded');
                //return jasmineHelpers.deferredFailure('The async call failed');
            });

            // act
            var result = myApp.callSomethingThatUsesAsync()
                .always(function (result) {
                    // Assert
                    expect(result).toEqual('The async call succeeded');
                    //expect(result).toEqual('The async call failed');
                });
        });
    });
});