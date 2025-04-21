// Select the theme toggle button and icon
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Add click event listener to toggle the icon
themeToggleButton.addEventListener("click", () => {
    // Check the current icon and toggle
    if (themeIcon.getAttribute("src") === "assets/images/icon-sun.svg") {
        themeIcon.setAttribute("src", "assets/images/icon-moon.svg");
        themeIcon.setAttribute("alt", "Moon Icon");
    } else {
        themeIcon.setAttribute("src", "assets/images/icon-sun.svg");
        themeIcon.setAttribute("alt", "Sun Icon");
    }
});