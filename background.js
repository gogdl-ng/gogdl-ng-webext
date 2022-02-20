const api = 'http://192.168.178.2:3200/api/v1/jobs';

chrome.runtime.onMessage.addListener((folderId) => {
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ DriveId: folderId })
    })
});