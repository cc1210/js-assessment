exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var re = /\d/;
    return re.test(str);
  },

  containsRepeatingLetter: function(str) {
    var status;
    for (var i = 0; i < str.length; i++) {
      var re = new RegExp(str[i] + '{2,}');
      var re2 = new RegExp(/\D/);
      if (re.test(str) && re2.test(str[i])) {
        status = true;
        break;
      } else {
        status = false;
      }
    }
    return status;
  },

  endsWithVowel: function(str) {
    var re = new RegExp(/[aeiouAEIOU]$/);
    return re.test(str);
  },

  captureThreeNumbers: function(str) {
    var re = new RegExp(/(\d\d\d)/);
    if (str.match(re)) {
      return str.match(re)[1];
    } else {
      return false;
    }
  },

  matchesPattern: function(str) {
    var re = new RegExp(/^\d\d\d-\d\d\d-\d\d\d\d$/);
    return re.test(str);
  },

  isUSD: function(str) {
    // var re = new RegExp(/^\$(\d{1,3},{0,1})\.\d{2}$/);
    var re = new RegExp(/,/);
    var status = str.match(re);
    return status;
  }
};
