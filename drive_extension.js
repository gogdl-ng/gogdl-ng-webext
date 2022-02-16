(() => {
    const appServerUrl = 'http://localhost/api/v1/tasks';

    const appElementId = 'gogdl';
    const appElementText = 'Send to gogdl-ng';

    const iconSource = 'https://avatars.githubusercontent.com/u/95575986';
    const iconHeight = '24px';
    const iconWidth = '24px';

    let getTemplateElement = () => {
        var elements = document.getElementsByTagName('div');

        for (let element of elements) {
            if (element.getAttribute('role') == 'treeitem' && !element.hasAttribute('aria-expanded')) {
                return element;
            }
        }
    }

    let setIcon = (node) => {
        var iconElements = node.querySelectorAll('svg');

        for (let element of iconElements) {
            let img = document.createElement("img");
            img.src = iconSource;
            img.style.height = iconHeight;
            img.style.width = iconWidth;

            element.replaceWith(img)
        }
    }

    let setText = (node) => {
        let span = node.querySelectorAll("span")[0]
        span.innerHTML = appElementText;

        while (span.attributes.length > 0)
            span.removeAttribute(span.attributes[0].name);
    }

    let onAppElementClicked = () => {
        debugger;

        var folderId = getFolderId()

        fetch(appServerUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ DriveId: folderId })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    let getFolderId = () => {
        var segments = window.location.href.split('/');

        return segments[segments.length - 1]
    }

    let createAppElement = () => {
        let templateElement = getTemplateElement();

        if (!templateElement) {
            console.log('failed to find template element. aborting..');
            return;
        }

        let appElement = templateElement.cloneNode(true);
        appElement.id = appElementId;

        appElement.firstElementChild.removeAttribute('data-target');
        appElement.firstElementChild.removeAttribute('data-tree-id');

        appElement.onclick = onAppElementClicked;

        templateElement.parentElement.prepend(appElement)

        setText(appElement);
        setIcon(appElement);
    }

    // did already run, exit
    if (document.getElementById(appElementId)) {
        return;
    }

    createAppElement();
})();