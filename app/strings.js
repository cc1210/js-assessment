exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var strArray = str.split('');
    var obj = {};
    var reducedString = "";
    function findConsecutiveLetters (sequence) {
      var conseqArray = [];
      var iterator = strArray.values();
      var j = 0;
      while (j < strArray.length) {
        iterator.next().value;
      }
    }
    findConsecutiveLetters(str);
    function addNTimes(amount, letter) {
      i = 0;
      while (i < amount) {
        reducedString += letter;
        i++;
      }
    }
    function subArrayManipulation(array, ind) {
      array.forEach(function(element, index) {
        if (obj[element + ind] === undefined) {
          obj[element + ind] = [index];
        } else {
          obj[element + ind].push(index);
        }
      });
    }
    Object.keys(obj).forEach(function(key) {
      if (obj[key].length > amount) {
        addNTimes(amount, key);
      } else {
        reducedString += key;
      }

    });
    return reducedString;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
