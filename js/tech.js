const track = document.getElementById("techTrack");

track.addEventListener("mouseenter", () => {

    track.style.animationPlayState = "paused";

});

track.addEventListener("mouseleave", () => {

    track.style.animationPlayState = "running";

});