// Stacks!

// functions: push, pop, peek, length
var letters = [];

let palindrome = "rotator"
let reverse = "";

// put letters of palindrome into stack
for(i = 0; i < palindrome.length; i++){
  letters.push(palindrome[i])
}
// console.log(letters)


// pop off the stack in reverse order
for(i = 0; i < palindrome.length; i++) {
  reverse += letters.pop()
}
// console.log(reverse)

if (reverse === palindrome) {
  console.log(palindrome + " is a palindrome")
} else {
  console.log(palindrome + " is not a palindrome")
}