/* eslint-disable import/no-unused-modules */
import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'


const PlayerProps = {
    techOrder: ['html5'],
    autoplay: true,
    controls: true,
    sources: [
        {
            src: "https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
            type: "application/dash+xml"
        }
    ]
}

export default function NextVideo(props) {
    const [videoEl, setVideoEl] = useState(null)

    const onVideo = useCallback((el) => {
        setVideoEl(el)
    }, [])

    useEffect(() => {
        require('../videojs/plugins/nuevo-dash.js');
        require('../videojs/nuevo.min.js');
        require('../videojs/plugins/videojs.events.js');
        // require('../videojs/plugins/videojs.hotkeys.min.js');
        // require('../videojs/plugins/videojs.thumbnails.js');
        //require('../videojs/plugins/videojs-chromecast.min.js');


        if (videoEl == null) return

        const player = videojs(videoEl, PlayerProps)
        player.nuevo({ title: "video title", id: "video id" });

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
                <video ref={onVideo} className="video-js" playsInline />
            </div>
        </>
    )
}