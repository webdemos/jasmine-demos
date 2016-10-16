var JasmineHelpers = function () {

  var deferredSuccess = function (args) {
    var d = $.Deferred();
    d.resolve(args);
	// If we use $q, seems just return d.promise is OK.
    return d.promise();
  };

  var deferredFailure = function (args) {
    var d = $.Deferred();
    d.reject(args);
    return d.promise();
  };

  return {
    deferredSuccess: deferredSuccess,
    deferredFailure: deferredFailure
  };

}