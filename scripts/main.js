var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myVariable;
myVariable = 'bob';

var iceCream = 'chocolate';
/*
if (iceCream === 'chocolate') {// its === for equivalency
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/
//setting var to the element object html
var myHTML = document.querySelector('html');
//then setting the onclick property for that object
myHTML.onclick = function() {};

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stock2.jpg') {
      myImage.setAttribute ('src','images/stock3.jpg');
    } else {
      myImage.setAttribute ('src','images/stock2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}









