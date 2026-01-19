// Create a function that takes a string and returns the reversed string.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("hello")


// 🔹 Problem 3: Find Largest Number in an Array

function findLargest(arr){
  return Math.max(...arr);
}

console.log(findLargest([5, 12, 3, 21, 8]));



function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
