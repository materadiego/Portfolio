const menu = document.querySelector(".header");
const menuBut = document.querySelector("#menu-but");
const xMenu = document.querySelector("#xmenu-but");
const about = document.getElementById("about");
const dev = document.getElementById("dev");
const proj = document.getElementById("proj");

function hideShowMenu() {
  if (menu.classList.contains("m-is-active")) {
    menu.classList.remove("m-is-active");
  } else {
    menu.classList.add("m-is-active");
  }
}

menuBut.addEventListener("click", hideShowMenu);
menuBut.addEventListener("click", hideShowMenu);
xMenu.addEventListener("click", hideShowMenu);
about.addEventListener("click", hideShowMenu);
dev.addEventListener("click", hideShowMenu);
proj.addEventListener("click", hideShowMenu);
