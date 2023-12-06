
var typeData = new Typed(".role", {
    strings: [
        "Jobs",
        "and Internships",

    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});



var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

document.getElementById('joinBtn').addEventListener('click', function () {
    alert('You have joined the Hackingly Community!');
});

