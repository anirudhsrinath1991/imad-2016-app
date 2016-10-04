// Counter Code
var button = document.getElementById('counter');

button.onclick = function () {
    
// Create  a request to the counterendpoint
var request = new XMLHttpRequest();


// Capture the response and store it in a variable
request.onreadystatechange = function () {
if (request.readyState === XMLHttpRequest.DONE) {
// Take some action
if (request.status === 200) {
var counter = request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();    

        }
    }
};

// Make a request
request.open('GET', 'http://anirudhsrinath1991.imad.hasura-app.io/counter',true);
request.send(null);
}

//Create a Submit Form
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function() {
    
}

// Capture a list of names and render it as a list
var names = ['name1','name2','name3','name4'];
var list = ''';
for (var i=0;i< names.length;i++){
    list = '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('nameList');
ul.InnerHTML = list;


