//1. Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//Input is a number? Positive? No decimals?
//print intergers 1 to the number?
//interger divisible by 3 I should print 'Fizz'?
//interger divisible by 5 I should print 'Buzz'?
//interger divisible by 3 and 5 I should print 'FizzBuzz'?
// 10 --> 1, 2, 'Fizz', 4 "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"?
//15 --> 1, 2, 'Fizz', 4 "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"?

//function fizzBuzz that takes in a num
function fizzBuzz(num) {
  //for loop that prints i and starts from 1 and prints "Fizz", "Buzz", abd "FizzBuzz" in their places
  for (let i = 1; i <= num; i++) {
    //prints fizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(10);
fizzBuzz(15);
