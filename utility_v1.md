# DOM Utility Functions - Complete Guide

These utilities provide powerful tools for DOM manipulation, asynchronous operations, type checking, and performance optimization.

## DOM Ready States

### `ready(selector, callback)`
Waits for element(s) to exist in DOM
```javascript
ready('#app', (app) => {
  // Your code when #app is available
});
```

### `start(callback)`
Runs when window fully loads
```javascript
start(() => {
  // All resources loaded
});
```

### `end()`
Closes current window
```javascript
document.getElementById('exit').onclick = end;
```

## DOM Observation

### `observe(element, callback, options)`
Watches DOM mutations
```javascript
const stop = observe(document.body, (mutations) => {
  console.log('DOM changed:', mutations);
});

// Later...
stop(); // Disconnects observer
```

### `lazy(selector, options)`
Lazy-loads images/elements
```javascript
lazy('.lazy-img', {
  threshold: 0.5,
  rootMargin: '100px'
});
```

## Event Handling

### `hotkeys(keys, callback)`
Creates keyboard shortcuts
```javascript
const removeHotkey = hotkeys('ctrl+shift+k', () => {
  console.log('Hotkey pressed');
});

// To remove:
removeHotkey();
```

## Data Loading

### `loadText(url)`
Fetches text content
```javascript
loadText('data.txt')
  .then(text => console.log(text));
```

### `loadJson(url)`
Fetches JSON data
```javascript
loadJson('api/data.json')
  .then(data => console.log(data));
```

## Element Creation

### `buildItem(tagName)`
Creates DOM elements
```javascript
const newDiv = buildItem('div')
  .addClass('box')
  .html('Content');
```

## Type Checking

### Type predicates
```javascript
isArr([]); // true
isObj({}); // true
isStr(''); // true
isNum(42); // true
isFun(() => {}); // true
isNul(null); // true
isUnd(undefined); // true
isEl(document.body); // true
```

## Performance Utilities

### `bench(fn)`
Measures execution time
```javascript
const time = bench(() => {
  // Code to benchmark
});
console.log(`Took ${time}ms`);
```

### `memoize(fn)`
Caches function results
```javascript
const factorial = memoize(n => n <= 1 ? 1 : n * factorial(n - 1));
```

## Data Manipulation

### `deepClone(obj)`
Creates deep copies
```javascript
const original = { a: { b: 1 } };
const copy = deepClone(original);
```

### `deepEqual(a, b)`
Deep object comparison
```javascript
deepEqual({ a: 1 }, { a: 1 }); // true
```

### `pipe(...fns)`
Function composition
```javascript
const process = pipe(
  x => x * 2,
  x => x + 1
);
process(5); // 11
```

## Timing Control

### `wait(ms)`
Async delay
```javascript
async function demo() {
  await wait(1000);
  console.log('1 second later');
}
```

### Timer functions
```javascript
const timerId = timer(() => console.log('Timeout'), 1000);
const intervalId = interval(() => console.log('Every second'), 1000);

// Later...
stopTimer(timerId);
stopInterval(intervalId);
```

## Practical Examples

### Lazy Loading Gallery
```javascript
ready('#gallery', (gallery) => {
  lazy('img.lazy', {
    root: gallery,
    threshold: 0.1
  });
});
```

### Keyboard Shortcuts
```javascript
start(() => {
  hotkeys('ctrl+s', (e) => {
    e.preventDefault();
    saveDocument();
  });
});
```

### Performance Monitoring
```javascript
const optimizedFunc = memoize(expensiveCalculation);

ready('#calculate', (btn) => {
  btn.onclick = () => {
    const time = bench(() => {
      const result = optimizedFunc(input.value);
      displayResult(result);
    });
    showPerformance(time);
  };
});
```