const playlist = [
  {
    title: "Song 1",
    artist: "Artist 1",
    url: "https://hopedhydra.github.io/earth/earth.ogg"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    url: "https://hopedhydra.github.io/earth/sprouting.ogg"
  },
    {
    title: "Song 3",
    artist: "Artist 1",
    url: "https://hopedhydra.github.io/alpha/Key.mp3"
  },
    {
    title: "Song 4",
    artist: "Artist 1",
    url: "https://hopedhydra.github.io/alpha/Door.mp3"
  },
  // Add more songs as needed
];

let audioIndex = 0;
let isPlaying = false;
let audioPlayer;

function shufflePlaylist(playlist) {
  let currentIndex = playlist.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = playlist[currentIndex];
    playlist[currentIndex] = playlist[randomIndex];
    playlist[randomIndex] = temporaryValue;
  }

  return playlist;
}

function createAudioPlayer() {
  audioPlayer = document.createElement('audio');
  audioPlayer.controls = true;
  audioPlayer.onended = playNextSong;
  document.getElementById('audioPlayer').appendChild(audioPlayer);
}

function playNextSong() {
  audioIndex = (audioIndex + 1) % playlist.length;
  audioPlayer.src = playlist[audioIndex].url;
  audioPlayer.play();
}

document.getElementById('shuffleButton').addEventListener('click', function() {
  const shuffledPlaylist = shufflePlaylist(playlist);
  audioIndex = 0;
  createAudioPlayer();
  playNextSong();
  isPlaying = true;
});

document.getElementById('startPauseButton').addEventListener('click', function() {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
  isPlaying = !isPlaying;
});


