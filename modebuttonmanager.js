const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

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

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
