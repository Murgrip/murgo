# **Tab System Component - Complete Documentation**

This extends the native `Element` prototype with a tabbed interface component that supports:
- Multiple tab panels
- Animated transitions
- Persistence (remembers last active tab)
- Lazy loading of content
- ARIA accessibility
- Hash-based navigation
- Full API for programmatic control

## **Basic Usage**

### **HTML Structure**
```html
<div id="my-tabs"></div>
```

### **JavaScript Initialization**
```javascript
const tabs = document.getElementById('my-tabs').tabs({
  tabs: [
    { title: 'First', content: '<p>First tab content</p>' },
    { title: 'Second', content: '<p>Second tab content</p>' }
  ],
  activeIndex: 0
});
```

## **Configuration Options**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `tabs` | Array | `[]` | Array of tab objects (`{title, content}`) |
| `activeIndex` | Number | `0` | Initially active tab index |
| `animation` | String | `'fade'` | Transition animation (`'fade'`, `'slide'`, or `''` for none) |
| `persist` | Boolean | `false` | Remember last active tab in localStorage |
| `lazyLoad` | Boolean | `false` | Load content only when tab is activated |

## **Tab Object Structure**

Each tab can have these properties:

```javascript
{
  title: 'Tab Title',      // Display text
  content: 'HTML Content', // String or function returning Promise
  id: 'tab-id',           // Optional ID for hash navigation
  loaded: false           // Internal lazy-load flag
}
```

## **Methods API**

### **Add Tab**
```javascript
tabs.addTab({
  title: 'New Tab',
  content: '<p>Dynamically added</p>'
});
```

### **Remove Tab**
```javascript
tabs.removeTab(1); // Remove tab at index 1
```

### **Change Active Tab**
```javascript
tabs.setActive(2); // Switch to third tab
```

### **Get Current State**
```javascript
const currentIndex = tabs.getActiveIndex();
const allTabs = tabs.getTabs();
```

### **Update Configuration**
```javascript
tabs.updateConfig({
  animation: 'slide',
  persist: true
});
```

## **Advanced Features**

### **Lazy Loading**
```javascript
document.getElementById('my-tabs').tabs({
  lazyLoad: true,
  tabs: [
    {
      title: 'Lazy Tab',
      content: () => fetch('/content.html').then(r => r.text())
    }
  ]
});
```

### **Hash Navigation**
```html
<a href="#tab-id">Jump to Tab</a>
```
```javascript
{ title: 'Tab', id: 'tab-id', content: '...' }
```

### **Event Listening**
```javascript
window.addEventListener('tabChanged', (e) => {
  console.log('Tab changed to:', e.detail.index);
});
```

## **Accessibility Features**

- ARIA roles (`tab`, `tabpanel`, `tablist`)
- `aria-selected` states
- Keyboard navigation support (left/right arrows)

## **CSS Styling**

The component generates this structure:
```html
<div class="tab-container">
  <div class="tab-bar" role="tablist">
    <button class="tab-button active" role="tab">Tab 1</button>
    <button class="tab-button" role="tab">Tab 2</button>
  </div>
  <div class="tab-content">
    <div class="tab-pane fade-in" role="tabpanel">Content</div>
  </div>
</div>
```

Recommended base styles:
```css
.tab-bar {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.tab-button {
  padding: 10px 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.tab-button.active {
  border-bottom: 2px solid blue;
}

.tab-content {
  position: relative;
  min-height: 200px;
}

.tab-pane {
  display: none;
  padding: 20px;
}

.tab-pane.fade-in {
  display: block;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## **Browser Compatibility**

Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- IE11+ (with polyfills for Promise and CustomEvent)

## **Performance Considerations**

- Uses direct DOM manipulation (no virtual DOM)
- Lazy loading prevents unnecessary content loading
- Event delegation for efficient click handling
- Minimal re-renders (only updates necessary elements)