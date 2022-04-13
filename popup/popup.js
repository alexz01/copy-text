chrome.storage.local.get('copiedText', (data) => {
  if (data && data.copiedText) {
    const textCopied = document.querySelector("#copiedText");
    textCopied.innerHTML = data.copiedText;
  }
});