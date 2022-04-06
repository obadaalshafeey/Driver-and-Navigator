const str = 'The Car Drove Fast';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,4);

}
const str2 = arr.join(" ");
console.log(str2);
// ////////////////////////////
console.log("task3");
// 1. Write a JavaScript function that return true if the passed string palindrome false if 
// not 
// Example string:ABCDCBA
// Expected Output :True


// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}

// take input
const string = "ABCDCBA";

// call the function

const value = checkPalindrome(string);
console.log(value);