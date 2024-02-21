function toggleMobileMenu() {
    const menu = document.getElementById("navbarDefault");
    const img = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
        img.src = "../images/icon-hamburger.svg";
    } else {
        img.src = "../images/icon-close.svg";
    }
}

function hoverSocialIcon(socialIcon) {
    socialIcon.addEventListener("mouseover", function (e) {
        e.target.style.filter = "brightness(0)";
    });
    socialIcon.addEventListener("mouseout", function (e) {
        e.target.style.filter = "brightness(1)";
    });
}
