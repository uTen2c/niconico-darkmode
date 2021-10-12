const tag_body = document.getElementsByTagName('body')[0];

chrome.storage.local.get(["setting"], function (items) {
  if(items.setting == "true"){
    tag_body.classList.add('niconico-darkmode-setting-true');
  }
});

console.log("niconico-Darkmode-iframe: 起動中です。");

