module.exports = function longestConsecutiveLength(array) {
  // your solution here
    var count = 0;
    if (array.length === 0) {
        return count;
    }
    var hash = {};
    for (var i = 0; i < array.length; i++) {
        hash[array[i]] = null;
    }
    for (var key in hash) {
        var currentNumber = key,
            innerRightCount = 1,
            innerLeftCount = 1;
        innerRightCount = rightNumbers(currentNumber, innerRightCount, hash);
        innerLeftCount = leftNumbers(currentNumber, innerLeftCount, hash);
        count = Math.max(innerRightCount, innerLeftCount, count);
    }
    return count;
};

function rightNumbers(currentNumber, innerRightCount, hash) {
    var rightNumber = ++currentNumber;
    if (rightNumber in hash) {
        return rightNumbers(rightNumber, ++innerRightCount, hash);
    } else {
        return innerRightCount;
    }
}

function leftNumbers(currentNumber, innerLeftCount, hash) {
    var leftNumber = --currentNumber;
    if (leftNumber in hash) {
        return leftNumbers(leftNumber, ++innerLeftCount, hash);
    } else {
        return innerLeftCount;
    }
}