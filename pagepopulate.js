
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

const container = document.querySelector(".container");

contentsections.forEach((section, index) => {
	const contentBox = document.createElement("div");
	contentBox.classList.add("contentbox");

	const image = document.createElement("img");
	image.src = contentimages[index];

	const title = document.createElement("h2");
	title.textContent = section;

	const description = document.createElement("p");
	description.textContent = contentdescriptions[index];

	const contentboxbottomcontainer = document.createElement("div");
    contentboxbottomcontainer.classList.add("contentboxbottomcontainer");

	const remove = document.createElement("div");
	remove.textContent = "Remove";
    remove.classList.add("remove");

	//Toggle Switch Start
	const label = document.createElement("label");
	label.classList.add("ontoggleswitch");

	const input = document.createElement("input");
	input.type = "checkbox";
	//input.id = id;

	const slider = document.createElement("span");
	slider.classList.add("slider");

	label.appendChild(input);
	label.appendChild(slider);
    //Toggle Switch End

	contentBox.appendChild(image);
	contentBox.appendChild(title);
	contentBox.appendChild(description);

    contentBox.appendChild(contentboxbottomcontainer);
	contentboxbottomcontainer.appendChild(remove);
	contentboxbottomcontainer.appendChild(label);

	container.appendChild(contentBox);
});