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

        // Select all filter buttons
        const filterButtons = document.querySelectorAll(".titleSection ul button");

        // Add event listeners to each button
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Remove "active" class from all buttons
                filterButtons.forEach((btn) => btn.classList.remove("active"));

                // Add "active" class to the clicked button
                button.classList.add("active");
            });
        });
});