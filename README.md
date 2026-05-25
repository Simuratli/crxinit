

# crxinit


crxinit is a modern Chrome extension boilerplate powered by React, Vite, and TypeScript. It helps you quickly scaffold and develop browser extensions with best practices and a fast toolchain.

## Features

- **background.ts**: Runs background services and event listeners. Example: Logs a message on install and listens for messages.
- **contentScript.ts**: Runs scripts directly on web pages. Example: Highlights all `<h1>` elements and appends a label.
- **popup.html & App.tsx**: The popup UI, built with React.
- **Vite + TypeScript**: Fast development and modern tooling.

## Getting Started

### 1. Installation

Install crxinit globally:

```sh
npm install -g crxinit
```

Create a new extension project:

```sh
crxinit my-extension
cd my-extension
npm install
npm run dev
```

### 2. Development

- Edit `src/background.ts` for background logic using Chrome APIs.
- Edit `src/contentScript.ts` for code that runs on web pages.
- Edit `src/App.tsx` for the popup UI.

### 3. Build & Load in Chrome

Build your extension for production:

```sh
npm run build
```

Then load the `dist/` folder as an unpacked extension in Chrome:

1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist/` folder

## Example Code

### contentScript.ts
```ts
// Content script for crxinit
console.log("[crxinit] Content script loaded!");

// Example: Highlight all <h1> elements
Array.from(document.querySelectorAll('h1')).forEach(el => {
  el.style.background = '#ffe066';
  el.innerText += ' (highlighted by crxinit)';
});
```

### background.ts
```ts
// Background script for crxinit
chrome.runtime.onInstalled.addListener(() => {
  console.log('[crxinit] Extension installed!');
});

// Example: Listen for messages
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message === 'ping') {
    sendResponse('pong from background');
  }
});
```

## Contributing
Pull requests and suggestions are welcome!

## License
MIT
