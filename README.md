# Learn Regular Expression

> freeCodeCamp youtube video and some of my own

- Using the Test Method

The `test()` method in JavaScript tests for a match in a string and returns `true` or `false` depending on whether the pattern is found or not. It can be used with the regular expression's `test()` method.

```javascript

let myString = "Hello, world";
let myStringRegex = /hello/i;
const result = myStringRegex.test(myString);
console.log("result: ", result); // Output: true

```

- Match Literal Strings

To match a literal string in a regular expression, you can simply include the string within the forward slashes `/` to create the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /Hello/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["Hello", "Hello"]

```

- Match a Literal String with Different Possibilities

To match a literal string with different possibilities, you can use the `|` operator in the regular expression pattern.

```javascript

let myString = "Hello, world";
let myStringRegex = /hello|mister/;
const result = myStringRegex.test(myString);
console.log("result: ", result); // Output: true

```

- Ignore Case While Matching

To ignore the case while matching a string in a regular expression, you can use the `i` flag after the closing forward slash `/` of the regular expression pattern.

```javascript

let myString = "Hello, world";
let myStringRegex = /hello/i;
const result = myStringRegex.test(myString);
console.log("result: ", result); // Output: true

```

- Extract Matches

To extract matches from a string using a regular expression, you can use the `match()` method in JavaScript. Pass the regular expression as an argument to the `match()` method.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /Hello/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["Hello", "Hello"]

```

- Find More Than the First Match

By default, the `match()` method in JavaScript finds only the first match. To find all occurrences of a pattern in a string, you can use the `g` flag in the regular expression.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /Hello/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["Hello", "Hello"]

```

- Match Anything with Wildcard Period

The `.` character in a regular expression matches any single character, except for newline characters.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /he./i;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["Hel"]

```

- Match Single Character with Multiple Possibilities

To match a single character with multiple possibilities, you can use square brackets `[ ]` in the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /[aeiou]/ig;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["e", "o", "o", "e", "o"]

```

- Match Letters of the Alphabet

To match letters of the alphabet, you can use the range `[a-z]` in the regular expression pattern. This will match any lowercase letter from `a` to `z`.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /[a-z]/ig;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d", "e", "l", "l", "o"]

```

- Match Numbers and Letters of the Alphabet

To match both numbers and letters of the alphabet, you can use the range `[0-9a-z]` in the regular expression pattern. This will match any digit from `0` to `9` and any lowercase letter from `a` to `z`.

```javascript

let quoteString = "I will be the king of the piret 321";
let quoteStringRegex = /[0-9a-z]/ig;
let result4 = quoteString.match(quoteStringRegex);
console.log("result4: ", result4); // Output: ["I", "w", "i", "l", "l", "b", "e", "t", "h", "e", "k", "i", "n", "g", "o", "f", "t", "h", "e", "p", "i", "r", "e", "t", "3", "2", "1"]

```

- Match Single Characters Not Specified

To match single characters not specified in a regular expression, you can use the `[^]` notation in the pattern. It matches any character that is not within the square brackets.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /[^he]/ig;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: [", ", ", ", "o", "l", "l", ",", " ", "o", "r", "l", "d", ",", " ", "6"]

```

- Match Characters that Occur One or More Times

To match characters that occur one or more times in a row, you can use the `+` symbol in the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /l+/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["ll", "ll", "l"]

```

- Match Characters that Occur Zero or More Times

To match characters that occur zero or more times, you can use the `*` symbol in the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /he*/ig;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["He", "H", "He"]

```

- Find Characters with Lazy Matching

By default, regular expressions are greedy, which means they try to match as much as possible. To perform a lazy match and match as little as possible, you can use the `?` symbol after the `*` or `+` symbol.

```javascript

let string = "titanic";
let regex = /t[a-z]*i/;
const result2 = string.match(regex);
console.log("result2: ", result2); // Output: ["titani"]

```

- Find One or More Criminals in a Hunt

To find one or more occurrences of a pattern, you can use the `+` symbol in the regular expression pattern.

```javascript

let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /C+/;
const matchedCriminals = crowd.match(reCriminals);
console.log("matchedCriminals: ", matchedCriminals); // Output: ["CCC"]

```

- Match Beginning String Patterns

To match patterns at the beginning of a string, you can use the `^` symbol in the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /^He/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["He"]

```

- Match Ending String Patterns

To match patterns at the end of a string, you can use the `$` symbol in the regular expression pattern.

```javascript

let extractString = "Hello, world, Hello6";
let extractStringRegex = /o6$/g;
const result1 = extractString.match(extractStringRegex);
console.log("result1: ", result1); // Output: ["o6"]

```

- Match All Letters and Numbers

To match all letters and numbers in a string, you can use the shorthand character class `\w` in the regular expression pattern.

```javascript

let quoteString = "I will be the king of the piret 321";
let quoteStringRegex = /\w/g;
let result4 = quoteString.match(quoteStringRegex);
console.log("result4: ", result4); // Output: ["I", "w", "i", "l", "l", "b", "e", "t", "h", "e", "k", "i", "n", "g", "o", "f", "t", "h", "e", "p", "i", "r", "e", "t", "3", "2", "1"]

```

- Match Everything But Letters and Numbers
To match everything except letters and numbers in a string, you can use the shorthand character class `\W` in the regular expression pattern.

```javascript

let quoteString = "I will be the king of the piret 321";
let quoteStringRegex = /\W/g;
let result4 = quoteString.match(quoteStringRegex);
console.log("result4: ", result4); // Output: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]

```

- Match All Numbers

To match all numbers in a string, you can use the shorthand character class `\d` in the regular expression pattern.

```javascript

let quoteString = "I will be the king of the piret 321";
let quoteStringRegex = /\d/g;
let result4 = quoteString.match(quoteStringRegex);
console.log("result4: ", result4); // Output: ["3", "2", "1"]

```

- Match All Non-Numbers
To match all non-numbers in a string, you can use the shorthand character class `\D` in the regular expression pattern.

```javascript

let quoteString = "I will be the king of the piret 321";
let quoteStringRegex = /\D/g;
let result4 = quoteString.match(quoteStringRegex);
console.log("result4: ", result4); // Output: ["I", " ", "w", "i", "l", "l", " ", "b", "e", " ", "t", "h", "e", " ", "k", "i", "n", "g", " ", "o", "f", " ", "t", "h", "e", " ", "p", "i", "r", "e", "t", " "]

```

- Restrict Possible Usernames

To restrict possible usernames to only alphanumeric characters (letters and numbers) and underscores, you can use the regular expression pattern `/\w/`.

```javascript

let username = "john_doe123";
let usernameRegex = /\w/;
const isValid = usernameRegex.test(username);
console.log("isValid: ", isValid); // Output: true

```

- Match Whitespace

To match whitespace characters (spaces, tabs, and line breaks), you can use the shorthand character class `\s` in the regular expression pattern.

```javascript

let text = "This is a sentence with spaces";
let textRegex = /\s/g;
const result = text.match(textRegex);
console.log("result: ", result); // Output: [" ", " ", " ", " "]

```

- Match Non-Whitespace Characters

To match non-whitespace characters, you can use the shorthand character class `\S` in the regular expression pattern.

```javascript

let text = "This is a sentence with spaces";
let textRegex = /\S/g;
const result = text.match(textRegex);
console.log("result: ", result); // Output: ["T", "h", "i", "s", "i", "s", "a", "s", "e", "n", "t", "e", "n", "c", "e", "w", "i", "t", "h", "s", "p", "a", "c", "e", "s"]

```

- Specify Upper and Lower Number of Matches

To specify the upper and lower number of matches for a pattern, you can use the curly braces `{ }` in the regular expression pattern.

```javascript

let text = "Hellooo";
let textRegex = /o{2,4}/g;
const result = text.match(textRegex);
console.log("result: ", result); // Output: ["ooo"]

```

- Specify Only the Lower Number of Matches

To specify only the lower number of matches for a pattern, you can use the curly braces `{ }` with a single value in the regular expression pattern.

```javascript

let text = "Hellooo";
let textRegex = /o{3,}/g;
const result = text.match(textRegex);
console.log("result: ", result); // Output: ["ooo"]

```

- Specify Exact Number of Matches

To specify an exact number of matches for a pattern, you can use the curly braces `{ }` with the same value for the lower and upper bounds in the regular expression pattern.

```javascript

let text = "Hellooo";
let textRegex = /o{3}/g;
const result = text.match(textRegex);
console.log("result: ", result); // Output: ["ooo"]

```

- Check for All or None

To check if a pattern occurs zero or one time, you can use the `?` symbol in the regular expression pattern.

```javascript

let text = "color";
let textRegex = /colou?r/;
const result = textRegex.test(text);
console.log("result: ", result); // Output: true

```

- Positive and Negative Lookahead

Positive and negative lookaheads are used to look ahead in the string to see if a pattern exists or does not exist without actually consuming the characters. Positive lookahead is represented by `(?=...)`, while negative lookahead is represented by `(?!...)`.

```javascript

let password = "P@ssw0rd";
let positiveRegex = /(?=\w{8,})(?=\D*\d)(?=[^a-z]*[a-z])/;
let negativeRegex = /(?!123456)/;
const isStrongPassword = positiveRegex.test(password) && negativeRegex.test(password);
console.log("isStrongPassword: ", isStrongPassword); // Output: true

```

- Reuse Patterns Using Capture Groups

To reuse patterns using capture groups, you can use parentheses `( )` to create a capture group in the regular expression pattern. The captured value can be referenced using backreferences.

```javascript

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
const result = repeatRegex.test(repeatStr);
console.log("result: ", result); // Output: true

```

- Use Capture Groups to Search and Replace

Capture groups can also be used to search and replace parts of a string using the `replace()` method in JavaScript. Backreferences can be used to reference the captured values in the replacement string.

```javascript

let str = "Hello, world";
let regex = /(\w+), (\w+)/;
let result = str.replace(regex, "$2, $1");
console.log("result: ", result); // Output: "world, Hello"

```

- Remove Whitespace from Start and End

To remove whitespace characters from the start and end of a string, you can use the `trim()` method in JavaScript.

```javascript

let str = "   Hello, world   ";
let trimmedStr = str.trim();
console.log("trimmedStr: ", trimmedStr); // Output: "Hello, world"

```

- Validate Email Addresses

To validate email addresses using a regular expression, you can use the following pattern:

```js

let email = "example@example.com";
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = emailRegex.test(email);
console.log("isValidEmail: ", isValidEmail); // Output: true

```

- Validate URL

To validate URLs using regular expressions, you can use a pattern that checks for the correct format of a URL. Again, URL validation can be complex, but here's a basic pattern to get you started:

```js

let url = "https://www.example.com";
let urlRegex = /^(http|https):\/\/([\w.-]+)\.([a-zA-Z]{2,})(:[0-9]+)?(\/.*)?$/;
const isValidURL = urlRegex.test(url);
console.log("isValidURL: ", isValidURL); // Output: true

```

- Validate Phone Numbers

To validate phone numbers using regular expressions, you can use a pattern that checks for the correct format of a phone number. Phone number formats can vary, but here's a basic pattern to validate a common format:

```js

let phoneNumber = "+1 (123) 456-7890";
let phoneRegex = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
const isValidPhoneNumber = phoneRegex.test(phoneNumber);
console.log("isValidPhoneNumber: ", isValidPhoneNumber); // Output: true

```