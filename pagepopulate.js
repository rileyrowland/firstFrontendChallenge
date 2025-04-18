
const contentsections = ["DevLens", "StyleSpy", "SpeedBoost", "JSONWizard",
	"TabMaster Pro", "ViewportBuddy", "Markup Notes", "GridGuides",
	"Palette Picker", "LinkChecker", "DOM Snapshot", "ConsolePlus"]

const contentdescriptions = ["Quickly inspect page layouts and visualize element boundaries.", "Instantly analyze and copy CSS from any webpage element.",
	"Optimizes browser resource usage to accelerate page loading.", "Formats, validates, and prettifies JSON responses in-browser.",
	"Organizes browser tabs into groups and sessions.", "Simulates various screen resolutions directly within the browser.",
	"Enables annotation and notes directly onto webpages for collaborative debugging.", "Overlay customizable grids and alignment guides on any webpage.",
	"Instantly extracts color palettes from any webpage.", "Scans and highlights broken links on any page.", "Capture and export DOM structures quickly.",
	"Enhanced developer console with advanced filtering and logging."];

const container = document.querySelector(".container");

contentsections.forEach((section, index) => {
	const contentBox = document.createElement("div");
	contentBox.classList.add("contentbox");

	const title = document.createElement("h2");
	title.textContent = section;

	const description = document.createElement("p");
	description.textContent = contentdescriptions[index];

	const remove = document.createElement("div");
	remove.textContent = "Remove";

	contentBox.appendChild(title);
	contentBox.appendChild(description);
	contentBox.appendChild(remove);
	container.appendChild(contentBox);
});