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
    function funcs (args) {
      for (var i = 0; i < arr.length; i++) {
        arguments[i] = fn(arr[i]);
      }
      return arguments;
    }
    return funcs;
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

  },

  curryIt: function(fn) {

  }
};
