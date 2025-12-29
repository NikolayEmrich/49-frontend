// Останавливает остальные песни, когда включается одна
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
    audio.addEventListener("play", () => {
        audios.forEach(other => {
            if (other !== audio) {
                other.pause();
            }
        });
    });
});