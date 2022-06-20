//menu burger to open/close (JQuery)
$(document).ready(function () {
    $(".icon-menu").click(function (event) {
        $(".icon-menu,.menu__body").toggleClass("active");
        $("body").toggleClass("lock"); //
    });
});

//logo-burger animation
const logo = document.querySelector(".header__logo");
const menuIcon = document.querySelector(".icon-menu");

menuIcon.addEventListener("click", () => {
    logo.classList.toggle("header__logo_appearance");
});
