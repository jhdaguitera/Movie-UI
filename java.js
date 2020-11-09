var slidePos = 0;
carousel();
var slideshow;

function carousel() {
    var i;
    slideshow = document.getElementsByClassName("carouselSlides");
    //iterate through slideshow and count length
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slidePos++;
    //start slideshow back at 1 if over
    if (slidePos > slideshow.length) { slidePos = 1 }
    slideshow[slidePos - 1].style.display = "block";
    //change carousel image every 5 seconds 
    setTimeout(carousel, 5000);
}

function currentSlide(index) {
    if (index > slideshow.length) { index = 1 }
    //keep track of index of current slides..same as above
    else if (index < 1) { index = slideshow.length }
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slideshow[index - 1].style.display = "block";
}

function carouselPos(position) {
    slidePos += position;
    //keep track of where in carousel is current slide
    if (slidePos > slideshow.length) { slidePos = 1 } else if (slidePos < 1) { slidePos = slideshow.length }
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slideshow[slidePos - 1].style.display = "block";
}


//adding selection item to the Search Movies display table
function getSelectedDate() {
    var e = document.getElementById("date");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultDate").innerHTML = result;
}

function getSelectedTime() {
    var e = document.getElementById("times");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultTime").innerHTML = result;
}

function getSelectedMovie() {
    var e = document.getElementById("movies");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultMovie").innerHTML = result;
}


//adding selection item to the Purchase Tickets display table
function getSelectedAdult() {
    var e = document.getElementById("adults");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultAdult").innerHTML = result;
}

function getSelectedKid() {
    var e = document.getElementById("children");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultKid").innerHTML = result;
}

function getSelectedSr() {
    var e = document.getElementById("seniors");
    var result = e.options[e.selectedIndex].text;

    document.getElementById("resultSr").innerHTML = result;
}

//adding inputs into Transaction table

function getInputAdult() {
    var inputVal = document.getElementById("fname").text;
    alert(inputVal);
}