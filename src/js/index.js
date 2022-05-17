import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../sass/index.sass";

const overlay = document.querySelector(".overlay");
const avatar = document.querySelector(".avatar");

window.addEventListener("mousemove", (e) => {
  const x = Math.round(e.x / 100);
  const y = Math.round(e.y / 100);

  avatar.style.transform = `translate(${x - 5}px, ${Math.round(
    y - 5
  )}px) scale(1.1)`;
});

window.addEventListener("load", function () {
  overlay.style.display = "none";
});
