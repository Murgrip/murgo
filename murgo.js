let llel = document.createElement("style");
  llel.innerHTML = `
  .carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  transition: opacity 0.5s ease;
}

.carousel-slide img {
  width: 100%;
  display: block;
}

.carousel-prev, .carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-prev { left: 10px; }
.carousel-next { right: 10px; }

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: none;
  cursor: pointer;
}

.carousel-indicator.active {
  background: white;
}
  `
  document.head.appendChild(llel);
function $(selector) {
  return document.querySelector(selector);
}

const $$ = selector => {return document.querySelectorAll(selector)};

const hide = element => {
  if (element instanceof Element) element.style.display = "none";
  else if (element instanceof NodeList || Array.isArray(element)) 
    element.forEach(el => el instanceof Element && (el.style.display = "none"));
  return element;
};

const show = element => {
  if (element instanceof Element) element.style.display = "";
  else if (element instanceof NodeList || Array.isArray(element)) 
    element.forEach(el => el instanceof Element && (el.style.display = ""));
  return element;
};

const toggle = element => {
  if (element instanceof Element) 
    element.style.display = element.style.display === "none" ? "" : "none";
  else if (element instanceof NodeList || Array.isArray(element))
    element.forEach(el => el instanceof Element && 
      (el.style.display = el.style.display === "none" ? "" : "none"));
  return element;
};

const kill = element => {
  if (element instanceof Element) element.remove();
  else if (element instanceof NodeList || Array.isArray(element))
    element.forEach(el => el instanceof Element && el.remove());
  return element;
};

/* ======================= */
/* ELEMENT PROTOTYPE EXTENSIONS */
/* ======================= */

Element.prototype.hide = function() { this.style.display = "none"; return this; };
Element.prototype.show = function() { this.style.display = ""; return this; };
Element.prototype.toggle = function() { this.style.display = this.style.display === "none" ? "" : "none"; return this; };
Element.prototype.kill = function() { this.remove(); return this; };
Element.prototype.append = function(child) { 
  if (typeof child === "string") this.insertAdjacentHTML("beforeend", child);
  else if (child instanceof Node) this.appendChild(child);
  return this;
};
Element.prototype.prepend = function(child) { 
  if (typeof child === "string") this.insertAdjacentHTML("afterbegin", child);
  else if (child instanceof Node) this.insertBefore(child, this.firstChild);
  return this;
};
Element.prototype.addClass = function(className) { this.classList.add(className); return this; };
Element.prototype.removeClass = function(className) { this.classList.remove(className); return this; };
Element.prototype.toggleClass = function(className) { this.classList.toggle(className); return this; };
Element.prototype.hasClass = function(className) { return this.classList.contains(className); };
Element.prototype.attr = function(name, value) {
  if (value !== undefined) { this.setAttribute(name, value); return this; }
  return this.getAttribute(name);
};
Element.prototype.css = function(prop, value) {
  if (value !== undefined) { this.style[prop] = value; return this; }
  return getComputedStyle(this)[prop];
};
Element.prototype.on = function(event, handler, options) { 
  this.addEventListener(event, handler, options); 
  return this;
};
Element.prototype.off = function(event, handler, options) { 
  this.removeEventListener(event, handler, options); 
  return this;
};
Element.prototype.trigger = function(event, detail) { 
  this.dispatchEvent(new CustomEvent(event, { detail })); 
  return this;
};
Element.prototype.html = function(content) {
  if (content === undefined) return this.innerHTML;
  this.innerHTML = content;
  return this;
};
Element.prototype.text = function(content) {
  if (content === undefined) return this.textContent;
  this.textContent = content;
  return this;
};
Element.prototype.val = function(value) {
  if (value === undefined) return this.value;
  this.value = value;
  return this;
};
Element.prototype.pos = function() {
  const rect = this.getBoundingClientRect();
  return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
};
Element.prototype.center = function() {
  this.style.position = 'absolute';
  this.style.left = '50%';
  this.style.top = '50%';
  this.style.transform = 'translate(-50%, -50%)';
  return this;
};
Element.prototype.fadeIn = function(duration = 300) {
  this.style.transition = `opacity ${duration}ms`;
  this.style.opacity = '1';
  return this;
};
Element.prototype.fadeOut = function(duration = 300) {
  this.style.transition = `opacity ${duration}ms`;
  this.style.opacity = '0';
  return this;
};
Element.prototype.move = function(x, y) {
  this.style.transform = `translate(${x}px, ${y}px)`;
  return this;
};
Element.prototype.rotate = function(deg) {
  this.style.transform = `rotate(${deg}deg)`;
  return this;
};
Element.prototype.find = function(selector) {
  return this.querySelector(selector);
};
Element.prototype.findAll = function(selector) {
  return Array.from(this.querySelectorAll(selector));
};
Element.prototype.each = function(callback) {
  Array.from(this.children).forEach(callback);
  return this;
};

/* ======================= */
/* NODELIST PROTOTYPE EXTENSIONS */
/* ======================= */

NodeList.prototype.hide = function() { this.forEach(el => el.hide()); return this; };
NodeList.prototype.show = function() { this.forEach(el => el.show()); return this; };
NodeList.prototype.toggle = function() { this.forEach(el => el.toggle()); return this; };
NodeList.prototype.kill = function() { this.forEach(el => el.kill()); return this; };
NodeList.prototype.addClass = function(className) { this.forEach(el => el.addClass(className)); return this; };
NodeList.prototype.removeClass = function(className) { this.forEach(el => el.removeClass(className)); return this; };
NodeList.prototype.toggleClass = function(className) { this.forEach(el => el.toggleClass(className)); return this; };
NodeList.prototype.on = function(event, handler, options) { this.forEach(el => el.on(event, handler, options)); return this; };
NodeList.prototype.off = function(event, handler, options) { this.forEach(el => el.off(event, handler, options)); return this; };
NodeList.prototype.trigger = function(event, detail) { this.forEach(el => el.trigger(event, detail)); return this; };
NodeList.prototype.each = function(callback) { this.forEach(callback); return this; };

/* ======================= */
/* OBJECT PROTOTYPE EXTENSIONS */
/* ======================= */

Object.prototype.isEmpty = function() { return Object.keys(this).length === 0; };
Object.prototype.forEach = function(fn) { Object.entries(this).forEach(([key, val]) => fn(val, key, this)); };
Object.prototype.map = function(fn) { return Object.fromEntries(Object.entries(this).map(([key, val]) => [key, fn(val, key, this)])); };
Object.prototype.filter = function(fn) { return Object.fromEntries(Object.entries(this).filter(([key, val]) => fn(val, key, this))); };
Object.prototype.reduce = function(fn, init) { return Object.entries(this).reduce((acc, [key, val]) => fn(acc, val, key, this), init); };
Object.prototype.pick = function(...keys) { return keys.reduce((obj, key) => { if (this.hasOwnProperty(key)) obj[key] = this[key]; return obj; }, {}); };
Object.prototype.omit = function(...keys) { return Object.keys(this).reduce((obj, key) => { if (!keys.includes(key)) obj[key] = this[key]; return obj; }, {}); };

/* ======================= */
/* STRING PROTOTYPE EXTENSIONS */
/* ======================= */

String.prototype.encrypt = function() { return btoa(unescape(encodeURIComponent(this))); };
String.prototype.decrypt = function() { return decodeURIComponent(escape(atob(this))); };
String.prototype.shuffle = function() { return this.split('').sort(() => Math.random() - 0.5).join(''); };
String.prototype.firstWord = function() { return this.split(/\s+/)[0]; };
String.prototype.lastWord = function() { const words = this.split(/\s+/); return words[words.length - 1]; };
String.prototype.getWord = function(index) { return this.split(/\s+/)[index]; };
String.prototype.log = function() { console.log(this); return this; };
String.prototype.isUpperCase = function() { return this === this.toUpperCase(); };
String.prototype.isLowerCase = function() { return this === this.toLowerCase(); };
String.prototype.randomCharacter = function() { return this[Math.floor(Math.random() * this.length)]; };
String.prototype.randomWord = function() { const words = this.split(/\s+/); return words[Math.floor(Math.random() * words.length)]; };
String.prototype.longestWord = function() { return this.split(/\s+/).reduce((a, b) => b.length > a.length ? b : a, ''); };
String.prototype.shortestWord = function() { return this.split(/\s+/).reduce((a, b) => b.length < a.length ? b : a, this.split(/\s+/)[0] || ''); };
String.prototype.mostFrequentWord = function() { const words = this.split(/\s+/); const freq = {}; words.forEach(w => freq[w] = (freq[w] || 0) + 1); return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]; };
String.prototype.mostFrequentCharacter = function() { const freq = {}; this.split('').forEach(c => freq[c] = (freq[c] || 0) + 1); return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]; };
String.prototype.leastFrequentWord = function() { const words = this.split(/\s+/); const freq = {}; words.forEach(w => freq[w] = (freq[w] || 0) + 1); return Object.entries(freq).sort((a, b) => a[1] - b[1])[0][0]; };
String.prototype.leastFrequentCharacter = function() { const freq = {}; this.split('').forEach(c => freq[c] = (freq[c] || 0) + 1); return Object.entries(freq).sort((a, b) => a[1] - b[1])[0][0]; };
String.prototype.reverse = function() { return this.split('').reverse().join(''); };
String.prototype.countOccurrences = function(sub) { return this.split(sub).length - 1; };
String.prototype.capitalizeFirst = function() { return this.charAt(0).toUpperCase() + this.slice(1); };
String.prototype.capitalizeWords = function() { return this.split(' ').map(w => w.capitalizeFirst()).join(' '); };
String.prototype.truncate = function(len = 100, ellipsis = '...') { return this.length > len ? this.substring(0, len) + ellipsis : this; };
String.prototype.removeHTMLTags = function() { return this.replace(/<[^>]*>/g, ''); };
String.prototype.toSlug = function() { return this.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''); };
String.prototype.toCamelCase = function() { return this.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : ''); };
String.prototype.toSnakeCase = function() { return this.replace(/\s+/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(); };
String.prototype.toTitleCase = function() { return this.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase()); };
String.prototype.contains = function(sub) { return this.indexOf(sub) !== -1; };
String.prototype.equals = function(other, ignoreCase = true) { return ignoreCase ? this.toLowerCase() === other.toLowerCase() : this === other; };
String.prototype.textBetween = function(start, end) { const s = this.indexOf(start) + start.length; return this.substring(s, this.indexOf(end, s)); };

/* ======================= */
/* ARRAY PROTOTYPE EXTENSIONS */
/* ======================= */

Array.prototype.first = function() { return this[0]; };
Array.prototype.last = function() { return this[this.length - 1]; };
Array.prototype.random = function() { return this[Math.floor(Math.random() * this.length)]; };
Array.prototype.shuffle = function() { for (let i = this.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [this[i], this[j]] = [this[j], this[i]]; } return this; };
Array.prototype.unique = function() { return [...new Set(this)]; };
Array.prototype.compact = function() { return this.filter(Boolean); };
Array.prototype.groupBy = function(key) { return this.reduce((acc, item) => { (acc[item[key]] = acc[item[key]] || []).push(item); return acc; }, {}); };
Array.prototype.pluck = function(key) { return this.map(item => item[key]); };
Array.prototype.sum = function() { return this.reduce((sum, num) => sum + num, 0); };
Array.prototype.avg = function() { return this.length ? this.sum() / this.length : 0; };
Array.prototype.max = function() { return Math.max(...this); };
Array.prototype.min = function() { return Math.min(...this); };
Array.prototype.chunk = function(size) { const chunks = []; for (let i = 0; i < this.length; i += size) chunks.push(this.slice(i, i + size)); return chunks; };
Array.prototype.diff = function(arr) { return this.filter(x => !arr.includes(x)); };
Array.prototype.intersect = function(arr) { return this.filter(x => arr.includes(x)); };

/* ======================= */
/* STORAGE UTILITIES */
/* ======================= */

const storage = {
  set: (key, value) => {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    return storage;
  },
  get: key => {
    const val = localStorage.getItem(key);
    try { return JSON.parse(val); } catch { return val; }
  },
  remove: key => {
    localStorage.removeItem(key);
    return storage;
  },
  clear: () => {
    localStorage.clear();
    return storage;
  },
  all: () => {
    const result = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try { result[key] = JSON.parse(localStorage.getItem(key)); } 
      catch { result[key] = localStorage.getItem(key); }
    }
    return result;
  }
};

const cookie = {
  set: (key, value, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    return cookie;
  },
  get: key => {
    const match = document.cookie.match(new RegExp(`(^|;)\\s*${encodeURIComponent(key)}=([^;]*)`));
    return match ? decodeURIComponent(match[2]) : null;
  },
  remove: key => {
    document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    return cookie;
  },
  all: () => {
    return document.cookie.split("; ").filter(c => c.includes("=")).reduce((obj, c) => {
      const [k, v] = c.split("=");
      obj[decodeURIComponent(k)] = decodeURIComponent(v);
      return obj;
    }, {});
  },
  clear: () => {
    document.cookie.split("; ").forEach(c => {
      const key = c.split("=")[0];
      cookie.remove(decodeURIComponent(key));
    });
    return cookie;
  }
};
const DB = function(name) {
  this._name = name;
  this._db = null;
};

DB.prototype.name = function() {
  return this._name;
};

DB.prototype._connect = function() {
  return new Promise((resolve, reject) => {
    if (this._db) return resolve(this._db);
    
    const request = indexedDB.open(this._name, 1);
    
    request.onerror = () => reject('Database failed to open');
    request.onsuccess = () => {
      this._db = request.result;
      resolve(this._db);
    };
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('store')) {
        db.createObjectStore('store');
      }
    };
  });
};

DB.prototype.save = function(key, data) {
  return this._connect().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('store', 'readwrite');
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
      tx.objectStore('store').put(data, key);
    });
  });
};

DB.prototype.get = function(key) {
  return this._connect().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('store', 'readonly');
      const request = tx.objectStore('store').get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

DB.prototype.remove = function(key) {
  return this._connect().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('store', 'readwrite');
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
      tx.objectStore('store').delete(key);
    });
  });
};

DB.prototype.clear = function() {
  return this._connect().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('store', 'readwrite');
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
      tx.objectStore('store').clear();
    });
  });
};

DB.prototype.length = function() {
  return this._connect().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction('store', 'readonly');
      const request = tx.objectStore('store').count();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

DB.prototype.typeOf = function(key) {
  return this.get(key).then(value => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  });
};


/* ======================= */
/* INITIALIZATION */
/* ======================= */

const kumi = document.createElement('style');
kumi.innerHTML = `
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
  .tooltip { display: none; }
  .dropdown-content { display: none; }
  .error { border-color: red !important; }
  .accordion-content { display: none; }
  .carousel-container { overflow: hidden; position: relative; }
  .carousel-track { display: flex; transition: transform 0.5s; }
  .carousel-slide { min-width: 100%; }
`;
document.head.append(kumi);

const ready = (selector, callback) => {
  const check = () => {
    const element = typeof selector === 'string' ? $(selector) : selector;
    if (element) {
      callback(element);
      return true;
    }
    return false;
  };

  if (!check()) {
    const observer = new MutationObserver(() => check() && observer.disconnect());
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
};

const start = callback => {
  if (document.readyState === 'complete') callback();
  else window.addEventListener('load', callback);
};

const end = () => window.close();

const observe=(e,f,o={})=>{
    const c=new MutationObserver(f);
    c.observe(e,{childList:true,subtree:true,...o});
    return()=>c.disconnect();
};

const hotkeys=(k,f)=>{
    const keys=new Set();
    const d=e=>keys.add(e.key)&&k.split('+').every(k=>keys.has(k))&&f(e);
    const u=e=>keys.delete(e.key);
    document.addEventListener('keydown',d);
    document.addEventListener('keyup',u);
    return()=>(document.removeEventListener('keydown',d),document.removeEventListener('keyup',u));
};

const loadText = async (url) => {
  const response = await fetch(url);
  return await response.text();
};
const loadJson = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const buildItem = (tagName) => {return document.createElement(tagName)};
const isArr = value => Array.isArray(value);
const isObj = value => value === Object(value) && !isArr(value) && typeof value !== 'function';
const isStr = value => typeof value === 'string';
const isNum = value => typeof value === 'number' && !isNaN(value);
const isFun = value => typeof value === 'function';
const isNul = value => value === null;
const isUnd = value => value === void 0;
const isEl  = value => value instanceof Element;


const bench = (fn) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
};

const lazy=(s='[data-src]',o={})=>{
    const io=new IntersectionObserver((e,o)=>{
        e.forEach(e=>e.isIntersecting&&(e.target.src=e.target.dataset.src,o.unobserve(e.target)));
    },o);
    $$(s).forEach(e=>io.observe(e));
    return io;
};
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const memoize = fn => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key));
  };
};
function timer(scope,tick) {
  return setTimeout(scope,tick);
}
function interval(scope,delay) {
  return setInterval(scope,delay);
}
function stopTimer(handel) {
  return clearTimeout(handle);
}
function stopInterval(handel) {
  return clearInterval(handel);
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const Random = {
  int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  float(min, max, decimalPlaces) {
    const value = Math.random() * (max - min) + min;
    return decimalPlaces ? parseFloat(value.toFixed(decimalPlaces)) : value;
  },
  
  char(str) {
    if (!str || typeof str !== 'string') return '';
    return str[this.int(0, str.length - 1)];
  },
  
  word(length = 5) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => this.char(chars)).join('');
  },
  
  password(length = 12, allowLower = true, allowUpper = true, allowNum = true, allowOp = false, allowSym = false) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const operators = '+-*/=';
    const symbols = '!@#$%^&()_{}[]<>?|:;,.~';
    
    let pool = '';
    if (allowLower) pool += lowercase;
    if (allowUpper) pool += uppercase;
    if (allowNum) pool += numbers;
    if (allowOp) pool += operators;
    if (allowSym) pool += symbols;
    
    if (!pool) return '';
    
    return Array.from({ length }, () => this.char(pool)).join('');
  },
  
  str(length = 8, includeUppercase = true, includeLowercase = true,
    includeSymbols = false, includeNumbers = true, includeOperators = false) {
    
    return this.password(length, includeLowercase, includeUppercase, includeNumbers, includeOperators, includeSymbols);
  },
  
  color(alpha = 1) {
    const r = this.int(0, 255);
    const g = this.int(0, 255);
    const b = this.int(0, 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
  
  bool() {
    return Math.random() >= 0.5;
  },
  
  date(start, end) {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    return new Date(this.int(startDate, endDate));
  },
  
  arrItem(array) {
    return array[this.int(0, array.length - 1)];
  },
  
  weighted(weights) {
    const total = weights.reduce((sum, w) => sum + w, 0);
    let rand = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
      if (rand < weights[i]) return i;
      rand -= weights[i];
    }
    return weights.length - 1;
  },
  uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
};
const router = {
  routes: {},
  currentPath: '',
  beforeHooks: [],
  afterHooks: [],
  notFoundHandler: () => console.warn('No route found'),
  add: function(path, callback, name = null) {
    const route = {
      path,
      callback,
      name,
      regex: this._pathToRegex(path)
    };
    this.routes[path] = route;
    if (name) {
      this.routes[name] = route;
    }
    return this;
  },
  navigate: function(path, data = {}) {
    if (path === this.currentPath) return;
    
    const route = this._findRoute(path);
    if (!route) return this.notFound();
    
    if (!this._runBeforeHooks(route, data)) return;
    window.history.pushState(data, '', path);
    this.currentPath = path;
    route.callback(data);
    this._runAfterHooks(route, data);
    return this;
  },
  generate: function(name, params = {}) {
    const route = this.routes[name];
    if (!route) return null;
    
    let generatedPath = route.path;
    for (const [key, value] of Object.entries(params)) {
      generatedPath = generatedPath.replace(`:${key}`, value);
    }
    return generatedPath;
  },
  before: function(callback) {
    this.beforeHooks.push(callback);
    return this;
  },
  after: function(callback) {
    this.afterHooks.push(callback);
    return this;
  },
  notFound: function(callback) {
    if (callback) this.notFoundHandler = callback;
    else this.notFoundHandler();
    return this;
  },
  init: function() {
    window.addEventListener('popstate', (e) => {
      const path = window.location.pathname;
      const route = this._findRoute(path);
      if (route) {
        this.currentPath = path;
        route.callback(e.state || {});
      } else {
        this.notFound();
      }
    });
    const initialPath = window.location.pathname;
    const initialRoute = this._findRoute(initialPath);
    if (initialRoute) {
      this.currentPath = initialPath;
      initialRoute.callback({});
    } else {
      this.notFound();
    }
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        this.navigate(e.target.pathname);
      }
    });
    
    return this;
  },
  _pathToRegex: function(path) {
    const pattern = path
      .replace(/:(\w+)/g, '([^/]+)')
      .replace(/\*/g, '.*');
    return new RegExp(`^${pattern}$`);
  },
  _findRoute: function(path) {
    for (const route of Object.values(this.routes)) {
      if (route.path === path) return route;
      if (route.regex.test(path)) return route;
    }
    return null;
  },
  _runBeforeHooks: function(route, data) {
    return this.beforeHooks.every(hook => hook(route, data) !== false);
  },
  _runAfterHooks: function(route, data) {
    this.afterHooks.forEach(hook => hook(route, data));
  }
};
const components = {};
const globalState = {};
const eventBus = new EventTarget();

const Component = {
  register({ name, template, data = () => ({}), methods = {}, styles = '', lifecycle = {}, props = [] }) {
    components[name] = { template, data, methods, styles, lifecycle, props };
    
    if (styles) {
      const styleId = `style-${name}`;
      if (!document.getElementById(styleId)) {
        const styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
      }
    }
  },
  
  mount(name, targetSelector, props = {}) {
    const comp = components[name];
    if (!comp) return console.error(`Component ${name} not found`);
    
    const target = document.querySelector(targetSelector);
    if (!target) return console.error(`Target ${targetSelector} not found`);
    
    const ctx = {};
    ctx.state = new Proxy({ ...comp.data(), ...props }, {
      set(obj, key, value) {
        obj[key] = value;
        Component._render(name, target, props, ctx);
        return true;
      }
    });
    ctx.props = props;
    ctx.refs = {};
    ctx.emit = (event, detail) => eventBus.dispatchEvent(new CustomEvent(event, { detail }));
    ctx.methods = Object.fromEntries(
      Object.entries(comp.methods).map(([k, fn]) => [k, fn.bind(ctx)])
    );
    
    target._component = { name, ctx };
    target.setAttribute('data-component', name);
    
    comp.lifecycle.beforeMount?.call(ctx);
    Component._render(name, target, props, ctx);
    comp.lifecycle.mounted?.call(ctx);
  },
  
  _render(name, target, props, ctx) {
    const comp = components[name];
    let html = comp.template;
    
    // Handle state interpolation
    html = html.replace(/{{\s*(\w+)\s*}}/g, (_, key) => ctx?.state[key] ?? '');
    
    // Convert @event="handler" to data-onevent="handler"
    html = html.replace(/@(\w+)=["'](\w+)["']/g, (_, event, handler) =>
      `data-on${event}="${handler}"`);
    
    target.innerHTML = html;
    
    // Set up refs
    ctx.refs = {};
    target.querySelectorAll('[ref]').forEach(el => {
      ctx.refs[el.getAttribute('ref')] = el;
    });
    
    // Set up event listeners for all data-on* attributes
    const eventElements = target.querySelectorAll('[data-onclick], [data-oninput], [data-onchange], [data-onkeyup], [data-onkeydown]');
    eventElements.forEach(el => {
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('data-on')) {
          const eventType = attr.name.substring(7); // Remove "data-on" prefix
          const handlerName = attr.value;
          
          // Remove existing listener to avoid duplicates
          el.removeEventListener(eventType, Component._handleEvent);
          
          // Add new listener
          el.addEventListener(eventType, (e) => {
            Component._handleEvent(e, el);
          });
        }
      });
    });
  },
  
  _handleEvent(event, element) {
    const component = element.closest('[data-component]');
    if (!component?._component) return;
    
    const ctx = component._component.ctx;
    const methodName = element.getAttribute(`data-on${event.type}`);
    
    if (methodName && ctx.methods[methodName]) {
      ctx.methods[methodName](event);
    }
  },
  
  setGlobalState(key, value) {
    globalState[key] = value;
    eventBus.dispatchEvent(new CustomEvent('globalStateChange', {
      detail: { key, value }
    }));
  },
  
  getGlobalState(key) {
    return globalState[key];
  },
  
  on(event, callback) {
    eventBus.addEventListener(event, e => callback(e.detail));
  }
};
Element.prototype.tabs = function(config = {}) {
  const state = {
    activeIndex: config.activeIndex || 0,
    tabs: config.tabs || [],
    animation: config.animation || 'fade',
    persist: config.persist || false,
    lazyLoad: config.lazyLoad || false
  };
  
  const dom = {
    container: this,
    bar: document.createElement('div'),
    content: document.createElement('div'),
    buttons: []
  };
  
  dom.bar.className = 'tab-bar';
  dom.content.className = 'tab-content';
  
  const render = () => {
    dom.container.innerHTML = '';
    dom.bar.innerHTML = '';
    dom.content.innerHTML = '';
    dom.buttons = [];
    
    state.tabs.forEach((tab, i) => {
      const btn = document.createElement('button');
      btn.className = `tab-button ${i === state.activeIndex ? 'active' : ''}`;
      btn.textContent = tab.title;
      btn.setAttribute('aria-selected', i === state.activeIndex);
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-controls', `tab-${i}`);
      
      btn.addEventListener('click', () => setActive(i));
      dom.bar.appendChild(btn);
      dom.buttons.push(btn);
    });
    
    dom.container.appendChild(dom.bar);
    dom.container.appendChild(dom.content);
    renderContent();
  };
  
  const renderContent = () => {
    if (state.lazyLoad && !state.tabs[state.activeIndex].loaded) {
      if (typeof state.tabs[state.activeIndex].content === 'function') {
        state.tabs[state.activeIndex].content().then(content => {
          state.tabs[state.activeIndex].content = content;
          state.tabs[state.activeIndex].loaded = true;
          updateContent();
        });
      }
    } else {
      updateContent();
    }
  };
  
  const updateContent = () => {
    dom.content.innerHTML = '';
    const contentWrapper = document.createElement('div');
    contentWrapper.className = `tab-pane ${state.animation}-in`;
    contentWrapper.id = `tab-${state.activeIndex}`;
    contentWrapper.setAttribute('role', 'tabpanel');
    contentWrapper.innerHTML = state.tabs[state.activeIndex].content;
    dom.content.appendChild(contentWrapper);
    
    if (state.persist) {
      localStorage.setItem('lastActiveTab', state.activeIndex);
    }
    
    window.dispatchEvent(new CustomEvent('tabChanged', {
      detail: { index: state.activeIndex, tab: state.tabs[state.activeIndex] }
    }));
  };
  
  const setActive = (index) => {
    if (index === state.activeIndex) return;
    
    dom.buttons[state.activeIndex].classList.remove('active');
    dom.buttons[state.activeIndex].setAttribute('aria-selected', 'false');
    
    state.activeIndex = index;
    
    dom.buttons[state.activeIndex].classList.add('active');
    dom.buttons[state.activeIndex].setAttribute('aria-selected', 'true');
    
    renderContent();
  };
  
  const init = () => {
    if (state.persist) {
      const savedIndex = localStorage.getItem('lastActiveTab');
      if (savedIndex) state.activeIndex = parseInt(savedIndex);
    }
    
    if (window.location.hash) {
      const hashIndex = state.tabs.findIndex(t => t.id === window.location.hash.substring(1));
      if (hashIndex >= 0) state.activeIndex = hashIndex;
    }
    
    render();
  };
  
  init();
  
  return {
    addTab: (tab) => {
      state.tabs.push(tab);
      render();
    },
    removeTab: (index) => {
      state.tabs.splice(index, 1);
      if (state.activeIndex >= state.tabs.length) state.activeIndex = Math.max(0, state.tabs.length - 1);
      render();
    },
    setActive,
    getActiveIndex: () => state.activeIndex,
    getTabs: () => [...state.tabs],
    updateConfig: (newConfig) => {
      Object.assign(state, newConfig);
      render();
    }
  };
};
Element.prototype.carousel = function(config = {}) {
  const state = {
    images: config.images || [],
    currentIndex: 0,
    interval: config.interval || 5000,
    autoplay: config.autoplay !== false,
    transition: config.transition || 'slide',
    transitionDuration: config.transitionDuration || 500,
    wrap: config.wrap !== false,
    touch: config.touch !== false,
    indicators: config.indicators !== false,
    controls: config.controls !== false,
    timer: null
  };
  
  const dom = {
    container: this,
    track: document.createElement('div'),
    slides: [],
    indicators: [],
    prevBtn: document.createElement('button'),
    nextBtn: document.createElement('button')
  };
  
  const init = () => {
    dom.container.classList.add('carousel');
    dom.track.classList.add('carousel-track');
    
    state.images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      slide.innerHTML = `<img src="${img}" alt="Slide ${i+1}">`;
      dom.track.appendChild(slide);
      dom.slides.push(slide);
      
      if (state.indicators) {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        indicator.dataset.index = i;
        dom.indicators.push(indicator);
      }
    });
    
    if (state.controls) {
      dom.prevBtn.classList.add('carousel-prev');
      dom.prevBtn.innerHTML = '❮';
      dom.nextBtn.classList.add('carousel-next');
      dom.nextBtn.innerHTML = '❯';
    }
    
    dom.container.appendChild(dom.track);
    if (state.indicators) {
      const indicatorsContainer = document.createElement('div');
      indicatorsContainer.classList.add('carousel-indicators');
      dom.indicators.forEach(ind => indicatorsContainer.appendChild(ind));
      dom.container.appendChild(indicatorsContainer);
    }
    if (state.controls) {
      dom.container.appendChild(dom.prevBtn);
      dom.container.appendChild(dom.nextBtn);
    }
    
    setupEvents();
    updateCarousel();
    if (state.autoplay) startAutoplay();
  };
  
  const updateCarousel = () => {
    if (state.transition === 'slide') {
      dom.track.style.transform = `translateX(-${state.currentIndex * 100}%)`;
    } else {
      dom.slides.forEach((slide, i) => {
        slide.style.opacity = i === state.currentIndex ? '1' : '0';
      });
    }
    
    dom.indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === state.currentIndex);
    });
  };
  
  const goTo = (index) => {
    if (index < 0) index = state.wrap ? state.images.length - 1 : 0;
    if (index >= state.images.length) index = state.wrap ? 0 : state.images.length - 1;
    
    state.currentIndex = index;
    updateCarousel();
  };
  
  const next = () => goTo(state.currentIndex + 1);
  const prev = () => goTo(state.currentIndex - 1);
  
  const startAutoplay = () => {
    state.timer = setInterval(next, state.interval);
  };
  
  const stopAutoplay = () => {
    clearInterval(state.timer);
  };
  
  const setupEvents = () => {
    if (state.controls) {
      dom.prevBtn.addEventListener('click', prev);
      dom.nextBtn.addEventListener('click', next);
    }
    
    if (state.indicators) {
      dom.indicators.forEach(ind => {
        ind.addEventListener('click', () => {
          goTo(parseInt(ind.dataset.index));
        });
      });
    }
    
    if (state.autoplay) {
      dom.container.addEventListener('mouseenter', stopAutoplay);
      dom.container.addEventListener('mouseleave', startAutoplay);
    }
    
    if (state.touch) {
      let startX, moveX;
      
      dom.track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });
      
      dom.track.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].clientX;
      });
      
      dom.track.addEventListener('touchend', () => {
        if (moveX < startX - 50) next();
        if (moveX > startX + 50) prev();
      });
    }
  };
  
  init();
  
  return {
    next,
    prev,
    goTo,
    start: startAutoplay,
    stop: stopAutoplay
  };
};

Element.prototype.tooltip = function(text, position = 'top') {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;

  Object.assign(tooltip.style, {
    position: 'absolute',
    background: '#333',
    color: '#fff',
    padding: '5px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: '1000',
    display: 'none',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease'
  });

  document.body.appendChild(tooltip);

  const showTooltip = () => {
    const rect = this.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    let top = 0, left = 0;

    switch (position) {
      case 'bottom':
        top = rect.bottom + 5;
        left = rect.left + (rect.width - tipRect.width) / 2;
        break;
      case 'left':
        top = rect.top + (rect.height - tipRect.height) / 2;
        left = rect.left - tipRect.width - 5;
        break;
      case 'right':
        top = rect.top + (rect.height - tipRect.height) / 2;
        left = rect.right + 5;
        break;
      case 'top':
      default:
        top = rect.top - tipRect.height - 5;
        left = rect.left + (rect.width - tipRect.width) / 2;
    }

    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;
    tooltip.style.display = 'block';
    requestAnimationFrame(() => tooltip.style.opacity = '1');
  };

  const hideTooltip = () => {
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.style.display = 'none', 200);
  };

  this.addEventListener('mouseenter', showTooltip);
  this.addEventListener('mouseleave', hideTooltip);
  this.addEventListener('touchstart', showTooltip);
  this.addEventListener('touchend', hideTooltip);

  return this;
};
