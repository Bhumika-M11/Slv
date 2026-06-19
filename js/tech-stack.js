document.addEventListener("DOMContentLoaded", () => {

    const track =
        document.getElementById("techTrack");

    if (!track) return;

    track.innerHTML += track.innerHTML;

});