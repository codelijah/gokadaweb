menu = document.querySelector(".menu");
menu.onclick = function() {
  navBar = document.querySelector(".nav");
  navBar.classList.toggle("active");
  menu = document.querySelector(".menu");
  menu.classList.toggle("active")
}


menu = document.querySelector(".protection-section-one");
menu.onclick = function() {
  navBar = document.querySelector(".protection-section-two");
  navBar.classList.toggle("active");
  menu = document.querySelector(".protection-section-one");
  menu.classList.toggle("active")
}