// Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
// Create  a request to the counterendpoint
var request = new XMLHttpRequest();


// Capture the response and store it in a variable
request.onreadystatechange = function () {
if (request.readyState === XMLHttpRequest.DONE) {
// Take some action
if (request.Status === 200) {
var counter = request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();    

        }
    }
};

// Make a request
request.open('GET', 'http://anirudhsrinath1991.imad.hasura-app.io/counter','true')
request.send(null);
}
