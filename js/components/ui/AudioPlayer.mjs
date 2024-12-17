const AudioPlayer = ({ src, controls = true, autoplay = false }) => {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.controls = controls;
    audio.autoplay = autoplay;
    audio.className = 'audio-player';
  
    return audio;
  };
  
  export default AudioPlayer;
  