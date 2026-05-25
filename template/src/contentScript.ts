// Content script for Chromify
console.log("[Chromify] Content script loaded!");

// Example: Highlight all <h1> elements
Array.from(document.querySelectorAll('h1')).forEach(el => {
  el.style.background = '#ffe066';
  el.innerText += ' (highlighted by Chromify)';
});
