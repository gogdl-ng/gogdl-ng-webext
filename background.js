let hostname = 'http://192.168.178.2:3200';

chrome.runtime.onMessage.addListener((folderId) => {
    hostname = hostname + "/api/v1/jobs";

    fetch(hostname, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ DriveId: folderId })
    })
});