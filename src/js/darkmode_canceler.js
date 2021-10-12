/* 一部ページのダークモードを強制解除するjs */

const tag_body = document.getElementsByTagName('body')[0];

tag_body.classList.remove('niconico-darkmode-setting-true');
console.log("niconico-Darkmode: このページではダークモードを利用できません。");