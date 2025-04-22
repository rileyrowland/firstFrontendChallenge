
const contentsections = ["DevLens", "StyleSpy", "SpeedBoost", "JSONWizard",
    "TabMaster Pro", "ViewportBuddy", "Markup Notes", "GridGuides",
    "Palette Picker", "LinkChecker", "DOM Snapshot", "ConsolePlus"]

const contentdescriptions = ["Quickly inspect page layouts and visualize element boundaries.", "Instantly analyze and copy CSS from any webpage element.",
    "Optimizes browser resource usage to accelerate page loading.", "Formats, validates, and prettifies JSON responses in-browser.",
    "Organizes browser tabs into groups and sessions.", "Simulates various screen resolutions directly within the browser.",
    "Enables annotation and notes directly onto webpages for collaborative debugging.", "Overlay customizable grids and alignment guides on any webpage.",
    "Instantly extracts color palettes from any webpage.", "Scans and highlights broken links on any page.", "Capture and export DOM structures quickly.",
    "Enhanced developer console with advanced filtering and logging."];

const contentimages = ["assets/images/logo-devlens.svg", "assets/images/logo-style-spy.svg", "assets/images/logo-speed-boost.svg", "assets/images/logo-json-wizard.svg",
    "assets/images/logo-tab-master-pro.svg", "assets/images/logo-viewport-buddy.svg", "assets/images/logo-markup-notes.svg", "assets/images/logo-grid-guides.svg",
    "assets/images/logo-palette-picker.svg", "assets/images/logo-link-checker.svg", "assets/images/logo-dom-snapshot.svg", "assets/images/logo-console-plus.svg"];

const container = document.querySelector(".content");

contentsections.forEach((section, index) => {
    //#region Declarations
    //#region Declare Content Box
    const contentBox = document.createElement("div");
    contentBox.classList.add("contentBox");
    //#endregion

    //#region Declare Header & Footer
    const header = document.createElement("div");
    header.classList.add("header");

    const footer = document.createElement("div");
    footer.classList.add("footer");
    //#endregion

    //#region Declare Header Elements
    const image = document.createElement("img");
    image.src = contentimages[index];

    const text = document.createElement("div");
    text.classList.add("text");

    const title = document.createElement("h2");
    title.textContent = section;

    const description = document.createElement("p");
    description.textContent = contentdescriptions[index];
    //#endregion

    //#region Declare Footer Elements
    const removeButton = document.createElement("button");
    removeButton.classList.add("text");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
        contentBox.remove();
    });

    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";

    input.addEventListener("change", () => {
        const isActive = input.checked;
        console.log(`${section} is now ${isActive ? "active" : "inactive"}`);
    });

    const slider = document.createElement("span");


    label.appendChild(input);
    label.appendChild(slider);
    //#endregion
    //#endregion

    //#region Initialization
    //#region Append Header Elements
    header.appendChild(image);
    text.appendChild(title);
    text.appendChild(description);
    //#endregion

    //#region Append Parent Groups
    header.appendChild(text);
    contentBox.appendChild(header);
    //#endregion

    //#region Append Footer Elements
    contentBox.appendChild(footer);
    footer.appendChild(removeButton);
    footer.appendChild(label);
    //#endregion

    //#region Append Full Content Box
    container.appendChild(contentBox);
    //#endregion
    //#endregion
});