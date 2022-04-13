let targetElement;
document.addEventListener('contextmenu', (event) => targetElement = event.target);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'copyText')
    navigator.clipboard.writeText(targetElement.innerText)
      .then(() => sendResponse({ textCopied: true, text: targetElement.innerText }))
      .catch(error => {
        console.error(error);
        sendResponse({ textCopied: false, text: null });
      });
  return true;
});