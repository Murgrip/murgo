# **Component System - Complete Documentation**

This is a lightweight component system for building reactive UIs with templating, state management, and lifecycle hooks.

## **1. Core Concepts**

### **Component Structure**
Each component consists of:
- **Template**: HTML with interpolation
- **State**: Reactive data properties
- **Methods**: Component functions
- **Styles**: Scoped CSS
- **Lifecycle Hooks**: Mounting events
- **Props**: External inputs

### **Reactivity**
- State changes automatically trigger re-renders
- Uses JavaScript Proxies for reactivity
- No virtual DOM - direct DOM updates

### **Event System**
- Built-in event bus for global communication
- DOM event delegation for component events

## **2. Component Registration**

### **Registering a Component**
```javascript
Component.register({
  name: 'my-component',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button @click="handleClick">Click me</button>
    </div>
  `,
  data: () => ({
    title: 'Hello World'
  }),
  methods: {
    handleClick() {
      this.state.title = 'Clicked!';
    }
  },
  styles: `
    h1 { color: blue; }
    button { background: #eee; }
  `,
  lifecycle: {
    beforeMount() {
      console.log('About to mount');
    },
    mounted() {
      console.log('Component mounted');
    }
  },
  props: ['initialValue']
});
```

**Parameters:**
- `name`: Unique component identifier
- `template`: HTML with `{{ mustache }}` syntax
- `data`: Function returning initial state
- `methods`: Component methods
- `styles`: Scoped CSS styles
- `lifecycle`: Mounting hooks
- `props`: Array of accepted prop names

## **3. Mounting Components**

### **Mounting to DOM**
```javascript
Component.mount('my-component', '#app', {
  initialValue: 'Hello' // Passed as prop
});
```

**Parameters:**
- `name`: Registered component name
- `targetSelector`: DOM selector to mount to
- `props`: Object of props to pass

## **4. Template Syntax**

### **State Interpolation**
```html
<div>{{ message }}</div>
```
- Renders `state.message`
- Automatically updates when state changes

### **Event Handlers**
```html
<button @click="handleClick">Click</button>
```
- Calls `methods.handleClick` when clicked
- Supported events: `click`, `input`, `change`, etc.

### **Refs**
```html
<input ref="emailInput">
```
- Access via `this.refs.emailInput` in methods

## **5. Component Instance Context**

Inside methods and lifecycle hooks, `this` provides:

| Property | Description |
|----------|-------------|
| `state` | Reactive component state |
| `props` | Immutable passed properties |
| `refs` | DOM element references |
| `methods` | Component methods |
| `emit` | Method to fire global events |

## **6. Lifecycle Hooks**

### **Available Hooks**
```javascript
lifecycle: {
  beforeMount() {
    // Runs before first render
  },
  mounted() {
    // Runs after first render
  }
}
```

## **7. Global State Management**

### **Setting Global State**
```javascript
Component.setGlobalState('user', { name: 'John' });
```

### **Getting Global State**
```javascript
const user = Component.getGlobalState('user');
```

### **Subscribing to Changes**
```javascript
Component.on('globalStateChange', ({ key, value }) => {
  console.log(`${key} changed to`, value);
});
```

## **8. Complete Example**

### **Counter Component**
```javascript
// Register
Component.register({
  name: 'counter',
  template: `
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  `,
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.state.count++;
    },
    decrement() {
      this.state.count--;
    }
  },
  styles: `
    button {
      padding: 8px 16px;
      margin: 0 4px;
    }
  `
});

// Mount
Component.mount('counter', '#counter-container');
```

## **9. Best Practices**

1. **Keep Components Small**: Single responsibility
2. **Use Props for Input**: Parent-to-child communication
3. **Use Events for Output**: Child-to-parent communication
4. **Global State Sparingly**: Only for truly app-wide data
5. **Scoped Styles**: Prefixed with component name

## **10. Limitations v1**

- No virtual DOM (direct DOM updates)
- Basic templating (no loops/conditionals in template)
- No SSR support
- No built-in animation system
