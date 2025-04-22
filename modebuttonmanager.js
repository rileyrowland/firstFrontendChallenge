const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggleButton.addEventListener("click", () => {
    if (themeIcon.getAttribute("src") === "assets/images/icon-sun.svg") {
        themeIcon.setAttribute("src", "assets/images/icon-moon.svg");
        themeIcon.setAttribute("alt", "Moon Icon");
    } else {
        themeIcon.setAttribute("src", "assets/images/icon-sun.svg");
        themeIcon.setAttribute("alt", "Sun Icon");
    }
});