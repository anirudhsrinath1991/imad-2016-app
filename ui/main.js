console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move Image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
}