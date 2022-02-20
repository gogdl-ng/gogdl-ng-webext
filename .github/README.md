<h1 align="center">gogdl-ng-webext</h1><div align="center">

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![GitHub license](https://img.shields.io/github/license/LegendaryB/gogdl-ng.svg?longCache=true&style=flat-square)](https://github.com/gogdl-ng/gogdl-ng-webext/blob/main/LICENSE)

<sub>Built with ❤︎ by LegendaryB</sub>
</div><br>

This extension injects a button to the Google Drive WebUI. When clicking on it the current folder id is send to your [gogdl-ng](https://github.com/gogdl-ng/gogdl-ng) instance. It was developed and tested on the latest version of Mozilla Firefox and Chrome.

![](https://github.com/gogdl-ng/gogdl-ng-webext/blob/main/.github/assets/extension.png)

## 📝 Requirements
* A configured and running instance of [gogdl-ng](https://github.com/gogdl-ng/gogdl-ng).

## 🚀 How to use it?

### Firefox
1. Open the `background.js` file.
2. Modify the value of the `api` variable on line 1 and add the address of your gogdl-ng instance.
3. Follow [this](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) tutorial.

### Chrome
1. Open the `background.js` file.
2. Modify the value of the `api` variable on line 1 and add the address of your gogdl-ng instance.
3. Follow [this](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) tutorial.
