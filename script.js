let forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (let c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (let e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

let hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBox = document.querySelector('.hamburger-box');
    const hamburgerLabel = document.querySelector('.hamburger-label');
    const hamburgerLabelLinks = document.querySelector('.hamburger-label span');
    let isLabelVisible = false;

    hamburgerBox.addEventListener('click', function () {
        if (!isLabelVisible) {
            hamburgerLabel.style.display = 'flex';
            hamburgerLabelLinks.style.display = "flex";
            isLabelVisible = true;
        } else {
            hamburgerLabel.style.display = 'none';
            isLabelVisible = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navlinks = document.querySelectorAll('.nav-menu a');

    function setActiveLink(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Réinitialiser toutes les classes actives
        navlinks.forEach(link => {
            link.classList.remove('active-color');
        });

        // Définir la classe active sur le lien cliqué
        this.classList.add('active-color');
    }

    navlinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });
});