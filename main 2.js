var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle() {
  var square = document.querySelector('.square');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  } 
}

var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle1() {
  var square = document.querySelector('.square1');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  } 
}

var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle2() {
  var square = document.querySelector('.square2');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  } 
}

var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle3() {
  var square = document.querySelector('.square3');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  } 
}

var upClass = 'toggle-up';
var downClass = 'toggle-down';

function toggle4() {
  var square = document.querySelector('.square4');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  } 
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
