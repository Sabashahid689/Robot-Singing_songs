const songs = [
  { title: "Pal Pal Jeena Muhal", src: "palpaljeenamohal.mp3" },
  { title: "Saiyaara Song", src: "saiyaarasong.mp3" },
  { title: "Chal Diye", src: "chaldiye.mp3" },
  { title: "Nakhra", src: "nakhra.mp3" }
];


let currentSong = 0;

// 🎧 Select elements
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const songTitle = document.getElementById("song-title");

// 🎨 Select robot image
const robotImg = document.querySelector(".robot-img");

function loadSong(song) {
  songTitle.textContent = song.title;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  robotImg.style.animationPlayState = "running"; // start dance
  robotImg.style.filter = "drop-shadow(0 0 25px #00e5ff)";
}

function pauseSong() {
  audio.pause();
  robotImg.style.animationPlayState = "paused"; // stop dance
  robotImg.style.filter = "drop-shadow(0 0 5px #00bcd4)";
}

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);

audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

// Load first song
loadSong(songs[currentSong]);
pauseSong();