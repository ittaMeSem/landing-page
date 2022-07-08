const header = document.getElementById("header");
const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelector(".navbar-buttons");
const sections = document.querySelector(".sections");
const links = document.querySelector(".menuButtons");

const linkCurrentState = () => {
  const cur_pos = $(this).scrollTop();
  sections.each(function () {
    const top = $(this).offset().top - window.innerHeight / 3;
    const bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      header.find("a").removeClass("current");
      let linkName = $(this).attr("id");
      linkName = linkName.slice(0, linkName.length - 8);
      header.find(`a[data-page= ${linkName}]`).addClass("current");
    }
  });
};

$(".menuButtons").on("click", function (e) {
  e.preventDefault();
  const headerHeight =
    window.innerWidth <= 768 ? $(window).height() * 0.099 : 0;
  const idName = $(this).attr("data-page");
  $("html, body").animate(
    {
      scrollTop: $("#" + idName + "-section").offset().top - headerHeight,
    },
    1200
  );
});

window.addEventListener("load", linkCurrentState);
window.addEventListener("scroll", linkCurrentState);
labelTransform.forEach((input) =>
  input.addEventListener("focus", () => moveUp(input))
);
labelTransform.forEach((input) =>
  input.addEventListener("focusout", () => moveDown(input))
);
navSlide();
