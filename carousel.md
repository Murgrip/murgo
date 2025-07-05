# **Carousel Component - Complete Documentation**

## **Overview**
This carousel component extends the native `Element` prototype to create a responsive, touch-friendly image carousel with multiple transition effects and navigation controls.

## **Basic Usage**

### **HTML Setup**
```html
<div id="my-carousel"></div>
```

### **JavaScript Initialization**
```javascript
const carousel = document.getElementById('my-carousel').carousel({
  images: [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ],
  autoplay: true,
  interval: 3000
});
```

## **Configuration Options**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `images` | Array | `[]` | Array of image URLs |
| `interval` | Number | `5000` | Autoplay interval in ms |
| `autoplay` | Boolean | `true` | Enable automatic sliding |
| `transition` | String | `'slide'` | Transition effect (`'slide'` or `'fade'`) |
| `transitionDuration` | Number | `500` | Transition duration in ms |
| `wrap` | Boolean | `true` | Loop back to first/last slide |
| `touch` | Boolean | `true` | Enable touch/swipe controls |
| `indicators` | Boolean | `true` | Show slide indicators |
| `controls` | Boolean | `true` | Show prev/next buttons |

## **Component API**

### **Navigation Methods**
```javascript
carousel.next();    // Go to next slide
carousel.prev();    // Go to previous slide
carousel.goTo(2);   // Go to specific slide index
```

### **Autoplay Control**
```javascript
carousel.start();   // Start autoplay
carousel.stop();    // Pause autoplay
```

## **Advanced Features**

### **Dynamic Image Loading**
```javascript
// Update images after initialization
const newImages = ['new1.jpg', 'new2.jpg'];
document.getElementById('my-carousel').carousel({
  images: newImages
});
```

### **Custom Transitions**
Add CSS for custom transitions:
```css
/* Example fade transition */
.carousel-slide {
  transition: opacity 0.5s ease;
  opacity: 0;
  position: absolute;
  width: 100%;
}

.carousel-slide.active {
  opacity: 1;
}
```

### **Touch Gestures**
The component automatically handles:
- Swipe left (next slide)
- Swipe right (previous slide)

## **Accessibility Features**

- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## **CSS Structure**

The component generates this DOM structure:
```html
<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">
      <img src="image1.jpg" alt="Slide 1">
    </div>
    <!-- More slides... -->
  </div>
  
  <div class="carousel-indicators">
    <button class="carousel-indicator active"></button>
    <!-- More indicators... -->
  </div>
  
  <button class="carousel-prev">❮</button>
  <button class="carousel-next">❯</button>
</div>
```

## **Browser Support**
Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- IE11+ (with polyfills)

## **Performance Considerations**
- Uses hardware-accelerated transforms for smooth animations
- Event delegation for efficient event handling
- Minimal DOM updates during transitions
- Automatic cleanup when removing carousel

## **Example With All Features**
```javascript
const fullFeaturedCarousel = document.getElementById('carousel').carousel({
  images: [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg'
  ],
  interval: 3000,
  transition: 'fade',
  transitionDuration: 1000,
  wrap: true,
  touch: true,
  indicators: true,
  controls: true
});

// Pause on hover
document.getElementById('carousel').addEventListener('mouseenter', () => {
  fullFeaturedCarousel.stop();
});

document.getElementById('carousel').addEventListener('mouseleave', () => {
  fullFeaturedCarousel.start();
});
```