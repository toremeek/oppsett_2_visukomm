$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});

const policeOne = document.getElementById("police4");
const policeTwo = document.getElementById("police5");
const policeThree = document.getElementById("police6");

policeOne.addEventListener("click", function () {
  policeOne.style.width = "50%";
  policeTwo.style.width = "20%";
  policeThree.style.width = "20%";
  policeThree.style.opacity = ".8";
  policeTwo.style.opacity = ".8";
  policeOne.style.opacity = "1";
  document.getElementById("police4").innerHTML = "<p>Bilde 1</p>";
  document.getElementById("police5").innerHTML = "";
  document.getElementById("police6").innerHTML = "";
});
policeTwo.addEventListener("click", function () {
  policeOne.style.width = "20%";
  policeTwo.style.width = "50%";
  policeThree.style.width = "20%";
  policeThree.style.opacity = ".8";
  policeTwo.style.opacity = "1";
  policeOne.style.opacity = ".8";
  document.getElementById("police4").innerHTML = "";
  document.getElementById("police5").innerHTML = "<p>Bilde 2</p>";
  document.getElementById("police6").innerHTML = "";
});
policeThree.addEventListener("click", function () {
  policeOne.style.width = "20%";
  policeTwo.style.width = "20%";
  policeThree.style.width = "50%";
  policeThree.style.opacity = "1";
  policeTwo.style.opacity = ".8";
  policeOne.style.opacity = ".8";
  document.getElementById("police4").innerHTML = "";
  document.getElementById("police5").innerHTML = "";
  document.getElementById("police6").innerHTML = "<p>Bilde 3</p>";
});
