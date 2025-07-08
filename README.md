# **Murgo documentation**

### **1. Element Selection**
#### `$(selector)`
```javascript
// Selects the FIRST matching element (like document.querySelector)
const header = $('#header');
const submitBtn = $('button[type="submit"]');
```

#### `$$(selector)`
```javascript
// Selects ALL matching elements (returns NodeList like document.querySelectorAll)
const allImages = $$('img');
const listItems = $$('ul li');
```

---

### **2. Visibility Control**
#### `hide(element)`
```javascript
// Hides single element
hide($('#sidebar'));

// Hides multiple elements (NodeList/Array)
hide($$('.tooltips')); 
```

#### `show(element)`
```javascript
// Shows single element
show($('#modal'));

// Shows multiple elements
show($$('.hidden-elements'));
```

#### `toggle(element)`
```javascript
// Toggles single element
toggle($('#dropdown-menu'));

// Toggles multiple elements
toggle($$('.expandable-sections'));
```

---

### **3. Element Removal**
#### `kill(element)`
```javascript
// Removes single element
kill($('#old-banner'));

// Removes multiple elements
kill($$('.expired-notifications'));
```

---

### **4. DOM Manipulation (Prototype Methods)**
#### `.append() / .prepend()`
```javascript
// Append HTML string
$('#list').append('<li>New Item</li>');

// Prepend DOM node
const div = document.createElement('div');
$('#container').prepend(div);
```

#### `.addClass() / .removeClass() / .toggleClass() / .hasClass()`
```javascript
$('#box')
  .addClass('active')       // Adds class
  .removeClass('inactive')  // Removes class
  .toggleClass('visible');  // Toggles class

if ($('#item').hasClass('highlight')) {  // Checks class
  // Do something
}
```

---

### **5. Attributes & Data**
#### `.attr()`
```javascript
// Set attribute
$('#image').attr('src', 'new-image.jpg');

// Get attribute
const userId = $('#profile').attr('data-user-id');
```

---

### **6. Style Management**
#### `.css()`
```javascript
// Set single property
$('#box').css('background-color', 'blue');

// Set multiple properties
$('#box').css({
  'padding': '20px',
  'border-radius': '5px'
});

// Get property value
const fontSize = $('#text').css('font-size');
```

---

### **7. Event Handling**
#### `.on() / .off() / .trigger()`
```javascript
// Add event listener
$('#button').on('click', (e) => {
  console.log('Button clicked!');
});

// Remove event listener
$('#button').off('click', clickHandler);

// Trigger custom event
$('#element').trigger('custom-event', { detail: 'data' });
```

---

### **8. Method Chaining**
```javascript
$('#widget')
  .addClass('active')
  .css('color', 'red')
  .on('mouseenter', showTooltip)
  .append('<span>+</span>')
  .hide()
  .show();
```
Here's the complete **detailed documentation** for your extended DOM manipulation methods, organized by functionality:

---

### **9. NodeList Extensions**
#### `.each(callback)`
```javascript
// Iterates through NodeList (chainable)
$$('li').each((el, index) => {
  console.log(`Item ${index}:`, el.textContent);
}).addClass('processed');
```

#### `.toArray()`
```javascript
// Converts NodeList to real Array
const buttonsArray = $$('button').toArray();
buttonsArray.push(document.createElement('button'));
```

#### `.get(index)`
```javascript
// Gets specific element by index
const thirdItem = $$('.items').get(2);
thirdItem.addClass('highlight');
```

---

### **10. Property Management**
#### `.prop(name, [value])`
```javascript
// Get property
const isChecked = $('#checkbox').prop('checked');

// Set property
$('#input').prop('disabled', true);
```

#### `.removeProp(name)`
```javascript
// Remove property
$('#element').removeProp('__customData');
```

---

### **11. Attribute Management**
#### `.removeAttr(name)`
```javascript
// Remove attribute
$('#image').removeAttr('alt');
```

---

### **12. Data Storage**
#### `.data(name, [value])`
```javascript
// Set data
$('#user').data('id', 12345);

// Get data
const userId = $('#user').data('id');
```

#### `.removeData(name)`
```javascript
// Remove specific data
$('#temp-element').removeData('cache');
```

#### `.hasData()`
```javascript
// Check if element has any data attributes
if ($('#widget').hasData()) {
  console.log('Contains custom data');
}
```

---

### **13. Dimension Methods**
#### `.ofs()`
```javascript
// Get bounding rectangle
const rect = $('#box').ofs();
console.log(rect.top, rect.left, rect.width, rect.height);
```

#### `.height([value]) / .width([value])`
```javascript
// Get dimensions
const boxHeight = $('#container').height();

// Set dimensions
$('#resizable').height(300).width('50%');
```

#### `.innerHeight() / .outerHeight([includeMargin])`
```javascript
// Content height excluding padding
const contentHeight = $('#article').innerHeight();

// Full height including padding + optional margin
const totalHeight = $('#modal').outerHeight(true);
```

---

### **14. Scrolling Properties**
#### `.scrollTop() / .scrollLeft()`
```javascript
// Get scroll position
const scrollY = $('#scrollable').scrollTop();

// Set scroll position
$('#container').scrollTop(0);
```

---

### **15. Method Availability**
All methods are automatically added to both:
- Single elements (`Element.prototype`)
- NodeLists (`NodeList.prototype`)

```javascript
// Works on single elements
$('#main').height(500);

// Works on multiple elements
$$('.panels').height(300);
```
Here's the complete documentation for your extended DOM manipulation methods, organized by functionality:

### **16. NodeList Navigation**
#### `.first() / .last()`
```javascript
const firstItem = $$('li').first(); // First element in collection
const lastItem = $$('li').last();  // Last element in collection
```

### **17. DOM Relationship Checks**
#### `.has(selector)`
```javascript
// Check if element contains matching descendant
if ($('#container').has('.active-item')) {
  // Container has at least one .active-item
}

// Filter NodeList to elements containing matches
const containersWithItems = $$('.container').has('.item');
```

#### `.is(selector)`
```javascript
// Check if element matches selector
if ($('#btn').is('[disabled]')) {
  // Button is disabled
}

// Filter NodeList to matching elements
const activeItems = $$('.item').is('.active');
```

### **18. Sibling Insertion**
#### `.before(content)` / `.after(content)`
```javascript
// Insert HTML before element
$('#target').before('<div>New Before</div>');

// Insert DOM node after element
const newDiv = document.createElement('div');
$('#target').after(newDiv);

// Works on NodeLists too
$$('.items').before('<hr>');
```

### **19. Advanced DOM Insertion**
#### `.appendTo(target)` / `.prependTo(target)`
```javascript
// Move existing element
$('#movable').appendTo('#container');

// Create and prepend
document.createElement('div')
  .addClass('header')
  .prependTo('#main');
```

#### `.insertBefore(target)` / `.insertAfter(target)`
```javascript
// Precise positioning
$('#new-item').insertBefore('#reference');

// Chainable positioning
document.createElement('span')
  .insertAfter('#title')
  .addClass('badge');
```

### **20. Element Detachment**
#### `.detach()`
```javascript
// Remove while maintaining reference
const detached = $('#temporary').detach();

// Can be reinserted later
detached.appendTo('#new-location');
```

### **21. Width Calculations**
#### `.innerWidth()` / `.outerWidth([includeMargin])`
```javascript
// Content width excluding padding
const contentWidth = $('#article').innerWidth();

// Full width including optional margin
const totalWidth = $('#widget').outerWidth(true);
```

### **22. Position Utilities**
#### `.offset()`
```javascript
// Get document-relative position
const pos = $('#element').offset();
console.log(pos.top, pos.left);  // Relative to document
```

### **23. Animation Queue**
#### `.queue(fn)` / `.dequeue()`
```javascript
// Create animation sequence
$('#box')
  .queue(next => {
    this.style.left = '100px';
    setTimeout(next, 500);
  })
  .queue(next => {
    this.style.top = '50px';
    next();
  });

// Manual dequeue
$('#element').dequeue();
```

### **24. Promise Support**
#### `.delay(ms)`
```javascript
// Create timed sequences
$('#notification')
  .fadeTo(1, 200)
  .delay(2000)
  .fadeTo(0, 200);
```

### **25. Specialized Wrapping**
#### `.wrapInner(wrapper)`
```javascript
// Wrap contents only
$('#card').wrapInner('<div class="content-wrap"></div>');
```

### **26. Collection Management**
#### `.addBack()`
```javascript
// Include previous selection
$$('li.active')
  .nextAll()
  .addBack()  // Includes original .active items
  .addClass('highlight');
```

```javascript
// Complex example combining multiple features
$$('.draggable')
  .wrap('<div class="drag-container"></div>')
  .each((el, i) => {
    el.data('index', i)
      .queue(next => {
        el.animate({ opacity: 0.5 }, 200, next);
      })
      .queue(next => {
        el.insertAfter('#reference-point');
        next();
      });
  });
```
### **27. Position Utilities**
#### `.position()`
```javascript
// Get element position relative to offset parent
const pos = $('#element').position();
console.log(pos.top, pos.left);  // Relative to positioned parent
```

### **28. Fade Animations**
#### `.fadeIn(duration)`
```javascript
// Fade in hidden element
$('#hidden').fadeIn(500);  // 500ms animation
```

#### `.fadeOut(duration)`
```javascript
// Fade out element
$('#alert').fadeOut(300).then(() => {
  console.log('Fade complete');
});
```

#### `.fadeToggle(duration)`
```javascript
// Toggle fade state
$('#panel').fadeToggle(400);
```

### **29. Slide Animations**
#### `.slideUp(duration)`
```javascript
// Slide up to hide
$('#menu').slideUp(250);
```

#### `.slideDown(duration)`
```javascript
// Slide down to show
$('#content').slideDown(300);
```

#### `.slideToggle(duration)`
```javascript
// Toggle slide state
$('#details').slideToggle(350);
```

### **30. Animation Control**
#### `.finish()`
```javascript
// Complete all queued animations immediately
$('#animated').finish();
```

### **31. Event Shortcuts**
#### Event-specific methods
```javascript
// All standard DOM events as methods
$('#btn').click(() => console.log('Clicked!'));
$('#input').focus().keydown(e => console.log(e.key));

// Trigger events without handlers
$('#modal').mouseenter();  // Triggers mouseenter event
```

#### `.hover(enter, leave)`
```javascript
// Hover shortcut
$('#item').hover(
  () => $(this).addClass('hover'),
  () => $(this).removeClass('hover')
);
```

### **32. Special Event Handlers**
#### `.one(event, handler)`
```javascript
// One-time event handler
$('#btn').one('click', () => {
  console.log('Will only fire once');
});
```

#### `.triggerHandler(event, detail)`
```javascript
// Trigger event without bubbling
$('#element').triggerHandler('custom', {data: 'info'});
```

### **33. Delegated Events**
#### `.live(event, selector, handler)`
```javascript
// Document-level delegation
$('body').live('click', '.dynamic', function() {
  console.log('Clicked dynamic element');
});
```

#### `.delegate(event, selector, handler)`
```javascript
// Container-specific delegation
$('#container').delegate('click', '.item', function() {
  console.log('Clicked item within container');
});
```

### **Complete Method Chaining Example**
```javascript
$('#widget')
  .fadeOut(200)
  .delay(300)
  .queue(next => {
    this.html('New Content');
    next();
  })
  .slideDown(400)
  .click(() => $(this).toggleClass('active'))
  .hover(
    () => $(this).css('background', '#eee'),
    () => $(this).css('background', '')
  );
```
### **34. Event Management Extensions**
#### `.offAll()`
```javascript
// Remove ALL event handlers by cloning the element
$('#element').offAll();  // Returns new clean clone
```

#### `.toggleClick(fn1, fn2)`
```javascript
// Alternate click handlers
$('#toggle-btn').toggleClick(
  () => console.log('First click'),
  () => console.log('Second click')
);
```

#### `.bind()` / `.unbind()` (Aliases)
```javascript
// Alias for addEventListener/removeEventListener
$('#btn').bind('click', handler);
$('#btn').unbind('click', handler);
```

#### `.triggerOnce(event, detail)`
```javascript
// Only dispatch event if not previously triggered
$('#element').triggerOnce('init', {config: true});
```

#### `.pauseEvent(event)`
```javascript
// Stop event propagation and prevent default
document.addEventListener('click', e => {
  $('#protected-area').pauseEvent(e);
});
```

### **35. Form Handling**
#### `.serialize()`
```javascript
// Convert form to URL-encoded string
const query = $('#search-form').serialize();
// "q=term&category=books"
```

#### `.serializeArray()`
```javascript
// Get form data as array of objects
const data = $('#user-form').serializeArray();
// [{name: 'email', value: 'test@example.com'}, ...]
```

### **36. DOM Traversal**
#### `.parents()`
```javascript
// Get all ancestor elements
$('#child').parents();  // [parent, grandparent, body, html]
```

#### `.parentsUntil(selector)`
```javascript
// Get ancestors up to (but not including) matching element
$('#item').parentsUntil('.container');
```

#### `.siblings()`
```javascript
// Get all sibling elements
$('#middle-child').siblings();
```

#### `.nextUntil()` / `.prevUntil()`
```javascript
// Get following/preceding siblings until selector
$('#start').nextUntil('.end-marker');
$('#end').prevUntil('.start-marker');
```

#### `.contents()`
```javascript
// Get all child nodes (including text nodes)
$('#container').contents();
```

### **37. Position & Index**
#### `.offsetParent()`
```javascript
// Get nearest positioned ancestor
$('#element').offsetParent();
```

#### `.index()`
```javascript
// Get position among siblings
const pos = $('#item').index();  // 0-based position
```

### **38. Collection Filtering**
#### `.eq(index)`
```javascript
// Get element at specific index (always returns array)
$$('li').eq(2);  // [third-li-element]
```

#### `.filter()`
```javascript
// Filter by selector or function
$$('div').filter('.active');  // Only divs with .active class
$$('input').filter(el => el.value.length > 0);  // Only filled inputs
```

#### `.not()`
```javascript
// Exclude elements
$$('tr').not('.hidden');  // All trs except .hidden
```

#### `.map()`
```javascript
// Transform elements
const ids = $$('.item').map(el => el.id);  // Array of IDs
```

#### `.slice()`
```javascript
// Get subset of elements
$$('li').slice(1, 3);  // Second and third li
```

### **Complete Usage Example**
```javascript
// Complex DOM manipulation
$('#user-form')
  .serializeArray()
  .filter(item => item.value)
  .map(item => `${item.name}=${encodeURIComponent(item.value)}`)
  .join('&');

// Advanced event handling
$('#gallery')
  .delegate('click', '.thumbnail', function() {
    $(this)
      .toggleClick(
        () => this.classList.add('zoomed'),
        () => this.classList.remove('zoomed')
      )
      .triggerOnce('first-interaction');
  })
  .parentsUntil('body')
  .css('background', '#f5f5f5');
```
### **39. Object Prototype Extensions**

#### `.isEmpty()`
```javascript
// Check if object has no enumerable properties
({}).isEmpty();  // true
({key: 'value'}).isEmpty();  // false
```

#### `.forEach(fn)`
```javascript
// Iterate through key-value pairs
const config = {color: 'red', size: 'large'};
config.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

#### `.map(fn)`
```javascript
// Create new object with transformed values
const prices = {apple: 1, banana: 2};
const salePrices = prices.map(price => price * 0.8);
// {apple: 0.8, banana: 1.6}
```

#### `.filter(fn)`
```javascript
// Create subset object
const user = {name: 'Alex', age: 25, admin: false};
const publicData = user.filter((_, key) => key !== 'age');
// {name: 'Alex', admin: false}
```

#### `.reduce(fn, initialValue)`
```javascript
// Reduce object to single value
const cart = {shirt: 20, pants: 30};
const total = cart.reduce((sum, price) => sum + price, 0);
// 50
```

#### `.pick(...keys)`
```javascript
// Select specific properties
const book = {title: 'JS Guide', author: 'MDN', year: 2023};
book.pick('title', 'author'); 
// {title: 'JS Guide', author: 'MDN'}
```

#### `.omit(...keys)`
```javascript
// Exclude specific properties
const settings = {theme: 'dark', notify: true, sound: false};
settings.omit('sound');
// {theme: 'dark', notify: true}
```

---

### **Key Features (Object Extensions)**
1. **Non-destructive** - All methods return new objects rather than modifying originals
2. **Chainable** - Can be combined with other methods:
   ```javascript
   const processed = data
     .filter(v => v !== null)
     .map(v => v * 2)
     .pick('valid', 'values');
   ```
3. **Consistent with Array** - Follows similar patterns to Array prototype methods
4. **ES6+ Compatible** - Uses modern features like `Object.fromEntries()`

### **Complete Example**
```javascript
const product = {
  id: 123,
  name: 'Widget',
  price: 9.99,
  stock: 0,
  metadata: {sku: 'WID-2023'}
};

const summary = product
  .pick('name', 'price', 'stock')
  .map((val, key) => key === 'price' ? val * 1.1 : val)  // Add 10% tax
  .filter(val => val !== 0);  // Remove out-of-stock items

// Result: {name: 'Widget', price: 10.989}
```
### **40. String Encryption & Encoding**
#### `.encrypt()` / `.decrypt()`
```javascript
// Base64 encoding/decoding (for basic obfuscation)
const secret = "Confidential".encrypt();  // "Q29uZmlkZW50aWFs"
secret.decrypt();  // "Confidential"
```

---

### **41. String Manipulation**
#### `.shuffle()`
```javascript
// Randomize character order
"abcdef".shuffle();  // Possible output: "dbfaec"
```

#### `.reverse()`
```javascript
// Reverse string
"hello".reverse();  // "olleh"
```

---

### **42. Word Operations**
#### `.firstWord()` / `.lastWord()`
```javascript
// Get first/last word
"The quick brown fox".firstWord();  // "The"
"The quick brown fox".lastWord();   // "fox"
```

#### `.getWord(index)`
```javascript
// Get specific word
"JavaScript is awesome".getWord(1);  // "is"
```

#### `.longestWord()` / `.shortestWord()`
```javascript
"Find the longest word".longestWord();  // "longest"
"Find the shortest word".shortestWord(); // "the"
```

---

### **43. Frequency Analysis**
#### `.mostFrequentWord()` / `.leastFrequentWord()`
```javascript
"a a b c c c d".mostFrequentWord();  // "c"
"a a b c c c d".leastFrequentWord(); // "b"
```

#### `.mostFrequentChar()` / `.leastFrequentChar()`
```javascript
"mississippi".mostFrequentChar();  // "i"
"mississippi".leastFrequentChar(); // "m"
```

---

### **44. Case Conversion**
#### `.toCamelCase()` / `.toSnakeCase()`
```javascript
"user_name".toCamelCase();    // "userName"
"userName".toSnakeCase();     // "user_name"
```

#### `.toTitleCase()`
```javascript
"the lord of the rings".toTitleCase();  // "The Lord Of The Rings"
```

---

### **45. Utility Methods**
#### `.countOccurrences(sub)`
```javascript
"banana".countOccurrences("na");  // 2
```

#### `.truncate(len, ellipsis)`
```javascript
"Long text to shorten".truncate(10);  // "Long text..."
```

#### `.removeHTMLTags()`
```javascript
"<div>Hello</div>".removeHTMLTags();  // "Hello"
```

---

### **46. String Checks**
#### `.isUpperCase()` / `.isLowerCase()`
```javascript
"HELLO".isUpperCase();  // true
"hello".isLowerCase();  // true
```

#### `.contains(sub)`
```javascript
"Welcome".contains("come");  // true
```

---

### **47. Random Selection**
#### `.randomChara()` / `.randomWord()`
```javascript
"ABCDEF".randomChara();  // Random character
"Pick random word".randomWord();  // Random word
```

---

### **48. Special Formatting**
#### `.toSlug()`
```javascript
"Blog Post Title".toSlug();  // "blog-post-title"
```

#### `.textBetween(start, end)`
```javascript
"Data[123]End".textBetween("Data[", "]");  // "123"
```

---

### **Complete Example Usage**
```javascript
const text = "The quick brown fox jumps over the lazy dog";

// Analysis example
console.log(
  text.mostFrequentWord(),  // "the" (case-sensitive)
  text.longestWord(),       // "quick"
  text.countOccurrences("o") // 4
);

// Transformation pipeline
const processed = " user_first_name "
  .trim()
  .toSnakeCase()
  .toUpperCase();  // "USER_FIRST_NAME"
```
### **49. Array Accessors**
#### `.first()`
```javascript
// Get first element
[1, 2, 3].first();  // 1
[].first();          // undefined
```

#### `.last()`
```javascript
// Get last element
['a', 'b', 'c'].last();  // 'c'
```

#### `.random()`
```javascript
// Get random element
[10, 20, 30].random();  // 20 (random)
```

---

### **50. Array Manipulation**
#### `.shuffle()`
```javascript
// Mutates and returns the shuffled array
const deck = [1, 2, 3, 4, 5];
deck.shuffle();  // [3, 1, 5, 2, 4] (random order)
```

#### `.unique()`
```javascript
// Remove duplicates
[1, 2, 2, 3].unique();  // [1, 2, 3]
```

#### `.compact()`
```javascript
// Remove falsy values
[0, 1, false, 2, '', 3].compact();  // [1, 2, 3]
```

---

### **51. Object Array Operations**
#### `.groupBy(key)`
```javascript
// Group objects by property
const users = [
  {id: 1, name: 'John', role: 'admin'},
  {id: 2, name: 'Jane', role: 'user'}
];
users.groupBy('role');
/* {
  admin: [{id: 1, name: 'John', role: 'admin'}],
  user: [{id: 2, name: 'Jane', role: 'user'}]
} */
```

#### `.pluck(key)`
```javascript
// Extract property values
users.pluck('name');  // ['John', 'Jane']
```

---

### **52. Mathematical Operations**
#### `.sum()`
```javascript
// Sum all numbers
[1, 2, 3].sum();  // 6
```

#### `.avg()`
```javascript
// Calculate average
[10, 20, 30].avg();  // 20
```

#### `.max()` / `.min()`
```javascript
[5, 1, 9].max();  // 9
[5, 1, 9].min();  // 1
```

---

### **53. Array Structuring**
#### `.chunk(size)`
```javascript
// Split into chunks
[1, 2, 3, 4, 5].chunk(2);  // [[1, 2], [3, 4], [5]]
```

#### `.diff(arr)` / `.intersect(arr)`
```javascript
// Compare arrays
[1, 2, 3].diff([2, 4]);       // [1, 3]
[1, 2, 3].intersect([2, 4]);  // [2]
```

---

### **Complete Usage Example**
```javascript
const products = [
  {id: 1, name: 'Laptop', price: 999, category: 'electronics'},
  {id: 2, name: 'Shirt', price: 25, category: 'clothing'},
  {id: 3, name: 'Phone', price: 699, category: 'electronics'}
];

// Complex operations
const analysis = {
  categories: products.groupBy('category'),
  avgPrice: products.pluck('price').avg(),
  expensiveItems: products.filter(p => p.price > 500).pluck('name'),
  randomProduct: products.shuffle().first()
};
/* Result:
{
  categories: {
    electronics: [...],
    clothing: [...]
  },
  avgPrice: 574.33,
  expensiveItems: ['Laptop', 'Phone'],
  randomProduct: {id: 2, ...} (random)
}
*/
```

### **Key Features**
1. **Chainable** - Most methods return arrays for further operations
   ```javascript
   [1, 2, 3, 4]
     .filter(n => n > 2)
     .map(n => n * 2)
     .sum();  // 14
   ```
2. **Mixed Data Support** - Works with arrays of primitives and objects
3. **Performance Optimized** - Uses native methods where possible
### **54. LocalStorage Wrapper (`storage`)**
#### `storage.set(key, value)`
```javascript
// Stores data (automatically stringifies objects)
storage.set('user', {name: 'John'})
  .set('theme', 'dark');
```

#### `storage.get(key)`
```javascript
// Retrieves data (auto-parses JSON)
const user = storage.get('user');  // {name: 'John'}
```

#### `storage.remove(key)`
```javascript
// Removes single item
storage.remove('theme');
```

#### `storage.clear()`
```javascript
// Clears all localStorage
storage.clear();
```

#### `storage.all()`
```javascript
// Gets all stored data as object
const allData = storage.all();
// {user: {name: 'John'}, otherKey: 'value'}
```

---

### **55. Cookie Manager (`cookie`)**
#### `cookie.set(key, value, days)`
```javascript
// Sets cookie with expiration (default 7 days)
cookie.set('session', 'abc123', 1);  // Expires in 1 day
```

#### `cookie.get(key)`
```javascript
// Gets cookie value
const session = cookie.get('session');  // 'abc123'
```

#### `cookie.remove(key)`
```javascript
// Deletes cookie
cookie.remove('session');
```

#### `cookie.all()`
```javascript
// Gets all cookies as object
const allCookies = cookie.all();
// {session: 'abc123', preference: 'light'}
```

#### `cookie.clear()`
```javascript
// Removes all cookies
cookie.clear();
```

---

### **56. IndexedDB Wrapper (`DB`)**
#### Initialization
```javascript
const db = new DB('myDatabase');
```

#### `db.save(key, data)`
```javascript
// Stores any data type
db.save('user-settings', {darkMode: true})
  .then(() => console.log('Saved'));
```

#### `db.get(key)`
```javascript
// Retrieves stored data
db.get('user-settings').then(settings => {
  console.log(settings.darkMode);
});
```

#### `db.remove(key)`
```javascript
// Deletes entry
db.remove('temp-data');
```

#### `db.clear()`
```javascript
// Clears entire database
db.clear();
```

#### `db.length()`
```javascript
// Gets count of entries
db.length().then(count => {
  console.log(`${count} items stored`);
});
```

#### `db.typeOf(key)`
```javascript
// Checks stored data type
db.typeOf('user').then(type => {
  console.log(type);  // 'object', 'array', 'string', etc.
});
```

---

### **57. DOM Ready Helper (`ready`)**
```javascript
// Waits for element to exist
ready('#app', app => {
  app.append('<div>Loaded!</div>');
});

// Works with direct elements too
ready(document.body, body => {
  body.style.background = 'white';
});
```

---

### **Complete Usage Example**
```javascript
// Combined storage workflow
storage.set('user', {id: 123})
  .set('last-viewed', Date.now());

cookie.set('tracking', 'enabled', 30);

const userDB = new DB('user-data');
userDB.save('preferences', {notifications: true});

// Load when ready
ready('#app', async container => {
  const user = storage.get('user');
  const prefs = await userDB.get('preferences');
  
  container.html(`
    <div>Welcome ${user.name}</div>
    ${prefs.notifications ? '<div class="alert">New notifications</div>' : ''}
  `);
});
```
### **58. Lifecycle Management**
#### `start(callback)`
```javascript
// Runs callback when window loads
start(() => {
  console.log('Page fully loaded');
});
```

#### `end()`
```javascript
// Closes current window
end();  // Use with caution - immediately closes window
```

---

### **59. DOM Observation**
#### `observe(element, callback, options)`
```javascript
// Watch for DOM changes
const stop = observe(document.body, mutations => {
  console.log('DOM changed:', mutations);
});

// Later disconnect
stop();
```

---

### **60. Keyboard Shortcuts**
#### `hotkeys(combo, handler)`
```javascript
// Register hotkey
const removeHotkey = hotkeys('ctrl+shift+k', e => {
  console.log('Shortcut pressed', e);
});

// Remove later
removeHotkey();
```

---

### **61. Data Loading**
#### `loadText(url)`
```javascript
// Load text content
loadText('data.txt').then(text => console.log(text));
```

#### `loadJson(url)`
```javascript
// Load and parse JSON
loadJson('data.json').then(data => console.log(data.users));
```

---

### **62. Type Checking**
#### Type predicates
```javascript
isArr([]);      // true
isObj({});       // true
isStr('text');   // true
isNum(42);       // true
isFun(() => {}); // true
isNul(null);     // true
isUnd(undefined); // true
isEl(document.body); // true
```

---

### **63. Performance & Optimization**
#### `bench(fn)`
```javascript
// Measure execution time
const time = bench(() => {
  heavyCalculation();
});
console.log(`Took ${time}ms`);
```

#### `lazy(selector, options)`
```javascript
// Lazy-load images
const observer = lazy('.lazy-img', {
  threshold: 0.1
});
```

#### `memoize(fn)`
```javascript
// Cache function results
const factorial = memoize(n => n <= 1 ? 1 : n * factorial(n - 1));
factorial(5);  // Cached for subsequent calls
```

---

### **64. Data Manipulation**
#### `deepClone(obj)`
```javascript
// Create deep copy
const original = {a: {b: 1}};
const copy = deepClone(original);
```

#### `deepEqual(a, b)`
```javascript
// Deep comparison
deepEqual({a: 1}, {a: 1});  // true
```

#### `pipe(...fns)`
```javascript
// Function composition
const process = pipe(
  str => str.trim(),
  str => str.toUpperCase(),
  str => str.split('')
);
process('  hello  ');  // ['H','E','L','L','O']
```

---

### **65. Timing Control**
#### `timer/callback/delay` & `interval`
```javascript
// Timeout with cleanup
const timerId = timer(() => {
  console.log('Delayed log');
}, 1000);

// Clear timeout
stopTimer(timerId);
```

#### `wait(ms)`
```javascript
// Async delay
async function demo() {
  await wait(500);
  console.log('After 500ms');
}
```

---

### **Complete Usage Example**
```javascript
// Combined workflow
start(async () => {
  // Load data
  const config = await loadJson('/config.json');
  
  // Set up hotkey
  hotkeys('ctrl+p', () => {
    const time = bench(() => {
      processData(deepClone(config));
    });
    console.log(`Processed in ${time}ms`);
  });

  // Lazy load images
  lazy('[data-src]');

  // Watch for changes
  observe('#content', mutations => {
    console.log('Content area changed');
  });
});
```
### **66. Random Utilities (Correct Implementation)**

#### `random.int(min, max)`
```javascript
// Returns random integer between min and max (inclusive)
random.int(1, 10);  // Example: 7
```

#### `random.float(min, max, decimalPlaces)`
```javascript
// Returns random float between min and max
random.float(0, 1);         // Example: 0.7234234
random.float(0, 1, 2);      // Example: 0.72 (2 decimal places)
```

---

### **67. String Generation**

#### `random.str(length, includeUppercase, includeLowercase, includeSymbols, includeNumbers, includeOperators)`
```javascript
// Generate random string with exact parameter order:
random.str(
  10,            // length
  true,          // includeUppercase (A-Z)
  true,          // includeLowercase (a-z)
  false,         // includeSymbols (!@#$)
  true,          // includeNumbers (0-9)
  false          // includeOperators (+-*/=)
);
// Example output: "Xk8j3P9q2R"
```

#### `random.password(length, allowLower, allowUpper, allowNum, allowOp, allowSym)`
```javascript
// Generate password with exact parameter order:
random.password(
  12,            // length
  true,          // allowLower (a-z)
  true,          // allowUpper (A-Z)
  true,          // allowNum (0-9)
  false,         // allowOp (+-*/=)
  true           // allowSym (!@#$)
);
// Example output: "gH7@kL2!mN8#"
```

---

### **68. Other Random Generators**

#### `random.color(alpha)`
```javascript
// Random RGB color (alpha optional)
random.color();    // "rgb(123, 45, 67)"
random.color(0.5); // "rgba(123, 45, 67, 0.5)"
```

#### `random.date(startDate, endDate)`
```javascript
// Random date between ranges
random.date('2020-01-01', '2023-12-31'); 
// Example: Date object for "2022-07-15"
```

#### `random.arrItem(array)`
```javascript
// Random element from array
random.arrItem(['red', 'green', 'blue']); // "green"
```
### **71. Router Core Methods**

#### `router.add(path, callback, [name])`
```javascript
// Add route with path parameters
router.add('/products/:id', (data) => {
  console.log('Showing product:', data.id);
}, 'product.view');

// Add wildcard (404) route
router.add('*', () => console.log('Page not found'));
```

#### `router.navigate(path, [data])`
```javascript
// Programmatic navigation with state
router.navigate('/products/123', {details: true});

// Updates URL and triggers route callback
```

#### `router.generate(name, [params])`
```javascript
// Generate path from route name
const url = router.generate('product.view', {id: 456});
// Returns: '/products/456'
```

---

### **72. Router Hooks & Events**

#### `router.before(callback)`
```javascript
// Global before hook
router.before((route, data) => {
  console.log('Before navigating to:', route.path);
  return true; // Return false to cancel navigation
});
```

#### `router.after(callback)`
```javascript
// Global after hook
router.after((route) => {
  console.log('Completed navigation to:', route.path);
});
```

#### `router.notFound([callback])`
```javascript
// Set/trigger 404 handler
router.notFound(() => show404Page());
```

---

### **73. Router Initialization**

#### `router.init()`
```javascript
// Start router (call once at app start)
router.init()
  .navigate(window.location.pathname);
```
### **Complete Router Example**
```javascript
// Configure routes
router
  .add('/', homeController, 'home')
  .add('/users/:id', userController, 'user.profile')
  .add('*', notFoundController)
  .before((route) => {
    if (route.path === '/admin') return checkAuth();
    return true;
  })
  .after(logNavigation)
  .init();

// Later in code
const profileUrl = router.generate('user.profile', {id: 42});
// '/users/42'

// Handle link clicks
$$('a.profile').addEventListener('click', (e) => {
  e.preventDefault();
  router.navigate('/users/42');
});
```
### **74. Component Registration**
#### `Component.register({options})`
```javascript
// Register a new component
Component.register({
  name: 'user-card',
  template: `
    <div class="user">
      <h2>{{ name }}</h2>
      <p>{{ email }}</p>
      <button @click="handleClick">View Profile</button>
    </div>
  `,
  data: () => ({
    name: 'Default User',
    email: 'user@example.com'
  }),
  methods: {
    handleClick() {
      this.emit('viewProfile', {userId: this.state.id});
    }
  },
  styles: `
    .user { border: 1px solid #ccc; padding: 1rem; }
    h2 { color: blue; }
  `,
  props: ['userId'],
  lifecycle: {
    beforeMount() {
      console.log('About to mount');
    },
    mounted() {
      console.log('Component mounted');
    }
  }
});
```

### **75. Component Mounting**
#### `Component.mount(name, targetSelector, [props])`
```javascript
// Mount component to DOM
Component.mount('user-card', '#app', {
  userId: 123,
  name: 'John Doe' // Overrides default data
});

// Updates automatically when state changes
```

---

### **76. Component Features**
#### Template Syntax:
```html
<!-- Data binding -->
<div>{{ dynamicValue }}</div>

<!-- Event binding -->
<button @click="handleClick">Click</button>

<!-- Refs -->
<input ref="emailInput" type="email">
<!-- Accessible via ctx.refs.emailInput -->
```

#### Lifecycle Hooks:
```javascript
lifecycle: {
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
```

---

### **77. Global State Management**
#### `Component.setGlobalState(key, value)`
```javascript
// Set global state
Component.setGlobalState('theme', 'dark');
```

#### `Component.getGlobalState(key)`
```javascript
// Get global state
const theme = Component.getGlobalState('theme');
```

#### `Component.on(event, callback)`
```javascript
// Subscribe to global events
Component.on('themeChanged', ({newTheme}) => {
  console.log('Theme changed to:', newTheme);
});
```

---

### **78. Internal Methods**
#### `Component._render()`
Handles template compilation and DOM updates

#### `Component._handleEvent()`
Manages event delegation for component actions

---

### **Complete Example**
```javascript
// 1. Register components
Component.register({
  name: 'counter',
  template: `
    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  `,
  data: () => ({ count: 0 }),
  methods: {
    increment() { this.state.count++ },
    decrement() { this.state.count-- }
  }
});

// 2. Mount component
Component.mount('counter', '#counter-container');

// 3. Global state example
Component.setGlobalState('appVersion', '1.0.0');
Component.on('appUpdate', () => {
  console.log('New version available!');
});
```

### **Complete Example**
```javascript
// 1. Register components
Component.register({
  name: 'counter',
  template: `
    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  `,
  data: () => ({ count: 0 }),
  methods: {
    increment() { this.state.count++ },
    decrement() { this.state.count-- }
  }
});

// 2. Mount component
Component.mount('counter', '#counter-container');

// 3. Global state example
Component.setGlobalState('appVersion', '1.0.0');
Component.on('appUpdate', () => {
  console.log('New version available!');
});
```
### **79. Tab System Initialization**
#### `Element.prototype.tabs(config)`
```javascript
// Basic tab setup
const tabControl = document.querySelector('.tabs-container').tabs({
  tabs: [
    { title: 'Profile', content: '<div>Profile info</div>' },
    { title: 'Settings', content: '<div>Settings panel</div>' }
  ],
  activeIndex: 0,
  animation: 'slide', // or 'fade'
  persist: true,     // Remember last active tab
  lazyLoad: false
});
```

---

### **80. Configuration Options**
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `tabs` | Array | `[]` | Array of `{title, content}` objects |
| `activeIndex` | Number | `0` | Initially active tab index |
| `animation` | String | `'fade'` | Transition effect (`'fade'` or `'slide'`) |
| `persist` | Boolean | `false` | Remember active tab between page loads |
| `lazyLoad` | Boolean | `false` | Load tab content only when activated |

---

### **81. Tab Object Structure**
```javascript
{
  title: 'Tab Title',      // Display text
  content: 'HTML/String',  // Content or function returning Promise
  id: 'optional-id',       // For hash navigation
  loaded: false            // Internal lazy-load flag
}
```

---

### **82. Public Methods**
#### `addTab(tab)`
```javascript
// Add new tab
tabControl.addTab({
  title: 'Messages',
  content: '<div>Message list</div>'
});
```

#### `removeTab(index)`
```javascript
// Remove tab by index
tabControl.removeTab(1);
```

#### `setActive(index)`
```javascript
// Switch to specific tab
tabControl.setActive(2);
```

#### `getActiveIndex()`
```javascript
// Get current tab index
const currentTab = tabControl.getActiveIndex();
```

#### `updateConfig(newConfig)`
```javascript
// Update multiple settings
tabControl.updateConfig({
  animation: 'slide',
  persist: false
});
```

---

### **83. Advanced Features**
#### Lazy Loading
```javascript
// Configure tab with async content
{
  title: 'Dashboard',
  content: () => fetch('/dashboard.html').then(r => r.text())
}
```

#### Hash Navigation
```javascript
// Links to #tab-id will automatically activate matching tab
{
  title: 'Help',
  content: '<div>Help section</div>',
  id: 'help'
}
```

#### Events
```javascript
// Listen for tab changes
window.addEventListener('tabChanged', (e) => {
  console.log('Active tab:', e.detail.index);
});
```

---

### **84. Complete Example**
```javascript
// 1. Initialize tabs
const tabs = $('#app').tabs({
  tabs: [
    {
      title: 'Home',
      content: '<div>Welcome content</div>',
      id: 'home'
    },
    {
      title: 'Gallery',
      content: () => loadGalleryContent(),
      loaded: false
    }
  ],
  persist: true,
  lazyLoad: true
});

// 2. Add tab later
tabs.addTab({
  title: 'Contact',
  content: contactFormHTML
});

// 3. Programmatic control
$('.show-gallery').addEventListener('click', () => {
  tabs.setActive(1);
});
```
### **85. Carousel Initialization**
#### `Element.prototype.carousel(config)`
```javascript
// Basic carousel setup
const myCarousel = $('.carousel-container').carousel({
  images: [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ],
  interval: 3000,
  autoplay: true
});
```

---

### **86. Configuration Options**
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `images` | Array | `[]` | Required array of image URLs |
| `interval` | Number | `5000` | Autoplay interval (ms) |
| `autoplay` | Boolean | `true` | Enable auto-rotation |
| `transition` | String | `'slide'` | `'slide'` or `'fade'` |
| `transitionDuration` | Number | `500` | Animation duration (ms) |
| `wrap` | Boolean | `true` | Infinite looping |
| `touch` | Boolean | `true` | Enable swipe gestures |
| `indicators` | Boolean | `true` | Show navigation dots |
| `controls` | Boolean | `true` | Show arrow buttons |

---

### **87. Public API**
#### `.next()`
```javascript
// Advance to next slide
myCarousel.next();
```

#### `.prev()`
```javascript
// Return to previous slide
myCarousel.prev();
```

#### `.goTo(index)`
```javascript
// Jump to specific slide (0-based)
myCarousel.goTo(2); 
```

#### `.start()`
```javascript
// Begin autoplay
myCarousel.start();
```

#### `.stop()`
```javascript
// Pause autoplay
myCarousel.stop();
```

---

### **88. Complete Usage Example**
```javascript
// 1. Initialize
const productCarousel = $('#product-images').carousel({
  images: [
    'product/angle1.jpg',
    'product/angle2.jpg',
    'product/detail.jpg'
  ],
  transition: 'fade',
  interval: 5000
});

// 2. Add external controls
$('#next-btn').on('click', () => productCarousel.next());
$('#prev-btn').on('click', () => productCarousel.prev());

// 3. Dynamic updates
function addProductImage(url) {
  productCarousel.stop();
  productCarousel.config.images.push(url);
  productCarousel.goTo(productCarousel.config.images.length - 1);
  productCarousel.start();
}
```

### **Event System**
```javascript
// Listen for slide changes
$('.carousel-container').on('carousel-change', (e) => {
  console.log('Current slide:', e.detail.index);
});
```
### **90. Tooltip Initialization**
#### `Element.prototype.tooltip(text, [position])`
```javascript
// Basic tooltip
$('#help-icon').tooltip('Click for more info');

// Positioned tooltip
$('.status-indicator').tooltip('System online', 'right');
```

---

### **91. Configuration Options**
| Parameter | Type | Values | Default | Description |
|-----------|------|--------|---------|-------------|
| `text` | String | Any | Required | Tooltip content |
| `position` | String | `'top'`, `'bottom'`, `'left'`, `'right'` | `'top'` | Display position |

---

### **92. Behavior Features**
1. **Automatic Positioning** - Calculates optimal placement
2. **Smooth Transitions** - Fade in/out animation
3. **Responsive** - Works with scroll/resize
4. **Touch Support** - Shows on mobile touch
5. **Accessible** - Proper z-index and event handling

---

### **93. Usage Examples**
#### Basic Usage
```javascript
// Add to any element
$('.info-button').tooltip('Additional details');

// Chain with other methods
$('.avatar')
  .tooltip('User profile', 'bottom')
  .css('cursor', 'pointer');
```

#### Dynamic Content
```javascript
// Update tooltip text dynamically
function updateTooltip() {
  const status = getSystemStatus();
  $('#status-indicator').tooltip(status.message, status.position);
}
```

#### Advanced Positioning
```javascript
// Position relative to element
const positions = ['top', 'right', 'bottom', 'left'];
positions.forEach(pos => {
  $(`#demo-${pos}`).tooltip(`${pos} tooltip`, pos);
});
```

---

### **94. Technical Details**
1. **DOM Injection** - Creates single tooltip element
2. **Performance** - Uses RAF for smooth animations
3. **Event Cleanup** - Automatically removes listeners
4. **Cross-Browser** - Works in all modern browsers

---

### **95. Complete Implementation Example**
```javascript
// 1. Initialize multiple tooltips
$('[data-tooltip]').each(el => {
  const text = el.getAttribute('data-tooltip');
  const position = el.getAttribute('data-tooltip-pos') || 'top';
  el.tooltip(text, position);
});

// 2. Programmatic control
const downloadBtn = $('#download-btn');
downloadBtn.tooltip('Prepare download...');

downloadBtn.on('click', () => {
  downloadBtn.tooltip('Downloading...', 'bottom');
  
  setTimeout(() => {
    downloadBtn.tooltip('Download complete!', 'bottom');
  }, 2000);
});
```
### **96. Core AJAX Methods**

#### `netvx.ajax(url, options)`
```javascript
// Basic AJAX request
netvx.ajax('/api/data', {
  method: 'POST',
  data: { id: 42 },
  headers: { 'X-Requested-With': 'netvx' }
}).then(console.log);
```

#### `netvx.get(url, [headers])`
```javascript
// GET request
netvx.get('/api/users', {
  'Cache-Control': 'no-cache'
}).then(users => {
  console.log('Loaded users:', users);
});
```

#### `netvx.post(url, data, [headers], [json])`
```javascript
// POST JSON data (default)
netvx.post('/api/users', { name: 'John' });

// POST FormData
const form = new FormData();
form.append('file', fileInput.files[0]);
netvx.post('/upload', form, {}, false);
```

---

### **97. Configuration Methods**

#### `netvx.ajaxSetup(config)`
```javascript
// Set default headers
netvx.ajaxSetup({
  headers: {
    'Authorization': 'Bearer token123',
    'Accept': 'application/json'
  }
});
```

#### `netvx.ajaxPrefilter(fn)`
```javascript
// Modify all requests
netvx.ajaxPrefilter((url, options) => {
  options.headers['X-Request-ID'] = generateId();
  if (url.startsWith('/api')) {
    options.credentials = 'include';
  }
});
```

#### `netvx.ajaxTransport(fn)`
```javascript
// Custom transport (e.g., mock server)
netvx.ajaxTransport((url, options) => {
  if (url.startsWith('/mock')) {
    return Promise.resolve(mockResponse(url));
  }
  return fetch(url, options);
});
```

---

### **98. Response Handling**

Automatic response parsing based on Content-Type:
- `application/json` → `res.json()`
- `text/*` → `res.text()`
- Others → `res.blob()`

```javascript
netvx.get('/api/text').then(text => {})  // Handles text
netvx.get('/image.png').then(blob => {}) // Handles binary
```

---

### **99. Complete Example**

```javascript
// 1. Configure defaults
netvx.ajaxSetup({
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// 2. Add request logger
netvx.ajaxPrefilter((url, options) => {
  console.log(`Requesting ${url} with`, options);
});

// 3. Make requests
async function loadData() {
  try {
    const user = await netvx.post('/api/login', {
      username: 'admin',
      password: 'secret'
    });
    
    const posts = await netvx.get('/api/posts', {
      'X-User-ID': user.id
    });
    
    console.log('User posts:', posts);
  } catch (error) {
    console.error('Request failed:', error);
  }
}
```
### **100. Styled Console Logging**

#### `log(msg, config)`
```javascript
// Basic styled log
log('System initialized', {
  color: '#0f0',
  background: '#222'
});

// Default styling (green on dark)
log('Database connected');
```

#### `error(msg, config)`
```javascript
// Error message (red style)
error('Failed to load data', {
  'font-size': '16px' // Override default
});
```

#### `warn(msg, config)`
```javascript
// Warning message (yellow style)
warn('Deprecated API called');
```

---

### **101. Configuration Options**

All methods accept these CSS properties (defaults shown for `log()`):

| Property | Default | Description |
|----------|---------|-------------|
| `color` | `#0f0` | Text color |
| `background` | `#111` | Background color |
| `border` | `2px solid #0f0` | Border style |
| `padding` | `4px 10px` | Inner spacing |
| `margin` | `4px 0` | Outer spacing |
| `border-radius` | `6px` | Rounded corners |
| `font-family` | `monospace` | Font type |
| `font-size` | `14px` | Text size |

---

### **102. Usage Examples**

#### Basic Usage
```javascript
log('App started'); // Green message
warn('Low memory'); // Yellow warning
error('API timeout'); // Red error
```

#### Custom Styling
```javascript
log('Special Event', {
  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
  color: 'white',
  'font-weight': 'bold',
  'text-shadow': '1px 1px black'
});
```

#### Grouped Logs
```javascript
console.group('System Checks');
log('Database: OK');
warn('Cache: Low space');
log('Auth: Connected');
console.groupEnd();
```

---

### **103. Advanced Features**

1. **Style Merging** - Custom props override defaults
   ```javascript
   error('Critical!', {
     border: '3px dotted white' // Keeps red bg but changes border
   });
   ```

2. **Emoji Support** - Prefixed in error/warn
   ```javascript
   error('Server down'); // Shows ❌ Server down
   ```

3. **CSS Validator** - Silently ignores invalid properties
