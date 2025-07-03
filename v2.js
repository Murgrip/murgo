const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const hide=e=>(e.style.display='none',e);
const show=e=>(e.style.display='',e);
const toggle=e=>(e.style.display=e.style.display==='none'?'':'none',e);
const kill=e=>(e.remove(),null);

NodeList.prototype.hide=function(){return this.forEach(hide),this};
NodeList.prototype.show=function(){return this.forEach(show),this};
NodeList.prototype.toggle=function(){return this.forEach(toggle),this};
NodeList.prototype.kill=function(){return this.forEach(kill),null};

Element.prototype.appendHTML=function(h){return this.insertAdjacentHTML('beforeend',h),this};
Element.prototype.prependHTML=function(h){return this.insertAdjacentHTML('afterbegin',h),this};
Element.prototype.appendTo=function(p){return($(p)||p).appendChild(this),this};
Element.prototype.prependTo=function(p){const t=$(p)||p;return t.insertBefore(this,t.firstChild),this};

String.prototype.appendTo=function(p){const e=$(p)||p;return e.insertAdjacentHTML('beforeend',this),e};
String.prototype.prependTo=function(p){const e=$(p)||p;return e.insertAdjacentHTML('afterbegin',this),e};

const addClass=(e,c)=>(e.classList.add(c),e);
const removeClass=(e,c)=>(e.classList.remove(c),e);
const toggleClass=(e,c)=>(e.classList.toggle(c),e);
const hasClass=(e,c)=>e.classList.contains(c);

const attr=(e,n,v)=>v===void 0?e.getAttribute(n):(e.setAttribute(n,v),e);
const removeAttr=(e,n)=>(e.removeAttribute(n),e);
const css=(e,p,v)=>v===void 0?getComputedStyle(e).getPropertyValue(p):(e.style[p]=v,e);

const on=(e,t,h)=>(e.addEventListener(t,h),e);
const off=(e,t,h)=>(e.removeEventListener(t,h),e);
const trigger=(e,t)=>(e.dispatchEvent(new Event(t)),e);

const ready=f=>document.readyState!=='loading'?f():document.addEventListener('DOMContentLoaded',f);

const ajax=(u,o={})=>fetch(u,o).then(r=>r.ok?r.json():Promise.reject(r));

const storage={
    get:k=>JSON.parse(localStorage.getItem(k)),
    set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
    remove:k=>localStorage.removeItem(k),
    clear:()=>localStorage.clear()
};

const cookie={
    get:k=>document.cookie.split('; ').find(row=>row.startsWith(k+'='))?.split('=')[1],
    set:(k,v,d)=>document.cookie=`${k}=${v};max-age=${d||86400};path=/`,
    remove:k=>document.cookie=`${k}=;max-age=-1;path=/`
};

const animate=(e,p,d=300)=>new Promise(r=>{
    e.style.transition=`all ${d}ms ease`;
    Object.keys(p).forEach(k=>e.style[k]=p[k]);
    setTimeout(()=>(e.style.transition='',r(e)),d);
});

const debounce=(f,d=300)=>{let t;return(...a)=>(clearTimeout(t),t=setTimeout(()=>f(...a),d))};
const throttle=(f,d=300)=>{let l=0;return(...a)=>{const n=Date.now();if(n-l>=d){f(...a);l=n}}};

const uid=(l=8)=>'x'.repeat(l).replace(/x/g,()=>Math.random().toString(36).charAt(2));

const clone=o=>JSON.parse(JSON.stringify(o));
const merge=(...o)=>Object.assign({},...o);

const is={
    arr:a=>Array.isArray(a),
    obj:o=>o===Object(o)&&!is.arr(o)&&typeof o!=='function',
    str:s=>typeof s==='string',
    num:n=>typeof n==='number'&&!isNaN(n),
    fun:f=>typeof f==='function',
    nul:n=>n===null,
    und:u=>u===void 0,
    el:e=>e instanceof Element
};

const wait=d=>new Promise(r=>setTimeout(r,d));

const raf=f=>{let r;const g=()=>(f(),r=requestAnimationFrame(g));g();return()=>cancelAnimationFrame(r)};

const drag=(e,h=()=>{},u=()=>{})=>{
    const m=ev=>{h(ev);document.addEventListener('mousemove',mm);document.addEventListener('mouseup',mu)};
    const mm=ev=>h(ev);
    const mu=ev=>(u(ev),document.removeEventListener('mousemove',mm),document.removeEventListener('mouseup',mu));
    e.addEventListener('mousedown',m);
    return()=>e.removeEventListener('mousedown',m);
};

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

const lazy=(s='[data-src]',o={})=>{
    const io=new IntersectionObserver((e,o)=>{
        e.forEach(e=>e.isIntersecting&&(e.target.src=e.target.dataset.src,o.unobserve(e.target)));
    },o);
    $$(s).forEach(e=>io.observe(e));
    return io;
};

String.prototype.encrypt = function(base = 64) {
  return btoa(unescape(encodeURIComponent(this)));
};

String.prototype.decrypt = function(base = 64) {
  return decodeURIComponent(escape(atob(this)));
};

String.prototype.shuffle = function() {
  return this.split('').sort(() => Math.random() - 0.5).join('');
};

String.prototype.firstWord = function() {
  return this.split(/\s+/)[0];
};

String.prototype.lastWord = function() {
  const words = this.split(/\s+/);
  return words[words.length - 1];
};

String.prototype.getWord = function(index) {
  return this.split(/\s+/)[index];
};

String.prototype.log = function() {
  console.log(this);
  return this;
};

String.prototype.isUpperCase = function() {
  return this === this.toUpperCase();
};

String.prototype.isLowerCase = function() {
  return this === this.toLowerCase();
};

String.prototype.randomCharacter = function() {
  return this[Math.floor(Math.random() * this.length)];
};

String.prototype.randomWord = function() {
  const words = this.split(/\s+/);
  return words[Math.floor(Math.random() * words.length)];
};

String.prototype.longestWord = function() {
  return this.split(/\s+/).reduce((longest, current) =>
    current.length > longest.length ? current : longest, '');
};

String.prototype.shortestWord = function() {
  return this.split(/\s+/).reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest,
    this.split(/\s+/)[0] || '');
};

String.prototype.mostFrequentWord = function() {
  const words = this.split(/\s+/);
  const frequency = {};
  words.forEach(word => frequency[word] = (frequency[word] || 0) + 1);
  return Object.entries(frequency).sort((a, b) => b[1] - a[1])[0][0];
};

String.prototype.mostFrequentCharacter = function() {
  const frequency = {};
  this.split('').forEach(char => frequency[char] = (frequency[char] || 0) + 1);
  return Object.entries(frequency).sort((a, b) => b[1] - a[1])[0][0];
};

String.prototype.leastFrequentWord = function() {
  const words = this.split(/\s+/);
  const frequency = {};
  words.forEach(word => frequency[word] = (frequency[word] || 0) + 1);
  return Object.entries(frequency).sort((a, b) => a[1] - b[1])[0][0];
};

String.prototype.leastFrequentCharacter = function() {
  const frequency = {};
  this.split('').forEach(char => frequency[char] = (frequency[char] || 0) + 1);
  return Object.entries(frequency).sort((a, b) => a[1] - b[1])[0][0];
};

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

String.prototype.countOccurrences = function(substring) {
  return this.split(substring).length - 1;
};

String.prototype.capitalizeFirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalizeWords = function() {
  return this.split(' ').map(word => word.capitalizeFirst()).join(' ');
};

String.prototype.truncate = function(length = 100, ellipsis = '...') {
  return this.length > length ? this.substring(0, length) + ellipsis : this;
};

String.prototype.removeHTMLTags = function() {
  return this.replace(/<[^>]*>/g, '');
};

String.prototype.toSlug = function() {
  return this.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

String.prototype.toCamelCase = function() {
  return this.replace(/[-_\s]+(.)?/g, (_, character) =>
    character ? character.toUpperCase() : '');
};

String.prototype.toSnakeCase = function() {
  return this.replace(/\s+/g, '_')
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase();
};

String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, word =>
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
};

String.prototype.contains = function(substring) {
  return this.indexOf(substring) !== -1;
};

String.prototype.equals = function(otherString, caseInsensitive = true) {
  return caseInsensitive ?
    this.toLowerCase() === otherString.toLowerCase() :
    this === otherString;
};

String.prototype.textBetween = function(start, end) {
  const startPosition = this.indexOf(start) + start.length;
  return this.substring(startPosition, this.indexOf(end, startPosition));
};

/* ARRAY PROTOTYPE EXTENSIONS */
Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5);
};

Array.prototype.getRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.unique = function() {
  return [...new Set(this)];
};

Array.prototype.compact = function() {
  return this.filter(Boolean);
};

Array.prototype.count = function(value) {
  return this.filter(item => item === value).length;
};

Array.prototype.merge = function(otherArray) {
  return [...this, ...otherArray];
};

Array.prototype.chunk = function(size) {
  const result = [];
  for (let i = 0; i < this.length; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};

Array.prototype.pluck = function(property) {
  return this.map(item => item[property]);
};

Array.prototype.sum = function() {
  return this.reduce((total, current) => total + current, 0);
};

Array.prototype.average = function() {
  return this.sum() / this.length;
};

Array.prototype.min = function() {
  return Math.min(...this);
};

Array.prototype.max = function() {
  return Math.max(...this);
};

Array.prototype.groupBy = function(key) {
  return this.reduce((result, item) => {
    result[item[key]] = [...(result[item[key]] || []), item];
    return result;
  }, {});
};

Array.prototype.sortBy = function(key, direction = 1) {
  return this.sort((a, b) => a[key] > b[key] ? direction : -direction);
};

Array.prototype.difference = function(otherArray) {
  return this.filter(item => !otherArray.includes(item));
};

Array.prototype.intersection = function(otherArray) {
  return this.filter(item => otherArray.includes(item));
};

Array.prototype.take = function(count) {
  return this.slice(0, count);
};

Array.prototype.skip = function(count) {
  return this.slice(count);
};

Array.prototype.paginate = function(page = 1, limit = 10) {
  return this.skip((page - 1) * limit).take(limit);
};

/* RANDOM UTILITIES */
const random = {
  integer: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  
  float: (min, max, decimalPlaces) => {
    const value = Math.random() * (max - min) + min;
    return decimalPlaces ? parseFloat(value.toFixed(decimalPlaces)) : value;
  },
  
  string: (length = 8, includeUppercase = true, includeLowercase = true,
    includeSymbols = false, includeNumbers = true, includeOperators = false) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const numbers = '0123456789';
    const operators = '+-*/';
    
    let characterPool = '';
    if (includeUppercase) characterPool += uppercase;
    if (includeLowercase) characterPool += lowercase;
    if (includeSymbols) characterPool += symbols;
    if (includeNumbers) characterPool += numbers;
    if (includeOperators) characterPool += operators;
    
    return Array(length).fill().map(() =>
      characterPool[random.integer(0, characterPool.length - 1)]).join('');
  },
  
  color: (alpha = 1) => {
    const r = random.integer(0, 255);
    const g = random.integer(0, 255);
    const b = random.integer(0, 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
  
  boolean: () => Math.random() >= 0.5,
  
  date: (start, end) => {
    const startDate = start instanceof Date ? start.getTime() : new Date(start).getTime();
    const endDate = end instanceof Date ? end.getTime() : new Date(end).getTime();
    return new Date(random.integer(startDate, endDate));
  },
  
  arrayItem: (array) => array[random.integer(0, array.length - 1)],
  
  weighted: (weights) => {
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    let randomValue = Math.random() * total;
    for (let i = 0; i < weights.length; i++) {
      if (randomValue < weights[i]) return i;
      randomValue -= weights[i];
    }
    return weights.length - 1;
  }
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
Element.prototype.html = function(newHtml) {
  if (newHtml === undefined) return this.innerHTML;
  this.innerHTML = newHtml;
  return this;
};
Element.prototype.val = function(newValue) {
  if (newValue === undefined) return this.value;
  this.value = newValue;
  return this;
};
Element.prototype.text = function(newText) {
  if (newText === undefined) return this.textContent;
  this.textContent = newText;
  return this;
};
Element.prototype.moveX = function(value) {
  this.style.transform = `translateX(${value}px)`;
  return this;
};
Element.prototype.moveY = function(value) {
  this.style.transform = `translateY(${value}px)`;
  return this;
};
Element.prototype.rotateX = function(degrees) {
  this.style.transform = `rotateX(${degrees}deg)`;
  return this;
};
Element.prototype.rotateY = function(degrees) {
  this.style.transform = `rotateY(${degrees}deg)`;
  return this;
};
Element.prototype.rotateZ = function(degrees) {
  this.style.transform = `rotateZ(${degrees}deg)`;
  return this;
};
Element.prototype.skewX = function(degrees) {
  this.style.transform = `skewX(${degrees}deg)`;
  return this;
};
Element.prototype.skewY = function(degrees) {
  this.style.transform = `skewY(${degrees}deg)`;
  return this;
};
Element.prototype.skew = function(x, y) {
  this.style.transform = `skew(${x}deg, ${y}deg)`;
  return this;
};
Element.prototype.rotate = function(x, y, z) {
  this.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  return this;
};
Element.prototype.move = function(x, y) {
  this.style.transform = `translate(${x}px, ${y}px)`;
  return this;
};
Element.prototype.each = function(callback) {
  Array.from(this.children).forEach((child, i, array) => {
    callback(child, i, array);
  });
  return this;
};
Element.prototype.find = function(selector) {
  return this.querySelector(selector);
};
Element.prototype.findGrand = function(selector) {
  return this.querySelectorAll(selector);
};
const add = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const subtract = (...numbers) => numbers.reduce((result, num) => result - num);
const multiply = (...numbers) => numbers.reduce((product, num) => product * num, 1);
const loadJson = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const loadText = async (url) => {
  const response = await fetch(url);
  return await response.text();
};
const buildItem = (tagName) => document.createElement(tagName);

const bench = (fn) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
};
const start = (callback) => {
  if (document.readyState === 'complete') {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
};

const end = () => window.close();
NodeList.prototype.each = function(callback) {
  Array.from(this).forEach((child, i, array) => {
    callback(child, i, array);
  });
  return this;
};
Element.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  wrapper.appendChild(this);
  return this;
};
Element.prototype.empty = function() {
  while(this.firstChild) this.removeChild(this.firstChild);
  return this;
};
Element.prototype.replaceWith = function(newElement) {
  this.parentNode.replaceChild(newElement, this);
  return newElement;
};
Element.prototype.pos = function() {
  const rect = this.getBoundingClientRect();
  return {top: rect.top, left: rect.left, width: rect.width, height: rect.height};
};
Element.prototype.center = function() {
  this.style.position = 'absolute';
  this.style.left = '50%';
  this.style.top = '50%';
  this.style.transform = 'translate(-50%, -50%)';
  return this;
};
Element.prototype.fadeIn = function(duration=300) {
  this.style.transition = `opacity ${duration}ms`;
  this.style.opacity = '1';
  return this;
};
Element.prototype.fadeOut = function(duration=300) {
  this.style.transition = `opacity ${duration}ms`;
  this.style.opacity = '0';
  return this;
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
Element.prototype.animateQueue = function(...animations) {
  animations.reduce((promise, animation) => 
    promise.then(() => new Promise(res => {
      this.style.transition = `${animation.duration||300}ms ${animation.easing||'ease'}`;
      Object.assign(this.style, animation.styles);
      setTimeout(res, animation.duration||300);
    })), 
    Promise.resolve()
  );
  return this;
};

const fetchWithTimer = (url, options={}, timeout=5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
};
const createSocket = (url, handlers) => {
  const socket = new WebSocket(url);
  Object.entries(handlers).forEach(([event, handler]) => {
    socket.addEventListener(event, handler);
  });
  return {
    send: data => socket.send(JSON.stringify(data)),
    close: () => socket.close()
  };
};
const $find = (selector, context=document) => {
  if (selector.startsWith('#')) return $(selector);
  if (selector.startsWith('.')) return $$(selector);
  if (selector.includes('>')) {
    const [parent, child] = selector.split('>').map(s => s.trim());
    return $$(parent).map(el => el.find(child));
  }
  return $$(selector);
};
const live = (selector, callback) => {
  document.addEventListener('DOMContentLoaded', () => {
    $$(selector).forEach(el => callback(el));
    new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.matches?.(selector)) callback(node);
          if (node.querySelectorAll) {
            node.querySelectorAll(selector).forEach(el => callback(el));
          }
        });
      });
    }).observe(document.body, {childList: true, subtree: true});
  });
};

const memory = () => {
  const used = process.memoryUsage?.().heapUsed || 0;
  return `${Math.round(used / 1024 / 1024 * 100) / 100} MB`;
};
const fps = (callback) => {
  let last = performance.now();
  let frames = 0;
  const loop = () => {
    const now = performance.now();
    frames++;
    if (now > last + 1000) {
      callback(frames);
      frames = 0;
      last = now;
    }
    requestAnimationFrame(loop);
  };
  loop();
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

window.Murgo={
    $,$$,hide,show,DB,fps,memory,toggle,deepClone,$find,live,createSocket,fetchWithTimer,deepEqual,pipe,memoize,kill,addClass,removeClass,toggleClass,hasClass,
    attr,removeAttr,css,on,off,trigger,ready,ajax,storage,cookie,animate,
    debounce,throttle,random,uid,clone,merge,is,add,subtract,multiply,
    loadJson,loadText,buildItem,bench,start,end,wait,raf,drag,observe,
    hotkeys,lazy,
    extend:(k,f)=>(Murgo[k]=f)
};
