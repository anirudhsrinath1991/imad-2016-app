// Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
// Make a request to the counterendpoint
var request = new XMLHttpRequest();

// Store the output in a variable

// Render the variable
counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();    
}
