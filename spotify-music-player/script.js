const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const songCover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverName = document.querySelector(".cover span:nth-child(2)");
const coverArtist = document.querySelector(".cover span:nth-child(1)");

const songData = [
  {
    name: "Dhundhala",
    artist: "Yashraj",
    src: "Dhundhala - Yashraj.mp3",
  },
  {
    name: "Mulholland",
    artist: "King Canyon",
    src: "Mulholland - King Canyon.mp3",
  },
  {
    name: "Parasail",
    artist: "Silent Partner",
    src: "Parasail - Silent Partner - Parasail.mp3",
  },
  {
    name: "The Truth",
    artist: "Anno Domini Beats",
    src: "The Truth - Anno Domini Beats.mp3",
  },
];

let songIndex = 0;

window.addEventListener("load", () => {
  loadSong(songIndex);
});

// Update song information
function loadSong(index) {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `audio/${songData[index].src}`;
}

function playSong() {
  container.classList.add("pause");
  audio.play();
  songCover.classList.add("rotate");
}
function pauseSong() {
  container.classList.remove("pause");
  audio.pause();
  songCover.classList.remove("rotate");
}

playPauseBtn.addEventListener("click", function () {
  console.log(songIndex);
  const icon = playPauseBtn.querySelector("i");

  if (container.classList.contains("pause")) {
    pauseSong();
    icon.className = "fas fa-play";
  } else {
    playSong();
    icon.className = "fas fa-pause";
  }
});

function prevSongPlay() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }
  loadSong(songIndex);
  playSong();
}

function nextSongPlay() {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
}

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);


