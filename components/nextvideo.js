"use client";
import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-contrib-eme";
var player=null

const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      return;
    }
    // require("../videojs/nuevo.min.js");
    if (videoEl !== null) {
      player = videojs(videoEl);
      let nuevoOptions = {
        settingsButton: false,
        pipButton: false,
        contextMenu: false,
        buttonForward: true,
        androidLock: true,
        title: "video title",
        video_id: "video id",
      };
      

      // player.on("nuevoReady", function () {
      //   let track = { kind: "metadata", src: options.vttsrc };
      //   player.loadTracks(track);
      // });

      player.nuevo(nuevoOptions);

      player.eme();

      // { m3u8 }

      // player.src({
      //   src: 'https://travelxp.s.llnwi.net/watch1/5ffe96a0d051dccc770fe216/manifest_v2_hd_05102021_1048.m3u8',
      //   type: "application/x-mpegURL",
      //   keySystems: {
      //     'com.apple.fps.1_0': {
      //       certificateUri: 'https://d16ibmw8keylbh.cloudfront.net/fpcert/fairplay.cer',
      //       getContentId: function (emeOptions, initData) {
      //         return new TextDecoder().decode(initData.filter(item => item !== 0 && item !== 150))
      //       },
      //       licenseUri: 'https://c8eaeae1-drm-fairplay-licensing.axprod.net/AcquireLicense',
      //       licenseHeaders: {
      //         'X-AxDrm-Message': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjQ1ODc2N2QtYTgzYi00MWQ0LWFlNjgtYWNhNzAwZDNkODRmIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiZXhwaXJhdGlvbl9kYXRldGltZSI6IjIwMjQtMDItMThUMTI6Mjc6NDMuNDY5KzAwOjAwIiwiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWUsInJlYWxfdGltZV9leHBpcmF0aW9uIjp0cnVlfSwiY29udGVudF9rZXlfdXNhZ2VfcG9saWNpZXMiOlt7Im5hbWUiOiJQb2xpY3kgQSIsIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJjNjJhNzM1MC03N2U3LThlYzEtMzI1Yy0yNjU1MmIyMWU4NTkiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiIxM2U0OTRkNC04OGE0LWExMDQtMGYwZC1kOTBjMmQ1OWE0ZDAiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiJkNWI0YzBiZi1mYWViLTIyMGQtYmFlMi04MDA4MzllYzg4ODEiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiI1ODZjOTQyMi03MzAzLTJlNjgtMWRlZi05NmVlNzNjYzVhNzkiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX19fQ.k5yklQki1YItUtN1DIJvYLGq-vy90Kslq1wk4Qcgp2M'
      //       }
      //     }
      //   }

      // })
      

// ------------------------------------------------------------


      // { mpd }

      // player.src({
      //   src: "https://travelxp.s.llnwi.net/watch1/5ffe96a0d051dccc770fe216/manifest_v2_hd_05102021_1047.mpd",
      //   type: "application/dash+xml",
      //   keySystems: {
      //     "com.widevine.alpha": {
      //       url: "https://c8eaeae1-drm-widevine-licensing.axprod.net/AcquireLicense",
      //       licenseHeaders: {
      //         "X-AxDRM-Message":
      //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjQ1ODc2N2QtYTgzYi00MWQ0LWFlNjgtYWNhNzAwZDNkODRmIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiZXhwaXJhdGlvbl9kYXRldGltZSI6IjIwMjQtMDItMThUMTI6MjY6MDkuNDY0KzAwOjAwIiwiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWUsInJlYWxfdGltZV9leHBpcmF0aW9uIjp0cnVlfSwiY29udGVudF9rZXlfdXNhZ2VfcG9saWNpZXMiOlt7Im5hbWUiOiJQb2xpY3kgQSIsIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJjNjJhNzM1MC03N2U3LThlYzEtMzI1Yy0yNjU1MmIyMWU4NTkiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiIxM2U0OTRkNC04OGE0LWExMDQtMGYwZC1kOTBjMmQ1OWE0ZDAiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiJkNWI0YzBiZi1mYWViLTIyMGQtYmFlMi04MDA4MzllYzg4ODEiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiI1ODZjOTQyMi03MzAzLTJlNjgtMWRlZi05NmVlNzNjYzVhNzkiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX19fQ._sKHeZG02yD4svwhH2a83hN4aJZ6-thlsOMfbpmrQ-I",
      //       },
      //       priority: 0,
      //     },
      //   },
      // });
  
    }

    return () => {
      player.dispose();
    };
  }, [props, videoEl]);

  return (
    <>
      <h1>The implementation below is using react functions</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  );
};

export default Player;
