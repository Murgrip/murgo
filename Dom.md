# DOM Utility Functions - Complete Usage Guide

## Overview
These utility functions provide a concise way to perform common DOM operations. They're designed to work with single elements, NodeLists, and arrays of elements.

## 1. Element Selectors

### `$(selector)`
Selects a single DOM element.

**Usage:**
```javascript
// Select by ID
const header = $('#main-header');

// Select by class
const btn = $('.primary-button');

// Select by tag
const firstPara = $('p');
```

### `$$(selector)`
Selects multiple DOM elements.

**Usage:**
```javascript
// Select all buttons
const allButtons = $$('button');

// Select all elements with class 'item'
const items = $$('.item');

// Complex selector
const linksInNav = $$('nav a');
```

## 2. Visibility Functions

### `hide(element)`
Hides one or more elements.

**Usage:**
```javascript
// Hide single element
hide($('#popup'));

// Hide multiple elements
hide($$('.tooltip'));

// Hide array of elements
const elements = [div1, div2, div3];
hide(elements);
```

### `show(element)`
Shows one or more elements.

**Usage:**
```javascript
// Show single element
show($('#welcome-message'));

// Show multiple elements
show($$('.menu-item'));

// Chainable
show(hide($('#toggle-me')));
```

### `toggle(element)`
Toggles visibility of one or more elements.

**Usage:**
```javascript
// Toggle single element
toggle($('#sidebar'));

// Toggle multiple elements
toggle($$('.expandable'));

// Event handler example
$('#toggle-btn').addEventListener('click', () => toggle($$('.content')));
```

## 3. Element Removal

### `kill(element)`
Removes one or more elements from the DOM.

**Usage:**
```javascript
// Remove single element
kill($('#old-banner'));

// Remove multiple elements
kill($$('.expired'));

// Remove after animation
setTimeout(() => kill($('#notification')), 1000);
```

## Chaining Example
These functions return the element(s) they operate on, enabling method chaining:

```javascript
// Select, modify, and chain operations
const item = $('#list-item')
  .style.color = 'red')
  .addEventListener('click', handleClick);

// Complex chain
hide($$('.panel'))
  .forEach(el => el.classList.add('hidden'))
  [0].dataset.state = 'hidden';
```