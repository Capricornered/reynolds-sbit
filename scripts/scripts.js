//open mega menu upon clicking hamburger icon
//toggle hamburger icon and x icon on click
function openHamburger() {
    document.getElementById("megaNav").classList.toggle("megaNavToggle");
    let hamburger = document.getElementById("hamburger");
    if (hamburger.innerHTML === "✕") {
        hamburger.innerHTML = "&#9776;";
      } else {
        hamburger.innerHTML = "✕";
      }
}

function openBodyMenu() {
    document.getElementsByClassName("bodyMenu")[0].classList.toggle("slideToggle");
    let arrow = document.getElementsByClassName("arrow")[0];
    if (arrow.innerHTML === "‹") {
        arrow.innerHTML = "›";
      } else {
        arrow.innerHTML = "‹";
      }
    arrow.classList.toggle("arrowToggle");
}


//open SBIT contact info when "Contact SBIT" is clicked
//close contact info when the 'x' on SBIT contact info div is clicked
function contactSBIT() {
    document.getElementById("sbitContact").classList.toggle("contactToggle");
}


let menuContainer = document.getElementsByClassName('menuContainer');

for (i=0; i<menuContainer.length; i++) {
  menuContainer[i].addEventListener('click', function dropdown() {
    this.classList.toggle('menuToggle')
  })
}



let programImage = new Array(8);
programImage[0]="images/sbit-program-1.jpg";
programImage[1]="images/sbit-program-2.jpg";
programImage[2]="images/sbit-program-3.jpg";
programImage[3]="images/sbit-program-4.jpg";
programImage[4]="images/sbit-program-5.jpg";
programImage[5]="images/sbit-program-6.jpg";
programImage[6]="images/sbit-program-7.jpg";
programImage[7]="images/sbit-program-8.jpg";
programImage[8]="images/sbit-program-9.jpg";

for (let i = 0; i < programImage.length; i++) {
document.getElementsByClassName("sbitProgram")[i].style.backgroundImage = "url('" + programImage[i] + "')";
}

for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("sbitProgram")[i].style.border = "3px solid var(--emerald)";
    document.getElementsByClassName("programTitle")[i].style.backgroundColor = "var(--emerald)";
}
for (let i = 3; i < 4; i++) {
    document.getElementsByClassName("sbitProgram")[i].style.border = "3px solid var(--raspberry)";
    document.getElementsByClassName("programTitle")[i].style.backgroundColor = "var(--raspberry)";
}
for (let i = 4; i < 6; i++) {
    document.getElementsByClassName("sbitProgram")[i].style.border = "3px solid var(--ocean)";
    document.getElementsByClassName("programTitle")[i].style.backgroundColor = "var(--ocean)";
}
for (let i = 6; i < 9; i++) {
    document.getElementsByClassName("sbitProgram")[i].style.border = "3px solid var(--gray11)";
    document.getElementsByClassName("programTitle")[i].style.backgroundColor = "var(--gray11)";
}
