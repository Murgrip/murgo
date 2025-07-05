# **Client-Side Router - Complete Guide**

This documentation explains how to use the client-side router for single-page applications (SPAs). The router handles navigation, dynamic routes, middleware hooks, and more while staying lightweight.

---

## **1. Basic Setup**
### **Initialization**
```javascript
router.init();
```
- Must be called once to start the router
- Sets up click interception for `<a>` tags
- Handles browser back/forward navigation

---

## **2. Defining Routes**
### **Simple Route**
```javascript
router.add('/', () => {
  console.log('Home page loaded');
});
```
- Matches exact path `/`

### **Named Route**
```javascript
router.add('/about', aboutController, 'about');
```
- Can be referenced later by name `'about'`
- Useful for generating URLs

### **Dynamic Route**
```javascript
router.add('/users/:id', (data) => {
  console.log('User ID:', data.params.id);
});
```
- `:id` captures the value from URL
- Accessed via `data.params.id`

### **Wildcard Route**
```javascript
router.add('/products/*', productsController);
```
- Matches any path starting with `/products/`

---

## **3. Navigation**
### **Programmatic Navigation**
```javascript
router.navigate('/about');
```
- Changes URL without page reload
- Updates browser history

### **Navigation with Data**
```javascript
router.navigate('/users/123', { 
  user: { name: 'John' } 
});
```
- Passes data to route handler
- Available in hooks and callbacks

### **Link Interception**
```html
<!-- Works automatically after init() -->
<a href="/about">About</a>
```
- Intercepts clicks on same-domain links
- Uses router instead of full page load

---

## **4. Middleware Hooks**
### **Before Navigation**
```javascript
router.before((route, data) => {
  if (route.path === '/admin' && !isAdmin()) {
    return false; // Blocks navigation
  }
  return true; // Allows navigation
});
```
- Runs before route changes
- Return `false` to cancel navigation

### **After Navigation**
```javascript
router.after((route) => {
  trackAnalytics(route.path);
});
```
- Runs after successful navigation
- Useful for analytics, DOM updates

---

## **5. Error Handling**
### **404 Page**
```javascript
router.notFound(() => {
  show404Page();
});
```
- Called when no route matches
- Can be triggered manually with `router.notFound()`

---

## **Complete Example**
```javascript
// 1. Define routes
router
  .add('/', homeController, 'home')
  .add('/users/:id', userController, 'user-profile')
  .add('/admin', adminController);

// 2. Add middleware
router
  .before(authMiddleware)
  .after(analyticsMiddleware)
  .notFound(notFoundHandler);

// 3. Initialize
router.init();

// 4. Use in app
document.getElementById('profile-link').addEventListener('click', () => {
  router.navigate(
    router.generate('user-profile', { id: 123 })
  );
});
```