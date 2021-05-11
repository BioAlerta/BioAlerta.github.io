const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navigation-bar");
const navItems = document.querySelectorAll(".navigation-item");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

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