// autoComplete.js input eventListener for search results event
document.querySelector("#autoComplete").addEventListener("results", (event) => {
	console.log(event);
});

// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
	name: "Cocktails",
	data: {
		src: async function () {
			// Loading placeholder text
			document
				.querySelector("#autoComplete")
				.setAttribute("placeholder", "Loading...");
			// Fetch External Data Source
			const source = await fetch(
				"/cocktail-name-data"
			);
			const data = await source.json();
			// Post loading placeholder text
			document
				.querySelector("#autoComplete")
				.setAttribute("placeholder", "Cocktails");
			// Returns Fetched data
			return data;
		},
		key: ["category", "cocktail"],
		results: (list) => {
			// Filter duplicates
			const filteredResults = Array.from(
				new Set(list.map((value) => value.match))
			).map((category) => {
				return list.find((value) => value.match === category);
			});

			return filteredResults;
		}
	},
	trigger: {
		event: ["input", "focus"]
	},
	placeHolder: "Search for Cocktail Recipes!",
	searchEngine: "strict",
	highlight: true,
	maxResults: 5,
	resultItem: {
		content: (data, element) => {
			// Modify Results Item Style
			element.style = "display: flex; justify-content: space-between;";
			// Modify Results Item Content
			element.innerHTML = `<span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${data.match}</span>
        <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.2);">
      ${data.key}</span>`;
		}
	},
	noResults: (dataFeedback, generateList) => {
		// Generate autoComplete List
		generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
		// No Results List Item
		const result = document.createElement("li");
		result.setAttribute("class", "no_result");
		result.setAttribute("tabindex", "1");
		result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;
		document
			.querySelector(`#${autoCompleteJS.resultsList.idName}`)
			.appendChild(result);
	},
	onSelection: (feedback) => {
		document.querySelector("#autoComplete").blur();
		// Prepare User's Selected Value
		const selection = feedback.selection.value[feedback.selection.key];
		// Render selected choice to selection div
		document.querySelector(".selection").innerHTML = selection;
		// Replace Input value with the selected value
		document.querySelector("#autoComplete").value = selection;
		// Console log autoComplete data feedback
		console.log(feedback);
		
		buildRecipe(selection);
		buildBarChart(selection);
	}
});

// Toggle Search Engine Type/Mode
document.querySelector(".toggler").addEventListener("click", function () {
	// Holds the toggle button alignment
	const toggle = document.querySelector(".toggle").style.justifyContent;

	if (toggle === "flex-start" || toggle === "") {
		// Set Search Engine mode to Loose
		document.querySelector(".toggle").style.justifyContent = "flex-end";
		document.querySelector(".toggler").innerHTML = "Loose";
		autoCompleteJS.searchEngine = "loose";
	} else {
		// Set Search Engine mode to Strict
		document.querySelector(".toggle").style.justifyContent = "flex-start";
		document.querySelector(".toggler").innerHTML = "Strict";
		autoCompleteJS.searchEngine = "strict";
	}
});

// Toggle results list and other elements
const action = function (action) {
	const github = document.querySelector(".github-corner");
	const title = document.querySelector("h1");
	const mode = document.querySelector(".mode");
	const selection = document.querySelector(".selection");
	const footer = document.querySelector(".footer");

	if (action === "dim") {
		github.style.opacity = 1;
		title.style.opacity = 1;
		mode.style.opacity = 1;
		selection.style.opacity = 1;
		footer.style.opacity = 1;
	} else {
		github.style.opacity = 0.1;
		title.style.opacity = 0.3;
		mode.style.opacity = 0.2;
		selection.style.opacity = 0.1;
		footer.style.opacity = 0.1;
	}
};

// Toggle event for search input
// showing & hiding results list onfocus/blur
["focus", "blur"].forEach(function (eventType) {
	document
		.querySelector("#autoComplete")
		.addEventListener(eventType, function () {
			// Hide results list & show other elements
			if (eventType === "blur") {
				action("dim");
			} else if (eventType === "focus") {
				// Show results list & hide other elements
				action("light");
			}
		});
});