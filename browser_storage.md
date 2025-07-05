# Browser Storage Utilities - Complete Guide

These utilities provide a clean, consistent API for working with different browser storage mechanisms: localStorage, cookies, and IndexedDB.

## localStorage Wrapper (`storage`)

### Methods

#### `set(key, value)`
Stores data in localStorage
```javascript
storage.set('user', {name: 'John'})
  .set('theme', 'dark');
// Stores both values
```

#### `get(key)`
Retrieves stored data
```javascript
const user = storage.get('user'); // {name: 'John'}
const theme = storage.get('theme'); // 'dark'
```

#### `remove(key)`
Removes stored item
```javascript
storage.remove('theme');
```

#### `clear()`
Clears all localStorage
```javascript
storage.clear();
```

#### `all()`
Gets all stored data as object
```javascript
const allData = storage.all();
// {user: {name: 'John'}, ...}
```

## Cookie Manager (`cookie`)

### Methods

#### `set(key, value, days=7)`
Sets a cookie (default 7 days expiry)
```javascript
cookie.set('session', 'abc123', 1); // 1 day expiry
```

#### `get(key)`
Gets cookie value
```javascript
const session = cookie.get('session'); // 'abc123'
```

#### `remove(key)`
Deletes a cookie
```javascript
cookie.remove('session');
```

#### `all()`
Gets all cookies as object
```javascript
const allCookies = cookie.all();
// {session: 'abc123', ...}
```

#### `clear()`
Removes all cookies
```javascript
cookie.clear();
```

## IndexedDB Wrapper (`DB`)

### Basic Usage
```javascript
const db = new DB('myDatabase');
```

### Methods

#### `save(key, data)`
Stores data in IndexedDB
```javascript
db.save('user', {name: 'Alice'})
  .then(() => console.log('Saved'));
```

#### `get(key)`
Retrieves stored data
```javascript
db.get('user')
  .then(user => console.log(user)); // {name: 'Alice'}
```

#### `remove(key)`
Deletes stored data
```javascript
db.remove('user')
  .then(() => console.log('Removed'));
```

#### `clear()`
Clears all data
```javascript
db.clear()
  .then(() => console.log('Cleared'));
```

#### `length()`
Gets count of stored items
```javascript
db.length()
  .then(count => console.log(count));
```

#### `typeOf(key)`
Gets type of stored value
```javascript
db.typeOf('user')
  .then(type => console.log(type)); // 'object'
```

## Practical Examples

### Authentication Flow
```javascript
// Login
storage.set('authToken', 'xyz789');
cookie.set('sessionID', 'sess_abc123');

// Logout
storage.remove('authToken');
cookie.remove('sessionID');
```

### User Preferences
```javascript
const prefsDB = new DB('userPreferences');

// Save preferences
prefsDB.save('settings', {darkMode: true, fontSize: 16});

// Retrieve preferences
prefsDB.get('settings')
  .then(settings => applyTheme(settings.darkMode));
```

### Shopping Cart
```javascript
const cartDB = new DB('shoppingCart');

// Add item
cartDB.get('items')
  .then(items => {
    items = items || [];
    items.push(newItem);
    return cartDB.save('items', items);
  });
```

## Key Differences

| Feature        | localStorage | Cookies       | IndexedDB       |
|---------------|--------------|---------------|-----------------|
| Capacity      | ~5MB         | ~4KB          | >250MB          |
| Persistence   | Persistent   | Configurable  | Persistent      |
| Server Access | No           | Yes           | No              |
| Data Type     | Key-Value    | Key-Value     | Structured      |
| Performance   | Sync         | Sync          | Async           |

Choose the appropriate storage based on:
- Data size requirements
- Need for server accessibility
- Complexity of data structures
- Performance needs