/* ============================================================
   Save Our Wildlife - script.js
   Button behaviour:
   - If the video is NOT playing, clicking the button PLAYS it.
   - If the video IS playing, clicking the button HIDES it.
   ============================================================ */

(function () {
  "use strict";

  const video = document.getElementById("wildlifeVideo");
  const toggleBtn = document.getElementById("toggleBtn");

  // Update the button label/state to match the video.
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

  toggleBtn.addEventListener("click", function () {
    if (video.hidden) {
      // Video was hidden -> show it again
      video.hidden = false;
    } else if (video.paused) {
      // Not playing -> play it
      video.play();
    } else {
      // Currently playing -> hide it (and pause so audio stops)
      video.pause();
      video.hidden = true;
    }
    syncButton();
  });

  // Keep the label in sync if the user uses the native controls too.
  video.addEventListener("play", syncButton);
  video.addEventListener("pause", syncButton);
  video.addEventListener("ended", syncButton);

  // Set the correct initial label once the page loads.
  syncButton();
})();
