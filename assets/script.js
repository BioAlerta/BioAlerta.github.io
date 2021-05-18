const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navigation-bar");
const navItems = document.querySelectorAll(".navigation-item");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const openwindow = document.querySelectorAll(".open-modal");
const closewindow = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
const body = document.body;
const antropo = document.getElementById("facantropo");
const naturales = document.getElementById("facnaturales");

openwindow.forEach(window => {
    window.addEventListener("click", () => {
        body.classList.toggle("modal-open");
        overlay.classList.toggle("visible");
        if (window.previousElementSibling.className == "naturales") {
            naturales.classList.toggle("visible");
        } else if (window.previousElementSibling.className == "antropo") {
            antropo.classList.toggle("visible");
        }
    })
})

closewindow.forEach(window => {
    window.addEventListener("click", () => {
        body.classList.remove("modal-open");
        overlay.classList.remove("visible");
        naturales.classList.remove("visible");
        antropo.classList.remove("visible");
    })
})

function navSlide() {
    burger.addEventListener("click", () => {
        navBar.classList.toggle("navigation-active");

        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

if (vw <= 768) {
    var element = document.querySelector("nav");
    var position = element.getBoundingClientRect();
    navBar.style.cssText += `top: ${position.bottom - 1}px`;
    window.addEventListener('scroll', function() {
        position = element.getBoundingClientRect();
        var navPosition = position.bottom;
        navBar.style.cssText += `top: ${navPosition - 1}px`;
    });
}
navSlide();