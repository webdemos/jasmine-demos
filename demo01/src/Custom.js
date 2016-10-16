var MyApp = function() {
  var flag = false;

  var testAsync = function () {
    console.log('testAsync');
  };
  
  var callSomethingThatUsesAsync = function () {
    // Get a jQuery deferred
    var deferred = $.Deferred();

    this.testAsync()
        .done(function (args) {
          deferred.resolve(args);
        })
        .fail(function (args) {
          deferred.reject(args);
        });

       return deferred.promise();
  };

  var setFlag = function () {
    flag = true;
  };

  var getFlag = function () {
    return false;
  };

  var reallyImporatantProcess = function () {
    console.log('reallyImporatantProcess ');
  };

  var useFlagForSomething = function () {
    if (this.getFlag() === true) {
      return 'It was true';
    } else {
      this.reallyImporatantProcess();
      return 'It was false';
    }
  };

   return {
     flag: flag,
     setFlag: setFlag,
     getFlag: getFlag,
     reallyImporatantProcess : reallyImporatantProcess ,
     useFlagForSomething: useFlagForSomething,
     testAsync: testAsync,
     callSomethingThatUsesAsync: callSomethingThatUsesAsync
   };
};
