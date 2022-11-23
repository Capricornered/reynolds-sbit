//Scripts for all SBIT pages (main nav items, body nav, and SBIT contact module)

//open mega menu upon clicking hamburger icon
//toggle hamburger icon and x icon on click
function openHamburger() {
    document.getElementById("nav-container").classList.toggle("nav-container-toggle");
    let hamburger = document.getElementById("hamburger");
    if (hamburger.innerHTML === "✕") {
        hamburger.innerHTML = "&#9776;";
      } else {
        hamburger.innerHTML = "✕";
      }
}


//open dropdown when menu item is clicked (for screens using hamburger menu)
let topLevel = document.querySelectorAll(".top-level");

topLevel.forEach(function(top) {
	top.addEventListener("click", function() {
		if (top.classList.contains("nav-toggle")) {
			top.classList.remove("nav-toggle");
		} else {
			let openDrop = document.querySelectorAll(".nav-toggle");
			openDrop.forEach(function(openDrop) {
				openDrop.classList.remove("nav-toggle");
			});
			top.classList.add("nav-toggle");
		}
	});
});


//toggle the side nav when the arrow is clicked
//switch the arrow direction when clicked
function openBodyMenu() {
    document.getElementsByClassName("body-nav")[0].classList.toggle("slide-toggle");
    let arrow = document.getElementsByClassName("arrow")[0];
    if (arrow.innerHTML === "‹") {
        arrow.innerHTML = "›";
      } else {
        arrow.innerHTML = "‹";
      }
    arrow.classList.toggle("arrow-toggle");
}


//open SBIT contact info when "Contact SBIT" is clicked
//close contact info when the 'x' on SBIT contact info div is clicked
function contactSBIT() {
    document.getElementById("sbit-contact").classList.toggle("contact-toggle");
}