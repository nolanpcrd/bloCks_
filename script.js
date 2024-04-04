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

// avis

let rotation = 0;
let currentIndex = 0;
let currentLocation = "front";

const flechegauche = document.getElementById('flechegauche');
const flechedroite = document.getElementById('flechedroite');
const avisinner = document.getElementById('avis-inner');
const avisFrontText = document.querySelector('#avis-front .avis-text');
const avisBackText = document.querySelector('#avis-back .avis-text');

fetch('avis.json')
    .then(response => response.json())
    .then(data => {
        const commentaires = data.map(item => item.commentaire);

        avisFrontText.innerHTML = commentaires[currentIndex];

        flechegauche.addEventListener('click', function(event) {
            currentIndex = (currentIndex - 1 + commentaires.length) % commentaires.length;
            if (currentLocation === "front") {
                avisBackText.innerHTML = commentaires[currentIndex];
                currentLocation = "back";
            }
            else {
                avisFrontText.innerHTML = commentaires[currentIndex];
                currentLocation = "front";
            }

            rotation -= 180;
            avisinner.style.transform = `rotateY(${rotation}deg)`;

            event.stopPropagation();
        });

        flechedroite.addEventListener('click', function(event) {
            currentIndex = (currentIndex + 1) % commentaires.length;
            if (currentLocation === "front") {
                avisBackText.innerHTML = commentaires[currentIndex];
                currentLocation = "back";
            }
            else {
                avisFrontText.innerHTML = commentaires[currentIndex];
                currentLocation = "front";
            }

            rotation += 180;
            avisinner.style.transform = `rotateY(${rotation}deg)`;

            event.stopPropagation();
        });
    });

let rotationParents = 0;
let currentIndexParents = 0;
let currentLocationParents = "front";

const flechegaucheParents = document.getElementById('flechegauche-parents');
const flechedroiteParents = document.getElementById('flechedroite-parents');
const avisinnerParents = document.getElementById('avis-inner-parents');
const avisFrontTextParents = document.querySelector('#avis-front-parents .avis-text');
const avisBackTextParents = document.querySelector('#avis-back-parents .avis-text');

fetch('avis-parents.json')
    .then(response => response.json())
    .then(data => {
        const commentairesparents = data.map(item => item.commentaire);

        avisFrontTextParents.innerHTML = commentairesparents[currentIndexParents];

        flechegaucheParents.addEventListener('click', function(event) {
            currentIndexParents = (currentIndexParents - 1 + commentairesparents.length) % commentairesparents.length;
            if (currentLocationParents === "front") {
                avisBackTextParents.innerHTML = commentairesparents[currentIndexParents];
                currentLocationParents = "back";
            }
            else {
                avisFrontTextParents.innerHTML = commentairesparents[currentIndexParents];
                currentLocationParents = "front";
            }

            rotationParents -= 180;
            avisinnerParents.style.transform = `rotateY(${rotationParents}deg)`;

            event.stopPropagation();
        });

        flechedroiteParents.addEventListener('click', function(event) {
            currentIndexParents = (currentIndexParents + 1) % commentairesparents.length;
            if (currentLocationParents === "front") {
                avisBackTextParents.innerHTML = commentairesparents[currentIndexParents];
                currentLocationParents = "back";
            }
            else {
                avisFrontTextParents.innerHTML = commentairesparents[currentIndexParents];
                currentLocationParents = "front";
            }

            rotationParents += 180;
            avisinnerParents.style.transform = `rotateY(${rotationParents}deg)`;

            event.stopPropagation();
        });
    });
