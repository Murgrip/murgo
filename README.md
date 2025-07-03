# MurgripGamer's JavaScript Utility Library - Complete Documentation

## Installation
```html
<script src="https://murgrip.github.io/murgo/v2.js"></script>
```

## Core Selectors
```javascript
$(selector)         // Returns first matching element (alias for document.querySelector)
$$(selector)        // Returns NodeList of all matching elements (alias for document.querySelectorAll)
```

## DOM Manipulation

### Element Visibility
```javascript
hide(element)        // Hides element (display: none)
show(element)        // Shows element (display: '')
toggle(element)      // Toggles element visibility
kill(element)       // Removes element from DOM

// NodeList extensions:
$$('.items').hide()  // Hides all matched elements
$$('.items').show()  // Shows all matched elements
$$('.items').toggle() // Toggles all matched elements
$$('.items').kill()  // Removes all matched elements
```

### HTML Manipulation
```javascript
// Element prototypes:
element.appendHTML('<div>Content</div>')   // Appends HTML
element.prependHTML('<div>First</div>')   // Prepends HTML
element.html()                            // Gets innerHTML
element.html('<div>New</div>')            // Sets innerHTML
element.text()                            // Gets textContent
element.text('New text')                  // Sets textContent
element.empty()                           // Clears all children

// String prototypes:
'<div>Hi</div>'.appendTo('#target')      // Appends HTML string
'<div>Hi</div>'.prependTo('#target')     // Prepends HTML string
```

### Element Movement
```javascript
element.appendTo('#parent')    // Moves element to end of parent
element.prependTo('#parent')   // Moves element to start of parent
element.wrap('<div class="wrapper"></div>') // Wraps element
element.replaceWith(newElement) // Replaces element
```

### DOM Traversal
```javascript
element.find('selector')      // Finds first child matching selector
element.findGrand('selector') // Finds all children matching selector
element.each(callback)        // Iterates through children
$$('.items').each(callback)   // Iterates through NodeList
```

## Attributes and Classes
```javascript
attr(element, 'name')                 // Gets attribute
attr(element, 'name', 'value')        // Sets attribute
removeAttr(element, 'name')           // Removes attribute

addClass(element, 'className')        // Adds class
removeClass(element, 'className')     // Removes class
toggleClass(element, 'className')     // Toggles class
hasClass(element, 'className')        // Checks for class
```

## Styles and Transforms
```javascript
css(element, 'property')              // Gets style
css(element, 'property', 'value')     // Sets style

// Transform methods:
element.moveX(100)                    // translateX
element.moveY(100)                    // translateY
element.move(100, 50)                 // translate(x,y)
element.rotateX(45)                   // rotateX
element.rotateY(45)                   // rotateY
element.rotateZ(45)                   // rotateZ
element.rotate(30, 15, 45)            // 3D rotation
element.skewX(10)                     // skewX
element.skewY(10)                     // skewY
element.skew(10, 5)                   // skew(x,y)
element.center()                      // Centers element absolutely
```

## Events
```javascript
on(element, 'click', handler)         // Adds event listener
off(element, 'click', handler)        // Removes event listener
trigger(element, 'click')             // Triggers event

// Drag and drop:
const cleanup = drag(element, 
  (e) => { /* drag handler */ }, 
  (e) => { /* drop handler */ }
);
// Call cleanup() to remove drag handlers
```

## Utility Functions

### Type Checking
```javascript
is.arr(value)    // Checks if array
is.obj(value)    // Checks if object
is.str(value)    // Checks if string
is.num(value)    // Checks if number
is.fun(value)    // Checks if function
is.nul(value)    // Checks if null
is.und(value)    // Checks if undefined
```

### Data Utilities
```javascript
clone(object)            // Deep clones object
merge(obj1, obj2, obj3)  // Merges objects
deepClone(object)        // Alternative deep clone
deepEqual(a, b)          // Deep equality check
```

### Math Utilities
```javascript
add(1, 2, 3)            // 6
subtract(10, 2, 3)      // 5
multiply(2, 3, 4)       // 24
```

### Timing Utilities
```javascript
wait(500).then(() => {}) // Returns promise that resolves after delay
debounce(fn, delay)      // Returns debounced function
throttle(fn, delay)     // Returns throttled function
timer(fn, delay)        // setTimeout wrapper
interval(fn, delay)     // setInterval wrapper
stopTimer(handle)       // clearTimeout wrapper
stopInterval(handle)    // clearInterval wrapper
```

## String Prototype Extensions

### Basic Manipulation
```javascript
'text'.encrypt()        // Base64 encode
'base64'.decrypt()      // Base64 decode
'text'.reverse()        // Reverses string
'text'.shuffle()        // Randomizes character order
'text'.truncate(10)     // Truncates with ellipsis
'text'.removeHTMLTags() // Strips HTML tags
```

### Case Conversion
```javascript
'text'.toCamelCase()    // camelCase
'text'.toSnakeCase()    // snake_case
'text'.toTitleCase()    // Title Case
'text'.toSlug()        // URL-friendly slug
```

### Word Operations
```javascript
'hello world'.firstWord()       // "hello"
'hello world'.lastWord()        // "world"
'hello world'.getWord(1)        // "world"
'hello world'.randomWord()      // Random word
'hello world'.longestWord()     // Longest word
'hello world'.shortestWord()    // Shortest word
```

### Analysis
```javascript
'hello'.countOccurrences('l')   // 2
'hello'.mostFrequentCharacter() // 'l'
'hello'.isUpperCase()           // false
'HELLO'.isUpperCase()           // true
```

## Array Prototype Extensions

### Basic Operations
```javascript
[1,2,3].shuffle()       // Randomizes order
[1,2,3].getRandom()     // Random element
[1,2,3].first()         // 1
[1,2,3].last()          // 3
[1,2,2,3].unique()      // [1,2,3]
[0,1,false,2].compact() // [1,2]
```

### Data Processing
```javascript
[1,2,3].sum()           // 6
[1,2,3].average()       // 2
[1,2,3].min()           // 1
[1,2,3].max()           // 3

[{a:1},{a:2}].pluck('a') // [1,2]
[{id:1},{id:2}].groupBy('id') // {1: [{id:1}], 2: [{id:2}]}
```

### Set Operations
```javascript
[1,2,3].difference([2,4])    // [1,3]
[1,2,3].intersection([2,4])  // [2]
```

### Pagination
```javascript
[1,2,3,4,5].take(2)     // [1,2]
[1,2,3,4,5].skip(2)     // [3,4,5]
[1,2,3,4,5].paginate(2, 2) // [3,4] (page 2, 2 per page)
```

## Data Storage

### LocalStorage Wrapper
```javascript
storage.set('key', value)  // Stores JSON
storage.get('key')         // Retrieves JSON
storage.remove('key')      // Removes key
storage.clear()            // Clears all
```

### Cookie Wrapper
```javascript
cookie.set('name', 'value', 3600) // Sets cookie (3600s expiry)
cookie.get('name')                // Gets cookie
cookie.remove('name')             // Removes cookie
```

### IndexedDB Wrapper
```javascript
const db = new DB('myDB');
db.save('key', data)      // Stores data
db.get('key')             // Retrieves data
db.remove('key')          // Removes data
db.clear()                // Clears database
```

## Networking
```javascript
ajax('/api')              // GET request (returns promise)
fetchWithTimer(url, options, timeout) // Fetch with timeout
createSocket(url, {       // WebSocket wrapper
  open: () => {},
  message: (e) => {}
})
```

## Animation
```javascript
animate(element, {opacity: 0}, 300) // CSS transition
element.fadeIn(300)       // Fades in
element.fadeOut(300)      // Fades out
element.animateQueue(     // Animation sequence
  {styles: {opacity: 0}, duration: 300},
  {styles: {left: '100px'}, duration: 200}
)
```

## Performance
```javascript
bench(() => { /* code */ }) // Returns execution time in ms
fps(callback)             // Calls back with current FPS
memory()                  // Returns memory usage string
```

## Random Utilities
```javascript
random.integer(1, 10)     // Random integer 1-10
random.float(1.5, 5.5)    // Random float
random.string(10)         // Random 10-char string
random.color()            // Random rgba color
random.date(start, end)   // Random date in range
random.arrayItem(array)   // Random array item
```

## System
```javascript
start(callback)           // Runs when window loads
end()                     // Closes window
```

## Extension System
```javascript
Murgo.extend('newMethod', function() {
  // New functionality
});
```
### Text Analysis
```javascript
'hello world'.mostFrequentWord()    // Returns most frequent word ("hello" if equal)
'hello world'.leastFrequentWord()  // Returns least frequent word
'hello world'.mostFrequentCharacter() // Returns most frequent character
'hello world'.leastFrequentCharacter() // Returns least frequent character
```

### Text Transformation
```javascript
'hello world'.capitalizeFirst()    // "Hello world"
'hello world'.capitalizeWords()    // "Hello World"
'hello world'.textBetween('hel', 'rld') // "lo wo"
```

## Array Prototype Extensions (Continued)

### Sorting and Filtering
```javascript
[{age:20},{age:30}].sortBy('age') // Sorts ascending
[{age:20},{age:30}].sortBy('age', -1) // Sorts descending

[1,2,3].chunk(2) // [[1,2],[3]] - splits into chunks
```

## Element Prototype Extensions (Detailed)

### Position and Dimensions
```javascript
element.pos() // Returns {top, left, width, height} object
element.val() // Gets value (for form elements)
element.val('new') // Sets value
```

### Advanced DOM Methods
```javascript
element.wrap('<div class="wrapper"></div>') // Wraps element
element.replaceWith(newElement) // Replaces with new element
```

## Special Utility Methods

### Functional Programming
```javascript
pipe(func1, func2, func3) // Creates function pipeline
memoize(function) // Returns memoized version
```

### Advanced Event Handling
```javascript
observe(element, callback, options) // MutationObserver wrapper
// Returns cleanup function

hotkeys('ctrl+s', (e) => {
  e.preventDefault()
  // Save logic
}) // Returns cleanup function
```

### Lazy Loading
```javascript
lazy('[data-src]', {
  threshold: 0.5,
  rootMargin: '100px'
}) // Lazy loads images when visible
```

## WebSocket Wrapper (Detailed)
```javascript
const socket = createSocket('ws://example.com', {
  open: () => console.log('Connected'),
  message: (e) => console.log('Message:', e.data),
  close: () => console.log('Disconnected')
})

socket.send({action: 'ping'}) // Sends JSON data
socket.close() // Closes connection
```

## Specialized Utilities

### Unique Identifiers
```javascript
uid() // "x12y34z56" (default 8 chars)
uid(12) // 12-character unique ID
```

### Benchmarking
```javascript
bench(() => {
  // Code to benchmark
}) // Returns execution time in milliseconds
```

### Animation Control
```javascript
const stop = raf(() => {
  // Animation frame callback
})
stop() // Stops the animation loop
```

## System Utilities

### Memory Monitoring
```javascript
memory() // Returns formatted memory string "123.45 MB"
```

### FPS Monitoring
```javascript
fps((currentFps) => {
  console.log('Current FPS:', currentFps)
}) // Continuously reports FPS
```

## DOM Ready Solutions
```javascript
ready(() => {
  // DOM is fully loaded
})

start(() => {
  // Window has fully loaded (including images)
})
```

## Advanced Querying
```javascript
$find('#id') // Alias for $(selector)
$find('.class') // Alias for $$(selector)
$find('parent > child') // Finds children matching selector

live('.dynamic-element', (el) => {
  // Runs for existing and future matching elements
})
```

## Promise Utilities
```javascript
fetchWithTimer(url, options, 5000) // Fetch with 5s timeout
```

## Complete Method List
The library exposes all methods through the Murgo namespace:
```javascript
window.Murgo = {
  // All documented methods...
  extend: (name, fn) => {} // For adding new methods
}
```
