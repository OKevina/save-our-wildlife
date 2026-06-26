const video = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");

function syncButton() {
  if (video.hidden) {
    toggleBtn.textContent = "Show video";
    toggleBtn.setAttribute("aria-pressed", "false");
  } else if (video.paused) {
    toggleBtn.textContent = "Play video";
    toggleBtn.setAttribute("aria-pressed", "false");
  } else {
    toggleBtn.textContent = "Hide video";
    toggleBtn.setAttribute("aria-pressed", "true");
  }
}

toggleBtn.addEventListener("click", () => {
  if (video.hidden) {
    video.hidden = false;
  } else if (video.paused) {
    video.play();
  } else {
    video.pause();
    video.hidden = true;
  }
  syncButton();
});

video.addEventListener("play", syncButton);
video.addEventListener("pause", syncButton);
video.addEventListener("ended", syncButton);

syncButton();
