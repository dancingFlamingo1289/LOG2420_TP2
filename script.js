document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const closeBtn = document.getElementById("close-btn");

    // Ajoute un écouteur à toutes les images
    document.querySelectorAll(".screen img").forEach(img => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.style.display = "flex";
        });
    });

    // Ferme la modale quand on clique sur le fond ou sur le bouton
    closeBtn.addEventListener("click", fermerImage);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) fermerImage();
    });

    function fermerImage() {
        overlay.style.display = "none";
    }
});