const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close-btn');

// Ouvre la modale quand on clique sur une image dans .screen
document.querySelectorAll('.screen img').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.style.display = 'flex';
    });
});

// Ferme la modale quand on clique sur le bouton ✕
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = '';
});

// Ferme la modale quand on clique sur l'image elle-même
overlayImg.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = '';
});

// Ferme si on clique sur le fond noir
overlay.addEventListener('click', e => {
    if (e.target === overlay) { // éviter de fermer si on clique sur l'image
        overlay.style.display = 'none';
        overlayImg.src = '';
    }
});
