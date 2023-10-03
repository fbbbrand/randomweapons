document.getElementById('btnWeapons').addEventListener('click', showImages);

function showImages() {
    var images = document.querySelectorAll('.grid-container div');
    images.forEach(function(image) {
        image.style.display = 'block';
    });
}

document.getElementById('btnWeapons').addEventListener('click', function() {
    showImages();
    this.style.display = 'none'; // Cacher le bouton "Weapons" lorsque cliqué

    document.getElementById('btnPick').style.display = 'inline-block';
    document.getElementById('btnPickAll').style.display = 'inline-block';
});

// Créez une liste pour stocker les images sélectionnées
var selectedWeapons = [];

// Ajoutez un écouteur d'événement à chaque image
var images = document.querySelectorAll('.grid-container div');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Vérifiez si l'image est déjà sélectionnée
        if (!selectedWeapons.includes(this)) {
            // Ajoutez l'image à la liste des images sélectionnées
            selectedWeapons.push(this);
            // Mettez en surbrillance l'image (ajoutez une classe CSS pour indiquer la sélection)
            this.classList.add('selected');
        }
    });
});

document.getElementById('btnPickAll').addEventListener('click', selectAllImages);

function selectAllImages() {
    var images = document.querySelectorAll('.grid-container div');
    images.forEach(function(image) {
        image.click(); // Simule un clic sur chaque image
    });
}

function pickRandomWeapon() {
    if (selectedWeapons.length > 0) {
        var randomIndex = Math.floor(Math.random() * selectedWeapons.length);
        var randomWeapon = selectedWeapons[randomIndex];

        // Réinitialisez l'animation
        var conteneur = document.querySelector('.grid-container');
        conteneur.style.animation = 'none';
        conteneur.offsetHeight; // Forcez un repaint pour réinitialiser l'animation
        conteneur.style.animation = 'spin 2s ease-in-out forwards'; // Ajustez la durée d'animation selon vos préférences

        setTimeout(function() {
            // Affichez l'image sélectionnée
            var carre = document.querySelector('.carre');
            carre.innerHTML = '';
            carre.appendChild(randomWeapon.cloneNode(true));
        }, 2000); // Ajustez le temps d'attente avant l'arrêt aléatoire si nécessaire
    } else {
        alert("Aucune arme sélectionnée");
    }
}