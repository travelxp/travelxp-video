import { useRef, useEffect } from "react";
import videojs from "video.js";
// import "../videojs/nuevo.min.js";

export default function NextDemo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Assign skin name before the player is initialized
      console.log(videojs)
      // videojs.skin("shaka");
     
       require('../videojs/nuevo.min.js');
      require('../videojs/plugins/videojs.events');
      //require('../videojs/plugins/videojs.thumbnails.js');
      // Initialize player
      const player = videojs(videoRef.current, {
        fluid: true,
        poster: "//cdnzone.nuevodevel.com/images/coffee.jpg",
        sources: [
          {
            src: "//cdnzone.nuevodevel.com/video/hls/coffee/playlist.m3u8",
            type: "application/x-mpegURL"
          }
        ]
      });
      player.on("ready", function () {
        console.log("Player ready!");
      });

      // Initialize Nuevo plugin
      player.nuevo();
    }
  });

  return (  
      <div className="container">
        <video controls ref={videoRef} className="video-js" />
      </div>
  );
}
