var ads = document.getElementById("ads");

window.onload = function() {
    ads.volume = 0.1;
}

var adsVol = document.getElementById("adsVol");

adsVol.onclick = function() {
    if (ads.muted == false) {
        adsVol.innerText = ("UnMute");
        ads.muted = true;
    } else {
        adsVol.innerText = ("Mute");
        ads.muted = false;
    }
}

var catContent = document.getElementById("catContent");
var catSlider = document.getElementById("catSlider");
var sliderBtn = document.getElementById("sliderBtn");

catSlider.onclick = function() {
    catContent.classList.toggle("active");
    if (catContent.classList.contains("active")) {
        sliderBtn.classList.replace("fa-angle-down", "fa-angle-up")
    } else {
        sliderBtn.classList.replace("fa-angle-up", "fa-angle-down")
    }
}

var scrollPLase = document.querySelector(".cat .catContent ul");
var scrollL = document.querySelector(".cat button.left");
var scrollR = document.querySelector(".cat button.right");

scrollL.onclick = function() {
    scrollPLase.scrollBy(-250, 0);
}
scrollR.onclick = function() {
    scrollPLase.scrollBy(250, 0);
}