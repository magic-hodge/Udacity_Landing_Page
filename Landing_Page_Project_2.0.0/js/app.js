/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 *
 * Define Global Variables
 *
*/

// Function to toggle the nav-active class in the stylesheet.

function toggleNav() {

	const navList = document.querySelector(".navList");
	navList.classList.toggle("nav-active");
}

// Function to show the navication menu by clicking on the burger div.

function showNav() {
	
	const burger = document.querySelector(".burger");
	burger.addEventListener("click", toggleNav);
}

showNav();

//function aLinkActive() {
	//const aLink = document.querySelector
	//aLink.classList.toggle("aLinkActive");
//}

//function to create the navigation links based on the sections in the document.

function createNavLinks() {
	
	// Sets variables for the for-of loop.
	
	const allSections = document.querySelectorAll("section");
	const navList = document.getElementById("navList");
	let i = 1;

	// loops over allSections list & creates a li and anchor for each one. 

	for (const section of allSections) {
		
		// Sets variables and text-content for the aLinks.

		const li = document.createElement("LI");
		const aLink = document.createElement("A");
		aLink.textContent = `section-${i}`;
		aLink.setAttribute("id", `aLink${i}`);
		aLink.className += " aLink";

		// Adds on-click event listeners for aLinks & scrolls slowly to specified section.
		
		aLink.addEventListener("click", function scrollTo(evt) {
			let target = document.getElementById(aLink.textContent);
			target.scrollIntoView({behavior: "smooth"});
		});		

		// Adds aLinks to LIs and LIs to navList.
		
		li.appendChild(aLink);
		navList.appendChild(li);
		i++;
		
	}
}

createNavLinks()

// Function to determine which section is in viewport.

function inView() {
	
	// sets allSections variable.
	
	const allSections = document.querySelectorAll("section");
	let i = 1;

	// Loops over each section in allSections.

	for (const section of allSections) {

		// Gets the rectangle boundaries of the subject div/section.

		let bounds = section.getBoundingClientRect();
		let aLink = document.getElementById(`aLink${i}`);

		// Sets parameters for what counts as "in view" and either gives or removes "active-class" status to both aLinks & sections..

		if (bounds.top >= 0 &&
			bounds.left >= 0 &&
			bounds.right <= (document.documentElement.clientWidth) &&
			bounds.bottom <= (document.documentElement.clientHeight)) {
			section.className += " your-active-class";
			aLink.className += " aLinkActive";
		}
		else {
			section.className = "section";
			aLink.className = "aLink";
		}
		i++;
	}
}

// Using setInterval to constantly refresh the inView function because trying to set an event listener on scroll was, honestly, a pain in the ass.

setInterval(function(){inView();}, 100);

//		aLink.appendChild(document.createTextNode(`Section ${i}`));

/*

const app = () => {
	navSlide();
}

 */

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//window.addEventListener("scroll", scrollTest());
