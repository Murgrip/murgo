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
window.Murgo={
    $,$$,hide,show,toggle,kill,addClass,removeClass,toggleClass,hasClass,
    attr,removeAttr,css,on,off,trigger,ready,ajax,storage,cookie,animate,
    debounce,throttle,random,uid,clone,merge,is,wait,raf,drag,observe,
    hotkeys,lazy,
    extend:(k,f)=>(Murgo[k]=f)
};
