# Array Prototype Extensions - Complete Guide

These extensions enhance JavaScript's Array prototype with convenient methods for common data manipulation tasks.

## Element Access

### .first()
Gets first element
```javascript
[1, 2, 3].first(); // 1
[].first(); // undefined
```

### .last()
Gets last element
```javascript
['a', 'b', 'c'].last(); // 'c'
```

### .random()
Gets random element
```javascript
[10, 20, 30].random(); // 20 (random result)
```

## Array Transformation

### .shuffle()
Randomizes array order (mutates original)
```javascript
const cards = ['A', 'K', 'Q', 'J'];
cards.shuffle(); // ['Q', 'A', 'J', 'K'] (random order)
```

### .unique()
Removes duplicates
```javascript
[1, 2, 2, 3].unique(); // [1, 2, 3]
```

### .compact()
Removes falsy values
```javascript
[0, 1, false, 2, '', 3].compact(); // [1, 2, 3]
```

### .chunk(size)
Splits into chunks
```javascript
[1, 2, 3, 4, 5].chunk(2); // [[1, 2], [3, 4], [5]]
```

## Object Array Helpers

### .groupBy(key)
Groups objects by property
```javascript
const users = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
  { id: 3, role: 'admin' }
];

users.groupBy('role');
/* {
  admin: [{id:1, role:'admin'}, {id:3, role:'admin'}],
  user: [{id:2, role:'user'}]
} */
```

### .pluck(key)
Extracts property values
```javascript
[{name:'Alice'}, {name:'Bob'}].pluck('name'); // ['Alice', 'Bob']
```

## Numeric Operations

### .sum()
Calculates sum
```javascript
[1, 2, 3].sum(); // 6
```

### .avg()
Calculates average
```javascript
[10, 20, 30].avg(); // 20
[].avg(); // 0 (empty array fallback)
```

### .max()
Finds maximum value
```javascript
[5, 1, 8].max(); // 8
```

### .min()
Finds minimum value
```javascript
[5, 1, 8].min(); // 1
```

## Set Operations

### .diff(arr)
Gets elements not in another array
```javascript
[1, 2, 3].diff([2, 4]); // [1, 3]
```

### .intersect(arr)
Gets common elements
```javascript
[1, 2, 3].intersect([2, 3, 4]); // [2, 3]
```

## Practical Examples

### Data Processing Pipeline
```javascript
const products = [
  { id: 1, price: 10, category: 'A' },
  { id: 2, price: 20, category: 'B' },
  { id: 3, price: 30, category: 'A' }
];

// Get average price for category A
products
  .groupBy('category')['A']
  .pluck('price')
  .avg(); // 20
```

### Random Sampling
```javascript
const names = ['Alice', 'Bob', 'Charlie', 'Dana'];

// Get 2 random unique names
names
  .shuffle()
  .slice(0, 2); // ['Charlie', 'Alice'] (random result)
```

### Data Cleaning
```javascript
const dirtyData = [0, 1, null, 2, '', 3, undefined];

const cleanData = dirtyData
  .compact()
  .unique(); // [0, 1, 2, 3]
```