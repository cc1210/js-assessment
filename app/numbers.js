exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var numString = (num).toString(2);
    var bitIndex = numString.length - bit;
    return Number.parseInt(numString[bitIndex], 10);
  },

  base10: function(str) {
    var binary = Number.parseInt(str, 2);
    return binary;
  },

  convertToBinary: function(num) {
    var strNum = (num).toString(2);
    var binary = Number.parseInt(strNum, 2);
    if (strNum.length !== 8) {
      return '0' + strNum;
    } else {
      return strNum;
    }
  },

  multiply: function(a, b) {
    var aString = a.toString();
    var bString = b.toString();
    var product = a * b;
    if (aString.length >= bString.length) {
      var roundNum = afterDecimal(aString);
      var strProd = product.toFixed(roundNum);
      return Number.parseFloat(strProd, 10);
    } else {
      var roundNum = afterDecimal(bString);
      var strProd = product.toFixed(roundNum);
      return Number.parseFloat(strProd, 10);
    }
    function afterDecimal(num) {
      var digit = num.split("");
      digit.reverse();
      var dotIndex = 0;
      for (var i = digit.length; i >= 0; i--) {
        if (digit[i] === '.') {
          dotIndex += i;
        }
      }
      return dotIndex;
    }
  }
};
