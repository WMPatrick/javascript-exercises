const reverseString = function(str) {
  let reversedStr = str.split(" ").reverse().map(word => word.split("").reverse().join("")).join(" ");
  return reversedStr;
};
console.log(reverseString("hello"));
console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
