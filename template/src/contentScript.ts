// Content script for crxinit
console.log("[crxinit] Content script loaded!");

// Example: Highlight all <h1> elements
Array.from(document.querySelectorAll('h1')).forEach(el => {
  el.style.background = '#ffe066';
  el.innerText += ' (highlighted by crxinit)';
});
