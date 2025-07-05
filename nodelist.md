
# NodeList Prototype Extensions

These extensions add powerful chainable methods to NodeList objects (returned by `$$()` or `querySelectorAll`), enabling bulk operations on multiple elements.

## Visibility Methods

### .hide()
Hides all elements in the NodeList
```javascript
$$('.tooltips').hide();
// Hides all elements with class 'tooltips'
```

### .show()
Shows all elements in the NodeList
```javascript
$$('.hidden-items').show();
// Shows all hidden elements
```

### .toggle()
Toggles visibility of all elements
```javascript
$$('.expandable').toggle();
// Toggles all expandable sections
```

### .kill()
Removes all elements from DOM
```javascript
$$('.temp-elements').kill();
// Cleans up temporary elements
```

## Class Operations

### .addClass(className)
Adds class to all elements
```javascript
$$('input').addClass('form-control');
// Adds class to all input elements
```

### .removeClass(className)
Removes class from all elements
```javascript
$$('.active').removeClass('active');
// Deactivates all active elements
```

### .toggleClass(className)
Toggles class on all elements
```javascript
$$('.item').toggleClass('selected');
// Toggles selection state
```

## Event Handling

### .on(event, handler)
Adds event listener to all elements
```javascript
$$('.btn').on('click', handleButtonClick);
// Adds click handler to all buttons
```

### .off(event, handler)
Removes event listener from all elements
```javascript
$$('.modal').off('click', closeModal);
// Removes click handlers
```

### .trigger(event)
Triggers event on all elements
```javascript
$$('.component').trigger('refresh');
// Refreshes all components
```

## Utility Methods

### .each(callback)
Iterates through elements (chainable)
```javascript
$$('li').each((item, index) => {
  item.text(`Item ${index + 1}`);
});
// Numbers all list items
```

## Practical Examples

### Bulk Operations
```javascript
$$('.user-card')
  .addClass('active')
  .on('mouseenter', highlightCard)
  .on('mouseleave', unhighlightCard);
```

### Form Handling
```javascript
$$('input[type="text"]')
  .addClass('validated')
  .on('blur', validateField);
```

### Dynamic UI Control
```javascript
// Toggle all panels
$('#toggle-all').on('click', () => {
  $$('.panel').toggle();
});
```