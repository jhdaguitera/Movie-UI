var $button = document.querySelector('.increment-btn');
var $counter = document.querySelector('.counter');

$button.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) + 1; // `parseInt` converts the `value` from a string to a number
}, false);


var $button1 = document.querySelector('.increment-btn1');
var $counter1 = document.querySelector('.counter1');

$button1.addEventListener('click', function(){
  $counter1.value = parseInt($counter1.value) + 1; // `parseInt` converts the `value` from a string to a number
}, false);


var $button2 = document.querySelector('.increment-btn2');
var $counter2 = document.querySelector('.counter2');

$button2.addEventListener('click', function(){
  $counter2.value = parseInt($counter2.value) + 1; // `parseInt` converts the `value` from a string to a number
}, false);


// decrement values

var $button12 = document.querySelector('.decrement-btn');
var $counter = document.querySelector('.counter');

$button12.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) - 1; // `parseInt` converts the `value` from a string to a number
}, false);


var $button22 = document.querySelector('.decrement-btn1');
var $counter1 = document.querySelector('.counter1');

$button22.addEventListener('click', function(){
  $counter1.value = parseInt($counter1.value) - 1; // `parseInt` converts the `value` from a string to a number
}, false);

var $button32 = document.querySelector('.decrement-btn2');
var $counter2 = document.querySelector('.counter2');

$button32.addEventListener('click', function(){
  $counter2.value = parseInt($counter2.value) - 1; // `parseInt` converts the `value` from a string to a number
}, false);


