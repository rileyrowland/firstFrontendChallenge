const filterButtons = document.querySelectorAll(".titleSection ul button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        button.classList.add("active");

        const filterType = button.textContent.toLowerCase();

        const contentBoxes = document.querySelectorAll(".contentBox");
        contentBoxes.forEach((box) => {
            const isActive = box.querySelector("input[type='checkbox']").checked;

            if (filterType === "all") {
                box.style.display = "flex"; // Show all
            } else if (filterType === "active" && isActive) {
                box.style.display = "flex"; // Show active
            } else if (filterType === "inactive" && !isActive) {
                box.style.display = "flex"; // Show inactive
            } else {
                box.style.display = "none"; // Hide others
            }
        });
    });
});
