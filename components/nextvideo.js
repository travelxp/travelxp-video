/* eslint-disable import/no-unused-modules */
import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'

const videoSource = {
    techOrder: ['html5'],
    autoplay: true,
    controls: true,
    sources: [
        {
            src: "https://travelxp.s.llnwi.net/watch1/6454f0d130502ab36242036d/manifest_v1.mpd",
            type: "application/dash+xml"
        }
    ],
    vttbasepath : "https://travelxp.s.llnwi.net/watch1/6454f0d130502ab36242036d/v1/sprites/",
    vttsrc : "https://travelxp.s.llnwi.net/watch1/6454f0d130502ab36242036d/v1/sprites/sprite.vtt"
}

export default function NextVideo(props) {
    const [videoEl, setVideoEl] = useState(null)

    const onVideo = useCallback((el) => {
        setVideoEl(el)
    }, [])

    useEffect(() => {

        if (videoEl == null) return
        
        console.log(videojs)

        const player = videojs(videoEl, videoSource)
        
      
        require('../videojs/plugins/nuevo-dash');
        require('../videojs/nuevo.min.js');
        require('../videojs/plugins/videojs.events');
        //require('../videojs/plugins/videojs.thumbnails.js');
        // require('../videojs/plugins/videojs.hotkeys.min.js');
        //require('../videojs/plugins/videojs.thumbnails.js');
        //require('../videojs/plugins/videojs-chromecast.min.js');
        
        player.nuevo({ title: "video title", video_id: "video id", contextMenu: false ,
        // slideImage : "https://travelxp.s.llnwi.net/watch1/6454f0d130502ab36242036d/v1/sprites/sprite_0.png",
        // slideType: 'horizontal', //optional
        // slideWidth: 160, //optional
        // slideHeight: 90, //optional
        // ghostThumb : true
        });
       
         // player.thumbnails({basePath:videoSource.vttbasepath ,src : videoSource.vttsrc});
          // Load VTT file on Nuevo plugin ready event
        //   player.on('ready', function () {
        //     let track = [{ kind: 'metadata', src: videoSource1.vttsrc }];
        //     player.textTracks(track);
         
        //   });  
         
         
       
        // Initialize Events plugin

        player.events({ analytics: true });

        // Track events
        player.on("track", (e, data) => {
            switch (data.event) {
                case 'firstPlay': console.log('First Play', data); break;
                case '10%': console.log('Progress 10%', data); break;
                case '25%': console.log('Progress 25%', data); break;
                case '50%': console.log('Progress 50%', data); break;
                case '75%': console.log('Progress 75%', data); break;
                case '90%': console.log('Progress 90%', data); break;
                case 'buffered': console.log('Video buffered', data); break;
                case 'paused': console.log('Video paused', data); break;
                case 'resume': console.log('Video resumed', data); break;
                case 'replay': console.log('Video replayed', data); break;
                case 'enterFullscreen': console.log('Video entered fullscreen', data); break;
                case 'exitFullscreen': console.log('Video exited fullscreen', data); break;
                case 'seek': console.log('Video seeked', data); break;
                case 'mute': console.log('Video muted', data); break;
                case 'unmute': console.log('Video unmuted', data); break;
                case 'resolutionChange': console.log('Video resolution changed', data); break;
                case 'ended': console.log('Video completed', data); break;
                case 'summary': console.log('Video summary', data); break; // Fires only when video ended
            }
        });

        // player.chromecast();
        return () => {

            player.dispose()
        }
    }, [props, videoEl])

    

    return (
        <>
            <h1>The implementation below is using react functions</h1>
            <div data-vjs-player>
                <video ref={onVideo} className="video-js vjs-fluid" playsInline />
            </div>
        </>
    )
}