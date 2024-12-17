const VideoPlayer = ({ src, poster, controls = true, autoplay = false }) => {
    const video = document.createElement('video');
    video.src = src;
    video.poster = poster;
    video.controls = controls;
    video.autoplay = autoplay;
    video.className = 'video-player';
  
    return video;
  };
  
  export default VideoPlayer;
  