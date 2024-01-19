"use client";
import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-contrib-eme";

const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      return;
    }
    const player = videojs(videoEl);
    
    
    player.eme();
    player.src({
      src: "https://travelxp.s.llnwi.net/watch1/5ffe9754623b58327a2e5154/manifest_v2_uhd1_05102021_1049.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": {
          url: "https://c8eaeae1-drm-widevine-licensing.axprod.net/AcquireLicense",
          licenseHeaders: {
            "X-AxDRM-Message":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjQ1ODc2N2QtYTgzYi00MWQ0LWFlNjgtYWNhNzAwZDNkODRmIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiZXhwaXJhdGlvbl9kYXRldGltZSI6IjIwMjQtMDEtMTlUMDg6Mjk6NDIuMjExKzAwOjAwIiwiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWUsInJlYWxfdGltZV9leHBpcmF0aW9uIjp0cnVlfSwiY29udGVudF9rZXlfdXNhZ2VfcG9saWNpZXMiOlt7Im5hbWUiOiJQb2xpY3kgQSIsIndpZGV2aW5lIjp7ImRldmljZV9zZWN1cml0eV9sZXZlbCI6IlNXX1NFQ1VSRV9DUllQVE8ifX1dLCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJhNDVjODI2OC1mNTBkLWY4ZDctZmFiMC03YmQ3NmUzOGE1MDEiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiJjYTBhZDc0My00YTIxLWMyOWQtYzhhNy1iMGMwZDg2ZGMyYTgiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiIxN2FlMmE1Yi0xZmVmLTgzYmUtODM3ZS1mZGY4MjY2MTY2ZDkiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9LHsiaWQiOiJkNmY1NTE5MC03YmY2LTI2ZWMtZDY2Yi0zMDcxMTc1MGI1MDUiLCJ1c2FnZV9wb2xpY3kiOiJQb2xpY3kgQSJ9XX19fQ.hx2s8SzixWYrnZCdZTtBT9ExEfFZJ57j83aA0lz-CIM",
          },
          priority: 0,
        },
      },
    });

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
