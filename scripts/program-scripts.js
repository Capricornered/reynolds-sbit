//Scripts for SBIT program pages

/* JS for Reynolds Custom Accordion Inset. Commented out sections correspond to an animation effect not in use.*/

document.querySelectorAll(".accordion__button").forEach(function accButton(button) {
    button.addEventListener("click", function() {
      // const accordionContent = button.nextElementSibling;

      button.classList.toggle("accordion__button--active");

      // if (button.classList.contains('accordion__button--active')) {
      //   accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      // } else {
      //   accordionContent.style.maxHeight = 0;
      // }
    }
    );
}
);


// JS for the Read More Button

// JS statement to call the readMoreFunction
document.getElementById("read-more-button").addEventListener("click", readMoreFunction);

// JS for the readMoreFunction Function
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var moreContent = document.getElementById("more-content");
  var btnText = document.getElementById("read-more-button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
    moreContent.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
    moreContent.style.display = "inline";
  }
}