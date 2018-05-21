exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var strArray = str.split('');
    var obj = {};
    var reducedString = "";
    var conseqArray = [];
    var counter = 0;
    function findConsecutiveLetters (sequence) {
      var strIterator = sequence.values();
      var currentLetter = strIterator.next().value;
      while (sequence.length > 1) {
        var nextLetter = strIterator.next().value;
        if ( currentLetter[0] === nextLetter ) {
          if (currentLetter.length === 1) {
            currentLetter += counter.toString();
          }
          sequence[1] = nextLetter + counter.toString();
        } else {
          counter++;
        }
        conseqArray.push(currentLetter);
        sequence.splice(0, 1);
        findConsecutiveLetters(sequence);
      }
      conseqArray.push(currentLetter);
    }
    findConsecutiveLetters(strArray);
    function addNTimes(amount, letter) {
      i = 0;
      while (i < amount) {
        reducedString += letter[0];
        i++;
      }
    }
    !function(array) {
      array.forEach(function(element, index) {
        if (obj[element] === undefined) {
          obj[element] = [index];
        } else {
          obj[element].push(index);
        }
      });
    }(conseqArray);
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
    strArray = str.split('');
    return strArray.reverse().join('');
  }
};
