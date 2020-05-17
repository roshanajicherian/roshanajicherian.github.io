$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// Custom function for proper allignment on link click
var clickCheck = document.querySelectorAll(".navbar-nav>li>a");
for (var i = 0; i < clickCheck.length; i++) {
  if (i != clickCheck.length - 1)
    clickCheck[i].addEventListener("click", checker);
}
function checker() {
  setTimeout(scroller, 10);
}
function scroller() {
  window.scrollBy(0, -80);
}
