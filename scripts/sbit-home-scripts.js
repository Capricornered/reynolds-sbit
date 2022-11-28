//Scripts for SBIT homepage

//populate program button background images
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
document.getElementsByClassName("sbit-program")[i].style.backgroundImage = "url('" + programImage[i] + "')";
}


//apply different border/background color styling for grouped program buttons
for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("sbit-program")[i].style.border = "4px solid var(--emerald)";
    document.getElementsByClassName("program-title")[i].style.backgroundColor = "var(--emerald)";
}
for (let i = 3; i < 4; i++) {
    document.getElementsByClassName("sbit-program")[i].style.border = "4px solid var(--raspberry)";
    document.getElementsByClassName("program-title")[i].style.backgroundColor = "var(--raspberry)";
}
for (let i = 4; i < 6; i++) {
    document.getElementsByClassName("sbit-program")[i].style.border = "4px solid var(--ocean)";
    document.getElementsByClassName("program-title")[i].style.backgroundColor = "var(--ocean)";
}
for (let i = 6; i < 9; i++) {
    document.getElementsByClassName("sbit-program")[i].style.border = "4px solid var(--gray11)";
    document.getElementsByClassName("program-title")[i].style.backgroundColor = "var(--gray11)";
}