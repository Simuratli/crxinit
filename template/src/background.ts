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
