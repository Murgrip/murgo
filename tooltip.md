# **Tooltip Component - Complete Documentation**

## **Overview**
This tooltip component extends the native `Element` prototype to create customizable, position-aware tooltips that work on both desktop and mobile devices.

## **Basic Usage**

### **HTML Setup**
```html
<button id="my-button">Hover Me</button>
```

### **JavaScript Initialization**
```javascript
document.getElementById('my-button').tooltip('This is a tooltip', 'top');
```

## **Configuration Options**

### **Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | String | Required | The tooltip content |
| `position` | String | `'top'` | Position relative to element (`'top'`, `'bottom'`, `'left'`, `'right'`) |

## **Features**

### **Automatic Positioning**
- Calculates optimal position based on target element
- Handles window scrolling
- Prevents overflow beyond viewport edges

### **Visual Effects**
- Smooth fade in/out animation
- Clean, modern styling
- Customizable through CSS

### **Interaction Support**
- Works on hover (desktop)
- Works on touch (mobile)
- Automatically cleans up event listeners

## **CSS Structure**

The component generates this DOM structure:
```html
<div class="tooltip" style="...">
  Tooltip text
</div>
```

### **Default Styles**
```css
.tooltip {
  position: absolute;
  background: #333;
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  display: none;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
```

## **Customization Options**

### **Style Overrides**
```css
/* Custom tooltip styling */
.tooltip {
  background: #4285f4;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  font-family: 'Roboto', sans-serif;
  max-width: 200px;
  white-space: normal;
}
```

### **Position Adjustments**
```javascript
// Add offset to tooltip position
const originalShow = Element.prototype.tooltip;
Element.prototype.tooltip = function(text, position) {
  const element = originalShow.call(this, text, position);
  // Add 10px additional offset
  element.style.transform = 'translateY(-10px)';
  return element;
};
```

## **Advanced Usage**

### **Dynamic Content**
```javascript
// Update tooltip content dynamically
const button = document.getElementById('my-button');
button.tooltip('Initial text');

// Later...
button._tooltip.textContent = 'Updated text';
```

### **Multiple Tooltips**
```javascript
// Apply to multiple elements
document.querySelectorAll('.has-tooltip').forEach(el => {
  el.tooltip(el.dataset.tooltipText, el.dataset.tooltipPos || 'top');
});
```

## **Accessibility Considerations**

- Tooltips are hidden from screen readers by default
- For accessible tooltips, consider adding ARIA attributes:
```javascript
this.setAttribute('aria-describedby', 'tooltip-id');
tooltip.id = 'tooltip-id';
```

## **Complete Example**

```html
<button class="info-button" data-tooltip="More information">i</button>
<script>
document.querySelectorAll('.info-button').forEach(btn => {
  btn.tooltip(btn.dataset.tooltip, 'right');
  
  // Custom styling
  btn._tooltip.style.backgroundColor = '#4285f4';
  btn._tooltip.style.fontSize = '14px';
});
</script>
```