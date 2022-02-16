const hostname = 'http://www.yourhost.de';

chrome.runtime.onMessage.addListener((folderId) => {
    hostname = hostname + "/api/v1/tasks";

    fetch(hostname, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ DriveId: folderId })
    })
});