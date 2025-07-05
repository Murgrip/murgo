# Object Prototype Extensions - Complete Guide

These extensions add powerful utility methods to all JavaScript objects, providing functional programming capabilities similar to array methods but for objects.

## Core Methods

### .isEmpty()
Checks if object has no own properties
```javascript
const obj = {};
obj.isEmpty(); // true

const data = { id: 1 };
data.isEmpty(); // false
```

### .forEach(fn)
Iterates through object properties
```javascript
const user = { name: 'John', age: 30 };

user.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
```

### .map(fn)
Creates new object with transformed values
```javascript
const prices = { apple: 1.5, banana: 0.8 };

const salePrices = prices.map(price => price * 0.9);
// { apple: 1.35, banana: 0.72 }
```

## Filtering Methods

### .filter(fn)
Creates new object with filtered properties
```javascript
const scores = { math: 90, science: 85, art: 70 };

const highScores = scores.filter(score => score >= 85);
// { math: 90, science: 85 }
```

### .pick(...keys)
Creates new object with only specified keys
```javascript
const user = { id: 1, name: 'Alice', email: 'alice@example.com', age: 28 };

const publicProfile = user.pick('name', 'email');
// { name: 'Alice', email: 'alice@example.com' }
```

### .omit(...keys)
Creates new object without specified keys
```javascript
const config = { apiKey: '123', endpoint: '/data', timeout: 5000 };

const safeConfig = config.omit('apiKey');
// { endpoint: '/data', timeout: 5000 }
```

## Aggregation Method

### .reduce(fn, initialValue)
Reduces object to a single value
```javascript
const cart = { apples: 3, oranges: 5, bananas: 2 };

const totalItems = cart.reduce((sum, quantity) => sum + quantity, 0);
// 10
```

## Practical Examples

### Data Transformation
```javascript
const product = { 
  id: 101, 
  name: 'Laptop', 
  price: 999, 
  inStock: true 
};

// Create display object
const displayProduct = product
  .pick('name', 'price')
  .map(val => typeof val === 'number' ? `$${val}` : val);
// { name: 'Laptop', price: '$999' }
```

### API Response Processing
```javascript
const apiResponse = {
  status: 200,
  data: { /* ... */ },
  timestamp: '2023-05-20',
  requestId: 'abc123'
};

// Extract only metadata
const metadata = apiResponse.pick('status', 'timestamp', 'requestId');
```

### Configuration Filtering
```javascript
const allSettings = {
  theme: 'dark',
  notifications: true,
  analytics: false,
  userId: 'user123',
  apiKey: 'secret123'
};

const clientSettings = allSettings
  .omit('userId', 'apiKey')
  .filter(val => typeof val !== 'boolean' || val === true);
```