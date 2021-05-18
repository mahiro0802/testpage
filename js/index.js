function req() {
    fetch('http://mahiro.ml/api/mahiro.php', {
    mode: 'cors',
    credentials: 'include' // ここを追加。
});
}
window.onload = function(){
    req();
}