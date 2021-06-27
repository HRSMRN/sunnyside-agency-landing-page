let menuIcon = document.querySelector(".nav-menu__icons");

let menu = document.querySelector(".nav-menu__options");

menuIcon.addEventListener("click", (e) => {
  menu.classList.toggle("open");

  console.log(menu.classList);
});
