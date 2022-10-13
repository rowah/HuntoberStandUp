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

//2.Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//takes in a string, can the string be empty? can the string have numbers only? I see a common pattern the .com after the domain name...is that gonna be common in all the string inputs?

//prints the domain name only?

// urlParser("http://github.com/carbonfive/raygun") == "github"
// urlParser("http://www.zombie-bites.com") == "zombie-bites"
// urlParser("https://www.cnet.com") == "cnet

function urlParser(url) {
  //replace "http://", "http://", and "www." with empty strings
  //split the url at common patterns; "." and "//"
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")
    .shift();
}

console.log(urlParser("http://github.com/carbonfive/raygun"));
console.log(urlParser("http://www.zombie-bites.com"));
console.log(urlParser("https://www.cnet.com"));
console.log(
  urlParser(
    "https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript"
  )
);
