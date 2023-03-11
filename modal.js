document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});

window.addEventListener("load", async function () {
  setTimeout(function open(event) {
    document.querySelector(".container").style.display = "block";
  }, 2000);
});
