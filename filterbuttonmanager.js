let currentFilter = "all";

const filterButtons = document.querySelectorAll(".titleSection ul button");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter = button.textContent.toLowerCase();

        applyFilter();
    });
});

function applyFilter() {
    document.querySelectorAll(".contentBox").forEach((div) => {
        const input = div.querySelector("input[type='checkbox']");
        const isActive = input.checked;

        if (currentFilter == "all") {
            div.style.display = "flex"; // Show all boxes
        } else if (currentFilter == "active" && isActive) {
            div.style.display = "flex"; // Show only active boxes
        } else if (currentFilter == "inactive" && !isActive) {
            div.style.display = "flex"; // Show only inactive boxes
        } else {
            div.style.display = "none"; // Hide boxes that don't match the filter
        }

        div.addEventListener("change", () => {
            applyFilter();
        });
    });
}