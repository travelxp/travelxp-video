'use client'
import { useRef, useEffect } from "react";
import videojs from "video.js";
import "../videojs/nuevo.min.js";

export default function IndexPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Assign skin name before the player is initialized
      videojs.skin("pinko");

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
    <div>
      <div className="container">
        <video controls ref={videoRef} className="video-js" />
        <div className="explain">
          Please note that Next.js loads all css and javascript asynchronously.
          For this reason players CSS stylesheet may be loaded slower than
          javascripts. This means that control bar buttons custom order cannot
          be set for certain skin when javascripts loaded.
          <br />
          <br />
          To get around this problem you can assign skin name (CSS stylesheet
          filename) through <i>videojs.skin()</i> function before the player is
          initialized.
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}