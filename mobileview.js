var windowWidth = window.innerWidth;

function adjustLayout() {
  if (windowWidth <= 600) {
    document.getElementById("container_background").className = "conatiner";
  }
}
window.onload = adjustLayout;
window.onresize = adjustLayout;
