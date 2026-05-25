// Background script for Chromify
chrome.runtime.onInstalled.addListener(() => {
  console.log('[Chromify] Extension installed!');
});

// Example: Listen for messages
chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message === 'ping') {
    sendResponse('pong from background');
  }
});
