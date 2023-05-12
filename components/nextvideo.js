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

        //require('../videojs/plugins/videojs-chromecast.min.js');
        require('../videojs/plugins/videojs.events.js');

        if (videoEl == null) return
        
        const player = videojs(videoEl, PlayerProps)
        player.nuevo();
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