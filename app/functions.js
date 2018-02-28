exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var result = fn(arr[0], arr[1], arr[2]);
    return result;
  },

  speak: function(fn, obj) {
    var result = fn.call(obj);
    return result;
  },

  functionFunction: function(str) {
    var sentence = str + ", ";
    function sentenceBuilder (endStr) {
      return sentence + endStr;
    }
    return sentenceBuilder;
  },

  makeClosures: function(arr, fn) {
    function funcReturn () {
      var array = [];
      var args = Array.prototype.slice.call(arguments);
      for (var i = 0; i < args.length; i++) {
        array.push(fn.bind(null, args[i]));
      }
      return array;
    }
    return funcReturn.apply(null, arr);
  },

  partial: function(fn, str1, str2) {
    var boundFunc = fn.bind(null, str1, str2);
    return boundFunc;
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var firstArgs = Array.prototype.slice.call(arguments, 1);
    function secondParam() {
      var secondArgs = Array.prototype.slice.call(arguments);
      var partialFunc = fn.bind(null);
      var combinedArgs = firstArgs.concat(secondArgs);
      return partialFunc.apply(null, combinedArgs);
    }
    return secondParam;
  },

  curryIt: function(fn) {
    var array = [];
    function curriedFuncFirstParam(param) {
      array.push(param);
      function curriedFuncSecondParam(param) {
        array.push(param);
        function curriedFuncThirdParam(param) {
          array.push(param);
          return fn.apply(null, array);
        }
        return curriedFuncThirdParam;
      }
      return curriedFuncSecondParam;
    }
    return curriedFuncFirstParam;
  }
};
