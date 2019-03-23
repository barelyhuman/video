

function loadVideo(videoUrl) {
  const videoPlayer = document.querySelector('#videoPlayer');

  if (!videoPlayer) {
    return;
  }

  if (!videoUrl) {
    videoPlayer.pause();
    videoPlayer.classList.add('hide');
    return;
  }
  videoPlayer.src = videoUrl;
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
    setTimeout(() => {
      videoPlayer.play();
    }, 50);
  }
  videoPlayer.classList.remove('hide');
}

function main() {
  loadVideo();
  const loadVideoButton = document.querySelector('#loadVideoButton');
  const urlInput = document.querySelector('#urlInput');


  if (!(loadVideoButton && urlInput)) {
    return;
  }

  urlInput.addEventListener('keyup', (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      loadVideo(event.target.value);
    }
  });

  loadVideoButton.addEventListener('click', () => loadVideo(urlInput.value));
}

main();




