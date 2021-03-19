function parallax(element, distance, speed) {
    const item = document.querySelector(".image2");

    item.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{
    parallax("header", window.scrollY, 1);


});





function parallax2(element, distance, speed) {
    const item2 = document.querySelector(".image3");

    item2.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{

    parallax2(".small-photo", window.scrollY, 0.6);

});


function parallax3(element, distance, speed) {
    const item3 = document.querySelector(".image4");

    item3.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{

    parallax3(".small-photo", window.scrollY, 0.9);

});


function parallax4(element, distance, speed) {
    const item4 = document.querySelector(".image5");

    item4.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{

    parallax4(".small-photo", window.scrollY, 1.2);

});

// Second set of images that go -Y axis (up)

function parallax5(element, distance, speed) {
    const item5 = document.querySelector(".image11");

    item5.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{

    parallax5(".small-photo", window.scrollY, -.4);

});


function parallax6(element, distance, speed) {
    const item6 = document.querySelector(".image12");

    item6.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll', function()
{

    parallax6(".small-photo", window.scrollY, -.9);

});


function parallax7(element, distance, speed) {
    const item7 = document.querySelector(".image11");


    item7.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax7(".small-photo", window.scrollY, -.6);

});

function parallax8(element, distance, speed) {
    const item8 = document.querySelector(".image10");


    item8.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax8(".small-photo", window.scrollY, -.9);

});


function parallax9(element, distance, speed) {
    const item9 = document.querySelector(".image9");


    item9.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax9(".small-photo", window.scrollY, -.7);

});



function parallax10(element, distance, speed) {
    const item10 = document.querySelector(".image8");


    item10.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax10(".small-photo", window.scrollY, -.5);

});


function parallax11(element, distance, speed) {
    const item11 = document.querySelector(".image7");


    item11.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax11(".small-photo", window.scrollY, -.5);

});


function parallax12(element, distance, speed) {
    const item12 = document.querySelector(".image6");


    item12.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function()
{

    parallax12(".small-photo", window.scrollY, -.3);

});
