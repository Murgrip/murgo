# String Prototype Extensions - Complete Guide

These extensions add powerful string manipulation methods to JavaScript's String prototype, providing convenient utilities for common text processing tasks.

## Encryption & Encoding

### .encrypt()
Base64 encodes a string (UTF-8 safe)
```javascript
'secret'.encrypt(); // "c2VjcmV0"
```

### .decrypt()
Decodes a Base64 encoded string
```javascript
'c2VjcmV0'.decrypt(); // "secret"
```

## Randomization

### .shuffle()
Randomizes character order
```javascript
'abcdef'.shuffle(); // "fdbeac" (random result)
```

### .randomCharacter()
Returns random character
```javascript
'hello'.randomCharacter(); // "e" (random result)
```

### .randomWord()
Returns random word from string
```javascript
'quick brown fox'.randomWord(); // "brown" (random result)
```

## Word Operations

### .firstWord()
Gets first word
```javascript
'Hello world'.firstWord(); // "Hello"
```

### .lastWord()
Gets last word
```javascript
'JavaScript is awesome'.lastWord(); // "awesome"
```

### .getWord(index)
Gets word at specific index
```javascript
'The quick brown fox'.getWord(2); // "brown"
```

### .longestWord()
Finds longest word
```javascript
'Web development is fun'.longestWord(); // "development"
```

### .shortestWord()
Finds shortest word
```javascript
'React is a library'.shortestWord(); // "a"
```

## Frequency Analysis

### .mostFrequentWord()
Finds most common word
```javascript
'hello hello world'.mostFrequentWord(); // "hello"
```

### .leastFrequentWord()
Finds least common word
```javascript
'foo foo bar baz'.leastFrequentWord(); // "baz"
```

### .mostFrequentCharacter()
Finds most common character
```javascript
'mississippi'.mostFrequentCharacter(); // "i"
```

### .leastFrequentCharacter()
Finds least common character
```javascript
'mississippi'.leastFrequentCharacter(); // "m"
```

## Case Conversion

### .capitalizeFirst()
Capitalizes first letter
```javascript
'hello'.capitalizeFirst(); // "Hello"
```

### .capitalizeWords()
Capitalizes each word
```javascript
'hello world'.capitalizeWords(); // "Hello World"
```

### .toCamelCase()
Converts to camelCase
```javascript
'hello-world'.toCamelCase(); // "helloWorld"
```

### .toSnakeCase()
Converts to snake_case
```javascript
'helloWorld'.toSnakeCase(); // "hello_world"
```

### .toTitleCase()
Converts to Title Case
```javascript
'hello world'.toTitleCase(); // "Hello World"
```

## String Manipulation

### .reverse()
Reverses string
```javascript
'hello'.reverse(); // "olleh"
```

### .truncate(length, ellipsis)
Shortens string with ellipsis
```javascript
'This is too long'.truncate(7); // "This is..."
```

### .removeHTMLTags()
Strips HTML tags
```javascript
'<p>Hello</p>'.removeHTMLTags(); // "Hello"
```

### .toSlug()
Creates URL-friendly slug
```javascript
'Hello World!'.toSlug(); // "hello-world"
```

## Utility Methods

### .countOccurrences(substring)
Counts substring appearances
```javascript
'banana'.countOccurrences('na'); // 2
```

### .contains(substring)
Checks for substring
```javascript
'hello'.contains('ell'); // true
```

### .equals(other, ignoreCase)
Compares strings
```javascript
'Hello'.equals('hello'); // true
'Hello'.equals('hello', false); // false
```

### .textBetween(start, end)
Extracts text between delimiters
```javascript
'foo [bar] baz'.textBetween('[', ']'); // "bar"
```

### .log()
Logs string to console (chainable)
```javascript
'result:'.log().toUpperCase(); // Logs "result:" then returns "RESULT:"
```

## Practical Examples

### Data Cleaning
```javascript
const dirty = '<div> HELLO  world </div>';

const clean = dirty
  .removeHTMLTags()
  .trim()
  .toTitleCase();
// "Hello World"
```

### URL Generation
```javascript
const title = 'My Awesome Post!';
const url = `/posts/${title.toSlug()}`;
// "/posts/my-awesome-post"
```

### Text Analysis
```javascript
const text = 'The quick brown fox jumps over the lazy dog';

const stats = {
  wordCount: text.split(' ').length,
  mostCommon: text.mostFrequentWord(),
  longest: text.longestWord()
};
```