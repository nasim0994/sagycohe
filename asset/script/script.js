const mobileMenu_btn = document.querySelector(".mobileMenu_btn");
const mobile_menu = document.querySelector(".mobile_menu");
const close_btn = document.querySelector(".close_btn");

mobileMenu_btn.addEventListener("click", () => {
  mobile_menu.classList.add("show");
});

close_btn.addEventListener("click", () => {
  mobile_menu.classList.remove("show");
});
