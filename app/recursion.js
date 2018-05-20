exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [];
    function getAllFiles(data) {
      var values = data.files;
      for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === 'object') {
          getAllFiles(values[i]);
        } else if (typeof values[i] === 'string') {
          fileList.push(values[i]);
        }
      }
    }
    function getSubDirFiles(theData, directory) {
      if (theData.dir === directory) {
        getAllFiles(theData);
      } else {
        for (var j = 0; j < theData.files.length; j++) {
          if (typeof theData.files[j] === 'object') {
            getSubDirFiles(theData.files[j], directory);
          }
        }
      }
    }
    if (dirName === undefined) {
      getAllFiles(data);
    } else {
      getSubDirFiles(data, dirName);
    }
    return fileList;
  },

  permute: function(arr) {
    var resultArray = [];
    var usedElements = [];
    var product = 1;
    var counter = 0;

    function factorial(subArr) {
      if (subArr.length > 1) {
        product *= subArr.length
        subArr.pop();
        factorial(subArr);
      }
      // return product;
    }

    function arrangeArrs(elem) {
      var ind = arr.indexOf(elem);
      arr.splice(ind, 1);
      factorial(arr);
      var multiplication = product;
      product = 1;
      var newArray = [];
      arr.map((elements) => {
        newArray.push(elements);
      });
      resultArray.push(newArray);
      arr.splice(ind, 0, elem);
    }

    arr.forEach(arrangeArrs);
    return resultArray;
  },

  fibonacci: function(n) {
    var fibArray = [0, 1];
    fibArray.reverse();
    function buildFibSeq(current, previous) {
      fibArray.unshift(current + previous);
      var len = fibArray.length;
      if (fibArray.length !== (n + 1)) {
        buildFibSeq(fibArray[0], fibArray[1]);
      }
    }
    buildFibSeq(fibArray[1], fibArray[0]);
    fibArray.reverse();
    return fibArray[n];
  },

  validParentheses: function(n) {

  }
};
