# **Random Utility Functions - Complete Guide**

This utility provides easy ways to generate random numbers, strings, passwords, colors, and more for your JavaScript projects.

## **1. Random Numbers**

### **`Random.int(min, max)`**
Generates a whole number between `min` and `max` (both included).

```javascript
// Get a random number from 1 to 6 (like rolling a die)
Random.int(1, 6);  // Possible results: 1, 2, 3, 4, 5, or 6

// Get a random age between 18 and 65
Random.int(18, 65);  // Possible results: 23, 45, 60, etc.
```

### **`Random.float(min, max, decimalPlaces)`**
Generates a decimal number between `min` and `max`. You can limit decimal places.

```javascript
// Get a random percentage (0% to 100%)
Random.float(0, 100);  // Possible results: 37.2837491, 99.999999

// Get a random price between $10 and $20 with 2 decimal places
Random.float(10, 20, 2);  // Possible results: 15.99, 12.50, 19.95
```

---

## **2. Random Strings & Passwords**

### **`Random.char(str)`**
Picks a random character from a given string.

```javascript
// Get a random vowel
Random.char("AEIOU");  // Possible results: "A", "E", "I", "O", or "U"

// Get a random hex digit
Random.char("0123456789ABCDEF");  // Possible results: "3", "A", "F", etc.
```

### **`Random.word(length = 5)`**
Generates a random lowercase word of given length (default: 5 letters).

```javascript
// Get a random 5-letter word
Random.word();  // Possible results: "apple", "zebra", "house"

// Get a random 8-letter word
Random.word(8);  // Possible results: "elephant", "keyboard", "mountain"
```

### **`Random.password(length, options)`**
Generates a secure password with customizable rules.

```javascript
// Basic 12-character password (default)
Random.password();  // Example: "Xk5#pL9@mB2$"

// 16-character password with only letters and numbers
Random.password(16, true, true, true, false, false);  // Example: "Xk5pL9mB2vN1qR7t"

// 8-character password with symbols only
Random.password(8, false, false, false, false, true);  // Example: "@#$%^&*!"
```

#### **Password Options Explained:**
| Parameter | Default | Description |
|-----------|---------|-------------|
| `allowLower` | `true` | Include lowercase letters (a-z) |
| `allowUpper` | `true` | Include uppercase letters (A-Z) |
| `allowNum` | `true` | Include numbers (0-9) |
| `allowOp` | `false` | Include operators (+-*/=) |
| `allowSym` | `false` | Include symbols (!@#$%^&*) |

### **`Random.str(length, options)`**
Same as `password()` but with clearer parameter names.

```javascript
// 10-character alphanumeric string
Random.str(10, true, true, true, false);  // Example: "P3jK8mN2qL"

// 6-character uppercase-only string
Random.str(6, false, true, false, false);  // Example: "ABCDEF"
```

#### **String Options Explained:**
| Parameter | Default | Description |
|-----------|---------|-------------|
| `includeLowercase` | `true` | Include lowercase letters (a-z) |
| `includeUppercase` | `true` | Include uppercase letters (A-Z) |
| `includeNumbers` | `true` | Include numbers (0-9) |
| `includeOperators` | `false` | Include operators (+-*/=) |
| `includeSymbols` | `false` | Include symbols (!@#$%^&*) |

---

## **3. Special Random Generators**

### **`Random.color(alpha = 1)`**
Generates a random RGBA color.

```javascript
// Random opaque color
Random.color();  // Example: "rgba(123, 45, 67, 1)"

// Random semi-transparent color
Random.color(0.5);  // Example: "rgba(210, 87, 143, 0.5)"
```

### **`Random.bool()`**
Returns `true` or `false` randomly.

```javascript
Random.bool();  // Possible results: true or false
```

### **`Random.date(start, end)`**
Generates a random date between two dates.

```javascript
// Random date in 2023
Random.date('2023-01-01', '2023-12-31');  // Example: "2023-07-15T00:00:00.000Z"

// Random birthday for someone aged 18-65
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 65);
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);
Random.date(minDate, maxDate);  // Example random birthday
```

---

## **4. Advanced Random Generators**

### **`Random.arrItem(array)`**
Picks a random item from an array.

```javascript
const colors = ["red", "green", "blue", "yellow"];
Random.arrItem(colors);  // Possible results: "red", "green", "blue", or "yellow"
```

### **`Random.weighted(weights)`**
Chooses an index based on weights (for probability-based selection).

```javascript
// 60% chance of 0, 30% chance of 1, 10% chance of 2
Random.weighted([60, 30, 10]);  // Most likely returns 0, sometimes 1, rarely 2
```

### **`Random.uuid()`**
Generates a random UUID (Universally Unique Identifier).

```javascript
Random.uuid();  // Example: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"
```

---

## **Practical Examples**

### **1. Generating User Data**
```javascript
const mockUser = {
  id: Random.uuid(),
  username: Random.word(8),
  password: Random.password(12),
  joinDate: Random.date('2020-01-01', new Date()),
  isActive: Random.bool(),
  favoriteColor: Random.color()
};
```

### **2. Random Password Generator UI**
```javascript
function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeSymbols = document.getElementById('symbols').checked;
  
  const password = Random.password(length, true, true, true, false, includeSymbols);
  document.getElementById('result').textContent = password;
}
```

### **3. Weighted Random Selection**
```javascript
const prizes = ["Gold", "Silver", "Bronze"];
const weights = [10, 30, 60]; // 10% Gold, 30% Silver, 60% Bronze

const prizeIndex = Random.weighted(weights);
const prizeWon = prizes[prizeIndex];  // Most likely "Bronze"
```
