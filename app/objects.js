exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var resultArray = [];
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var keyValues = Object.entries(obj).length;
    for (var i = 0; i < keyValues; i++) {
      var keyValStr = keys[i] + ": " + values[i];
      resultArray.push(keyValStr);
    }
    return resultArray;
  }
};
