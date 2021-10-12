const tag_body = document.getElementsByTagName('body')[0];
var getPageTitle = document.title;

const maintenance = [
  "ただいまメンテナンス中です。 - ニコニコ生放送",
  "ただいま混雑しています。 - ニコニコ生放送"
];

if(getPageTitle.includes(maintenance)){
  chrome.storage.local.get(["setting"], function (items) {
    if(items.setting == "true"){
      tag_body.classList.add('niconico-darkmode-maintenance');
    }
  });
}