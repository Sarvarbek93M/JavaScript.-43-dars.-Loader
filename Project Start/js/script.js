window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.apacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  }, 3500);
});
