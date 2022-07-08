let hamburgerIcon = document.querySelector("header .hamburger img:first-child");
let closeIcon = document.querySelector("header .megamenu .top .close img");
let megamenu = document.querySelector("header .megamenu");

hamburgerIcon.onclick = () => {
  megamenu.classList.add("active")
}

closeIcon.onclick = () => {
  megamenu.classList.remove("active");
}