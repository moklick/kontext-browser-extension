const storageAPI = (() => {
  if(window.chrome && chrome.storage) return chrome.storage;
  if(window.storage) return window.storage;
  if(window.browser && browser.storage) return browser.storage;
  return browser.extension.storage;
 })();

const storage = storageAPI.sync || storageAPI.local;
console.log('möpp');
function getSettings(callback) {
  console.log('get');
  storage.get(null, callback)
}







