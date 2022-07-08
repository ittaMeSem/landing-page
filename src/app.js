const header = $("header");
const navbar = document.getElementById("#navbar");
const navbarLinks = document.querySelector(".navbar-buttons");
const sections = $("section");
const links = document.querySelectorAll(".menuButtons");

const linkCurrentState = () => {
  const cur_pos = $(this).scrollTop();
  sections.each(function () {
    const top = $(this).offset().top - window.innerHeight / 3;
    const bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      header.find("a").removeClass("current");
      let linkName = $(this).attr("class");
      linkName = linkName.slice(0, linkName.length - 8);
      header.find(`a[data-page= ${linkName}]`).addClass("current");
    }
  });
};

//Scroll page on click
$(".menuButtons").on("click", function (e) {
  e.preventDefault();
  const headerHeight =
    window.innerWidth <= 768 ? $(window).height() * 0.099 : 0;
  const idName = $(this).attr("data-page");
  $("html, body").animate(
    {
      scrollTop: $("#" + idName + "-section").offset(),
    },
    1200
  );
});

const navSlide = () => {
  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      nav.style.animation = `navSlide 0.5s forwards`;
      $("body").addClass("navBar-open");
    } else {
      nav.style.animation = `navSlideOut 0.5s`;
      $("body").removeClass("navBar-open");
    }

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ${index / 5 + 0.5}s ease forwards`;
      }
    });
  });
};

window.addEventListener("load", linkCurrentState);
window.addEventListener("scroll", linkCurrentState);
