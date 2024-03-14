window.onscroll = function() {
    if (window.pageYOffset > 100) {
        document.getElementById("header").style.opacity = "0.9";
        document.getElementById("header").style.backdropFilter = "blur(100px)";
        document.getElementById("header").style.borderBottomRightRadius = "20px";
        document.getElementById("header").style.borderBottomLeftRadius = "20px";
    }
    else {
        document.getElementById("header").style.opacity = "1";
        document.getElementById("header").style.backdropFilter = "blur(0px)";
        document.getElementById("header").style.borderBottomRightRadius = "0px";
        document.getElementById("header").style.borderBottomLeftRadius = "0px";
    }
}

const fleche = document.getElementById('fleche2');
const app = document.getElementById('app');

fleche.addEventListener('click', function(event) {
    if (!app.classList.contains('flipped')) {
        app.classList.toggle('flipped');
    }
    else {
        app.classList.remove('flipped');
    }
    event.stopPropagation();
});