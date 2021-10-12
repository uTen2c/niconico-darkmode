const tag_body = document.getElementsByTagName('body')[0];
var host = location.hostname + "";

if(host == "jk.nicovideo.jp"){
  single_page_action();
  setTimeout(single_page_action, 200);
}else{
  single_page_action();
}

function single_page_action() {
  chrome.storage.local.get(["version"], function (items) {
    console.log("niconico-Darkmode: version: " + items.version);
  });
  
  chrome.storage.local.get(["setting"], function (items) {
    console.log("niconico-Darkmode: Setting: " + items.setting);
    if(items.setting == "true"){
      tag_body.classList.add('niconico-darkmode-setting-true');
    }
  });
}

console.log("niconico-Darkmode: このページでは設定の切り替えはできません。");