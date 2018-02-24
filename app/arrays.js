exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var arrlength = arr.length;
    var sum = 0;
    for ( var i = 0; i < arrlength; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var concated = arr1.concat(arr2);
    return concated;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      var counter = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }
      if (counter > 1) {
        if (duplicates.includes(arr[i]) === false) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  },

  square: function(arr) {
    var squared = [];
    for (var i = 0; i < arr.length; i++) {
      var square = arr[i] * arr[i];
      squared.push(square);
    }
    return squared;
  },

  findAllOccurrences: function(arr, target) {
    var occurrenceArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (target === arr[i]) {
        occurrenceArr.push(i);
      }
    }
    return occurrenceArr;
  }
};
