console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move Image
var img = document.getElementById('madi');
img.onclick = function () {
    var  interval = setInterval(moveRight,100);
}