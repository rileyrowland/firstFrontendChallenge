const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const headerImage = document.querySelector("header img");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
    themeIcon.setAttribute(
        "src",
        savedTheme === "dark" ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg"
    );
    themeIcon.setAttribute(
        "alt",
        savedTheme === "dark" ? "Sun Icon" : "Moon Icon"
    );

    headerImage.setAttribute(
        "src",
        savedTheme === "dark" ? "assets/images/logo-dark.svg" : "assets/images/logo.svg"
    );
}

themeToggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    themeIcon.setAttribute(
        "src",
        isDarkMode ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg"
    );
    themeIcon.setAttribute(
        "alt",
        isDarkMode ? "Sun Icon" : "Moon Icon"
    );

    headerImage.setAttribute(
        "src",
        isDarkMode ? "assets/images/logo-dark.svg" : "assets/images/logo.svg"
    );

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
