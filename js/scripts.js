const $body = $("body");
const $header = $(".page-header");
const scrollClass = "scroll";
 
$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$("a[class='nav-link'][href^='#']").click(function(e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});

/*
$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});
*/