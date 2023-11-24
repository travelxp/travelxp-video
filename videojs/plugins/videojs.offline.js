/**
 * @license
 * Copyright (c) 2023 The Nuevodevel Team. All rights reserved.
 * Offline plugin for video.js v 8.*
 * Version 3.0.0
 */
try{videojs.options.vhs.maxPlaylistRetries=1}catch(e){var oe=!0}try{videojs.options.errorDisplay=!1}catch(e){oe=!0}!function(e,o){"function"==typeof define&&define.amd?define([],o.bind(this,e,e.videojs)):"undefined"!=typeof module&&module.exports?module.exports=o(e,e.videojs):o(e,e.videojs)}(window,function(e,o){"use strict";function t(e,t){var n;return(t=o.obj.merge({offlineImage:"",offlineTimeout:30,liveTyle:"",offlineCountdown:!1,clock:0,label:"restart",loadTimeout:0,resetMethod:1},t||{})).label=(n=t.label).charAt(0).toUpperCase()+n.slice(1),e.liveSource=function(e){t.liveSource=e},e.on("ready",function(){var n,i,l=o.dom,r=e.el(),c=null,s=null,f=function(e,o){try{return e.querySelector(o)}catch(e){return!1}};if(t.liveSource=e.currentSource(),""!=t.offlineImage){var u=f(r,".vjs-error-display");u&&l.addClass(u,"vjs-abs-hidden"),(c=document.createElement("div")).className="vjs-poster",c.setAttribute("style",'background-position: 50% 50%;background-repeat:no-repeat; background-size: contain;top:100%;z-index:15999;opacity:1!important;pointer-events:"none";background-color:#000;'),r.appendChild(c),c.style.backgroundImage="url("+t.offlineImage+")",c.style.height=0,t.loadTimeout>0&&e.one("play",function(){i=setTimeout(function(){e.isOffline=!0,p()},t.loadTimeout)}),e.on("error",function(){if(!e.isOffline){var o=e.error();1!=o.code&&2!=o.code&&4!=o.code&&3!=o.code&&-2!=o.code||(e.isOffline=!0,p())}}),setInterval(function(){if(!e.isOffline){var o=r.className;o.indexOf("vjs-has-started")>-1&&o.indexOf("vjs-ended")>-1&&(e.isOffline=!0,p())}},500);e.on("playing",function(){c.style.height=0,c.style.display="none",e.isOffline=!1,!0!==o.browser.IS_IOS&&e.muted(!1),clearTimeout(n),clearTimeout(i);try{r.removeChild(s)}catch(e){}s=null})}function a(){c.setAttribute("style",c.getAttribute("style")+";top:0;height:100%;display:block!important"),t.offlineCountdown&&null==s&&((s=document.createElement("div")).setAttribute("style","position:absolute;right:30px;bottom:25px;font-size:20px;color:#fff;font-family:sans-serif,Arial;text-shadow:1px 1px 1px #000;z-Index:16000"),r.appendChild(s))}function d(){!function(){if(t.liveSource||(t.liveSource=e.currentSource()),2===t.resetMethod){e.src(t.liveSource);var o=e.play();void 0!==o&&o.then(function(){return!0}).catch(function(o){e.muted(!0),e.play()})}1===t.resetMethod&&(e.src(t.liveSource),e.load(),setTimeout(function(){e.play()},100))}()}function p(){var o=f(r,".vjs-loading-spinner");l.addClass(o,"vjs-abs-hidden"),t.clock=0,a(),t.offlineCountdown&&null!=s&&(s.innerHTML=t.label+" "+v(t.offlineTimeout)),t.clock=0,function o(){clearTimeout(n),n=setTimeout(function(){t.clock++,t.offlineCountdown&&s&&(s.innerHTML=t.label+" "+v(t.offlineTimeout-t.clock)),t.clock>=t.offlineTimeout&&(t.clock=0,e.trigger("offlineLoop"),d()),o()},1e3)}()}function v(e){var o=parseInt(e,10),t=Math.floor(o/60)%60,n=o%60,i="";return i=t>0?t>9?t+":":"0"+t+":":"0:",n>0?i+=n>9?n:"0"+n:i="0:00",i}}),this}e.videojs_offline={version:"2.0"};o.registerPlugin("offline",function(e){this.ready(function(){t(this,e)})})});