document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
  document.getElementById("mask").classList.toggle("active");
  })
});
