/**
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * VTTThumbnails Plugin Video.js 8
 */
/*eslint no-inner-declarations: "off"*/ import videojs from "video.js";
const defaults = { width: 160, height: 90, timeTooltip: !0, basePath: "", src: "", responsive: !1, mediaqueries: { tiny: 0.5, small: 0.75, medium: 1, large: 1.25, xlarge: 1.5 } },
  onPlayerReady = (e, t) => {
    defaults.basePath = "";
    var i, s, r, o, n, a, d, l, h, u, v, c, f, m;
    if (t) {
      if (t.basePath) defaults.basePath = t.basePath;
      if (t.width && t.height) {
        defaults.width = t.width;
        defaults.height = t.height;
      }
      if (t.src)
        e.on("ready", function () {
          e.trigger("medialoaded", { xml: t.src });
        });
    }
    r = t;
    function p(e) {
      var t, i, s;
      i = e.indexOf("#");
      if (-1 === i) return { src: e, w: 0, h: 0, x: 0, y: 0 };
      t = e.substring(0, i);
      s = e.substring(i + 1);
      if ("xywh=" !== s.substring(0, 5)) return { src: defaults.basePath + t, w: 0, h: 0, x: 0, y: 0 };
      var r = s.substring(5).split(",");
      return { src: defaults.basePath + t, w: parseInt(r[2], 10), h: parseInt(r[3], 10), x: parseInt(r[0], 10), y: parseInt(r[1], 10) };
    }
    function g(e) {
      const t = e.split("."),
        i = t[0],
        s = i.split(":");
      return { milliseconds: parseInt(t[1], 10) || 0, seconds: parseInt(s.pop(), 10) || 0, minutes: parseInt(s.pop(), 10) || 0, hours: parseInt(s.pop(), 10) || 0 };
    }
    function y(e) {
      const t = g(e);
      return parseInt(3600 * t.hours + 60 * t.minutes + t.seconds + t.milliseconds / 1e3, 10);
    }
    function w(e) {
      fetch(e)
        .then((e) => e.text())
        .then((e) => {
          if (e.length > 0) {
            var t = j(e);
            if (t.length > 0) {
              m = t;
              b();
            }
          }
        });
    }
    function j(e) {
      var t = [],
        i = e.split(/[\r\n][\r\n]/i);
      i.forEach(function (e) {
        if (e.match(/([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?( ?--> ?)([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?[\r\n]{1}.*/gi)) {
          const i = e.split(/[\r\n]/i),
            s = i[0],
            r = s.split(/ ?--> ?/i),
            o = r[0],
            n = r[1],
            a = i[1];
          t.push({ startTime: y(o), endTime: y(n), text: a });
        }
      });
      return t;
    }
    e.on("medialoaded", function (t, s) {
      m = [];
      d = e.controlBar.progressControl;
      l = e.el_.querySelector(".vjs-progress-holder");
      l.removeEventListener("touchstart", C);
      l.removeEventListener("mousemove", u);
      l.removeEventListener("mouseleave", c);
      l.removeEventListener("mousedown", S);
      e.sprite = !1;
      var o = e.el_.querySelector(".vtt_canvas");
      if (o) o.parentNode.removeChild(o);
      var n = e.el_.querySelector(".vjs-thumb-tooltip");
      if (n) n.parentNode.removeChild(n);
      var a = e.el_.querySelector(".vjs-thumb-image");
      if (a) a.parentNode.removeChild(a);
      var h = e.el_.querySelector(".vjs-thumbnail-holder");
      if (h) h.parentNode.removeChild(h);
      if (s && s.xml) {
        if (r.debug) console.log("data from xml");
        w(s.xml);
      } else {
        d = e.controlBar.progressControl;
        l = e.el_.querySelector(".vjs-progress-holder");
        var v = e.textTracks().length;
        if (0 === v) {
          if (i) videojs.dom.addClass("div", "vjs-hidden");
          return;
        }
        for (var p = !1, g = 0; g < v; ) {
          if ("metadata" === e.textTracks()[g].kind) {
            f = e.textTracks()[g];
            if (void 0 === f.src) return;
            if (f.src) {
              if (r.debug) console.log("data from track");
              w(f.src);
              return;
            }
            f.mode = "hidden";
            f = e.textTracks()[g];
            p = !0;
            f.mode = "showing";
            if (null == f.cues) {
              f.mode = "hidden";
              return;
            }
            var y = f && f.cues.length;
            break;
          }
          g++;
        }
        if (!0 !== p) {
          if (i) videojs.dom.addClass("div", "vjs-hidden");
          return;
        }
        f = e.textTracks()[g];
        y = f && f.cues.length;
        if (y < 1) return;
        g = 0;
        e.sprite = !0;
        m = f && f.cues;
        b();
      }
    });
    function b() {
      i = document.createElement("div");
      i.className = "vjs-thumbnail-holder";
      o = document.createElement("canvas");
      o.className = "vtt_canvas";
      o.style.position = "absolute";
      o.style.left = "0";
      o.style.top = "0";
      i.appendChild(o);
      v = document.createElement("div");
      v.className = "vjs-thumb-tooltip";
      s = document.createElement("img");
      s.className = "vjs-thumb-image";
      s.style.visibility = "hidden";
      s.style.left = "-500px";
      s.style.top = "-500px";
      document.body.appendChild(s);
      i.appendChild(v);
      d.el().appendChild(i);
      if (e.shadowSlide) {
        var t = e.el_.querySelector(".vjs-thumb-poster");
        if (!t) {
          a = document.createElement("div");
          a.className = "vjs-thumb-poster";
          n = document.createElement("canvas");
          a.appendChild(n);
          e.el_.insertBefore(a, e.el_.querySelector(".vjs-poster"));
        }
      }
      h = e.duration();
      e.on("durationchange", function (t) {
        h = e.duration();
      });
      e.on("loadedmetadata", function (t) {
        h = e.duration();
      });
      var r = d.el_.querySelector(".vjs-play-progress"),
        f = r.querySelector(".vjs-time-tooltip");
      if (f) videojs.dom.addClass(f, "vjs-abs-hidden");
      var m = d.el().querySelector(".vjs-mouse-display");
      if (m) m.style.opacity = 0;
      var p = !1,
        g = Object.defineProperty({}, "passive", {
          get: function () {
            p = !0;
            return !0;
          },
        });
      window.addEventListener("testPassive", null, g);
      window.removeEventListener("testPassive", null, g);
      l.addEventListener("mousemove", u);
      l.addEventListener("mouseleave", c);
      l.addEventListener("mousedown", S);
      l.addEventListener("touchstart", C, p ? { passive: !1 } : !1);
    }
    function x(e, t) {
      e = e < 0 ? 0 : e;
      let i = Math.floor(e % 60),
        s = Math.floor((e / 60) % 60),
        r = Math.floor(e / 3600);
      const o = Math.floor((t / 60) % 60),
        n = Math.floor(t / 3600);
      if (isNaN(e) || e === 1 / 0) r = s = i = "-";
      r = r > 0 || n > 0 ? r + ":" : "";
      s = ((r || o >= 10) && s < 10 ? "0" + s : s) + ":";
      i = i < 10 ? "0" + i : i;
      return r + s + i;
    }
    function E() {
      L(!1);
      i.classList.remove("vjs-thumb-show");
      if (e.shadowSlide) {
        a.removeAttribute("style");
        n.width = 0;
        n.height = 0;
      }
    }
    function L(e) {
      if (e) d.el().setAttribute("style", "z-index:22");
      else d.el().removeAttribute("style");
    }
    c = function (e) {
      if (!0 !== videojs.holderdown) {
        L(!1);
        i.classList.remove("vjs-thumb-show");
      }
    };
    function q() {
      videojs.holderdown = !1;
      document.removeEventListener("mousemove", u);
      document.removeEventListener("mouseup", q);
      E();
    }
    function S(e) {
      videojs.holderdown = !0;
      L(!0);
      document.addEventListener("mousemove", u);
      document.addEventListener("mouseup", q);
      u(e);
    }
    function _() {
      l.removeEventListener("touchmove", u);
      l.removeEventListener("touchend", _);
      E();
    }
    function C(e) {
      videojs.holderdown = !1;
      u(e);
      l.addEventListener("touchmove", u);
      l.addEventListener("touchend", _);
    }
    o = null;
    u = function (t) {
      L(!0);
      t.preventDefault();
      h = e.duration();
      var l = d.el().querySelector(".vjs-progress-holder"),
        u = d.el().querySelector(".vjs-play-progress"),
        v = l.getBoundingClientRect(),
        c = null;
      if (t.pageX) c = t.pageX;
      else if (t.changedTouches) c = t.changedTouches[0].pageX || t.touches[0].clientX;
      var f = c - v.left;
      if (0 === f && videojs.holderdown && u.offsetWidth > 0);
      if (f < 0) f = 0;
      if (f > l.offsetWidth) f = l.offsetWidth;
      if (r.timeTooltip) {
        var g = f / l.offsetWidth,
          y = g * h,
          w = i.querySelector(".vjs-thumb-tooltip");
        if (w) w.innerHTML = x(y, h);
      }
      for (var j = m.length, b = 0, E = !1; b < j; ) {
        var q = m[b];
        if (q.startTime <= y && q.endTime >= y) {
          E = !0;
          var S = p(q.text);
          break;
        }
        b++;
      }
      S.iw = S.w;
      S.ih = S.h;
      if (!0 === E) {
        i.classList.remove("vjs-hidden");
        var _ = !1,
          C = S.src.replace(/\.\.\//g, "");
        if (s.src.indexOf(C) < 0) {
          s.src = S.src;
          _ = !0;
        }
        if (0 === S.w) {
          S.w = r.width;
          s.style.width = S.w + "px";
        }
        if (0 === S.h) {
          S.h = r.height;
          s.style.height = S.h + "px";
        }
        var P = 1;
        if (r.responsive && r.mediaqueries) {
          var I = e.el_.offsetWidth;
          if (I <= 320) P = r.mediaqueries.tiny;
          if (I > 320 && I <= 540) P = r.mediaqueries.small;
          if (I > 540 && I <= 1080) P = r.mediaqueries.medium;
          if (I > 1080 && I <= 1600) P = r.mediaqueries.large;
          if (I > 1600) P = r.mediaqueries.xlarge;
        }
        var T = S.w * P,
          N = S.h * P;
        if (o.width < 1);
        if (i.style.width !== T || i.style.height !== N) {
          i.style.width = T + "px";
          i.style.height = N + "px";
        }
        var k = o.getContext("2d");
        if (_)
          s.onload = function () {
            o.width = T;
            o.height = N;
            S.x = 0;
            S.y = 0;
            k.drawImage(s, S.x, S.y, S.w, S.h, 0, 0, o.width, o.height);
          };
        else if (S.iw > 0 && S.ih > 0) {
          o.width = T;
          o.height = N;
          k.drawImage(s, S.x, S.y, S.w, S.h, 0, 0, o.width, o.height);
        }
        var W = T / 2,
          M = d.el().offsetWidth,
          B = e.el_.querySelector(".vjs-progress-holder").offsetLeft,
          R = W - B;
        if (f + W + B > M) f = M - T;
        else if (f < R) f = 0;
        else f -= R;
        i.style.left = parseInt(f, 10) + "px";
        i.classList.add("vjs-thumb-show");
        if (videojs.holderdown && e.shadowSlide) {
          var O = e.el_.querySelector(".vjs-thumb-poster");
          if (!O) {
            a = document.createElement("div");
            a.className = "vjs-thumb-poster";
            n = document.createElement("canvas");
            a.appendChild(n);
            e.el_.insertBefore(a, e.el_.querySelector(".vjs-poster"));
          }
          var X = n.getContext("2d");
          n.width = e.el_.offsetWidth;
          n.height = e.el_.offsetHeight;
          a.style.width = n.width + "px";
          a.style.height = n.height + "px";
          X.clearRect(0, 0, n.width, n.height);
          X.drawImage(s, S.x, S.y, S.w, S.h, 0, 0, n.width, n.height);
        }
      } else i.classList.add("vjs-hidden");
    };
  },
  thumbnails = function (e) {
    this.ready(() => {
      onPlayerReady(this, videojs.obj.merge(defaults, e));
    });
  },
  registerPlugin = videojs.registerPlugin || videojs.plugin;
registerPlugin("thumbnails", thumbnails);
thumbnails.VERSION = "1.5";
export default thumbnails;
