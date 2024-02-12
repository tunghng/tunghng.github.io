const videos = document.querySelectorAll(".video-container video");
const hoverTexts = document.querySelectorAll(".video-container .hover-text");

videos.forEach((video, index) => {
  // For each video, add the mouseenter event listener
  video.addEventListener("mouseenter", () => {
    video.play();
    hoverTexts[index].classList.remove("active"); // Use the corresponding hoverText
  });

  // For each video, add the mouseleave event listener
  video.addEventListener("mouseleave", () => {
    video.pause();
    hoverTexts[index].classList.add("active"); // Use the corresponding hoverText
  });
});
