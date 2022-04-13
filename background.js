try {
  chrome.contextMenus.create({
    title: 'Copy link text',
    id: 'copyLinkText',
    contexts: ['link'],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'copyLinkText')
      chrome.tabs.sendMessage(tab.id,
        'copyText',
        { frameId: info.frameId },
        (response) => response.textCopied && chrome.storage.local.set({ copiedText: response.text }));

    return true;
  });

} catch (err) {
  console.error(err);
}