
# DOM Utility Functions - Complete Usage Guide (Refactored)

## Overview
These prototype extensions provide jQuery-like functionality while using vanilla JavaScript. All methods return the element itself (unless specified otherwise) for chainable operations.

## Element Visibility Methods

### .hide()
Hides the element by setting display to "none"
```javascript
$('#myElement').hide();
// Chainable example:
$('#myElement').hide().addClass('hidden');
```

### .show()
Shows the element by resetting display property
```javascript
$('.item').show();
// Shows element using its default display type
```

### .toggle()
Toggles the element's visibility
```javascript
$('#toggleButton').on('click', function() {
  $('#menu').toggle();
});
```

### .fadeIn(duration = 300)
Fades in the element over specified milliseconds
```javascript
$('#alert').fadeIn(500);
```

### .fadeOut(duration = 300)
Fades out the element over specified milliseconds
```javascript
$('#notification').fadeOut(1000);
```

## DOM Manipulation Methods

### .append(child)
Appends content to the element
```javascript
$('#list').append('<li>New Item</li>');
// Can append DOM nodes or HTML strings
```

### .prepend(child)
Prepends content to the element
```javascript
$('#container').prepend('<header>New Header</header>');
```

### .kill()
Removes the element from DOM
```javascript
$('#oldElement').kill();
```

## Class Operations

### .addClass(className)
Adds a class to the element
```javascript
$('#button').addClass('active');
```

### .removeClass(className)
Removes a class from the element
```javascript
$('#card').removeClass('hidden');
```

### .toggleClass(className)
Toggles a class on the element
```javascript
$('#toggle').on('click', () => $('#box').toggleClass('expanded'));
```

### .hasClass(className)
Checks if element has a class (returns boolean)
```javascript
if ($('#item').hasClass('selected')) {
  // Do something
}
```

## Event Handling

### .on(event, handler)
Attaches an event handler
```javascript
$('#submit').on('click', handleSubmit);
```

### .off(event, handler)
Removes an event handler
```javascript
$('#button').off('click', oldHandler);
```

### .trigger(event)
Dispatches a custom event
```javascript
$('#element').trigger('customEvent');
```

## Advanced Usage Examples

### Chaining Multiple Operations
```javascript
$('#widget')
  .fadeIn(200)
  .move(100, 50)
  .on('mouseenter', showTooltip)
  .addClass('active');
```

### Dynamic Element Creation
```javascript
$('<div>') // Creates new div
  .addClass('modal')
  .html('<h2>Title</h2><p>Content</p>')
  .appendTo('body')
  .center();
```
