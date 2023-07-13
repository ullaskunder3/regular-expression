let myString = "Hello, world";

// let myStringRegex = /hello|mister/;
let myStringRegex = /hello/i;

// | or
// i forget the case

const result = myStringRegex.test(myString);
console.log("result: ",result);

// - Extract match

let extractString = "Hello, world, Hello6";

// let extractStringRegex = /Hello/g;
// let extractStringRegex = /hello/ig;
// let extractStringRegex = /he./i;
// let extractStringRegex = /[aeiou]/ig;
// let extractStringRegex = /[a-z]/ig;
// let extractStringRegex = /[0-6a-h]/ig;
// let extractStringRegex = /[^0-9a-h]/ig;
// let extractStringRegex = /l+/g;
// let extractStringRegex = /he*/ig;
// let extractStringRegex = /^he/ig;
let extractStringRegex = /o6$/ig;

// g - every single occurence
// . - wild card match
// [] - one of the letter
// [a-z] - match every from a to z
// [^] - return except the match 
// [+] - return occurence once or more 
// [^he] - ^falledByString check is it in the begning 
// [o6$] - falledByString$ check is it in the ending 

const result1 = extractString.match(extractStringRegex);
console.log("result1: ",result1);

// greedy and lazy

let string = "titanic";
let regex = /t[a-z]*i/;
// first match for letter t then zero or more occurence of a to z last letter i
// this is a greedy match
// to make it lazy add ? => /t[a-z]*?i/

const result2 = string.match(regex);
console.log("result2: ",result2);

let text = "<h1>Winter is coming</h1>";
let textRegex = /<.*>/;

// this is greedy to convert it to lazzy match add ? => /<.*?>/

const result3 = text.match(textRegex);
console.log("result3: ",result3);

// to match alphabet

let quoteString = "I will be the king of the piret 321";

// let quoteStringRegex = /\w/g;
// // check every a - z A - Z 1 - 0

// let quoteStringRegex = /\W/g;
// // check every which are not letter or number

// let quoteStringRegex = /\d/g;
// // check every number

let quoteStringRegex = /\d/g;
// check every number

let result4 = quoteString.match(quoteStringRegex);
console.log("result4", result4);