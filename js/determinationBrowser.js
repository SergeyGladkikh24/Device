var user = detect.parse(navigator.userAgent);

var nameBrowser = user.browser.family;

var doc = document.documentElement;
doc.setAttribute('data-nameBrowser', nameBrowser);