"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_SOURCE = "/yashasvini-cinematic-intro-4k.mp4";
const VIDEO_POSTER = "/yashasvini-cinematic-poster-4k.webp";

function VideoIntro() {
  const layerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const layer = layerRef.current;
    const video = videoRef.current;
    const section = layer?.closest("section");
    if (!video || !section) return;

    const playIntro = async () => {
      video.currentTime = 0;
      video.volume = 1;
      video.defaultMuted = false;
      video.muted = false;

      try {
        await video.play();
        setIsMuted(false);
      } catch {
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
        } catch {
          // The poster remains visible if the browser blocks all autoplay.
        }
      }
    };

    const enableSoundFromInteraction = (event: Event) => {
      const target = event.target;
      if (
        !visibleRef.current ||
        !video.muted ||
        (target instanceof Element && target.closest(".hero-sound-toggle"))
      ) {
        return;
      }

      video.currentTime = 0;
      video.volume = 1;
      video.defaultMuted = false;
      video.muted = false;

      void video
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
        });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isHomeActive = entry.intersectionRatio >= 0.58;

        if (isHomeActive && !visibleRef.current) {
          visibleRef.current = true;
          void playIntro();
        } else if (!isHomeActive && visibleRef.current) {
          visibleRef.current = false;
          video.pause();
        }
      },
      { threshold: [0, 0.58] },
    );

    observer.observe(section);
    document.addEventListener("pointerdown", enableSoundFromInteraction, true);
    document.addEventListener("keydown", enableSoundFromInteraction, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("pointerdown", enableSoundFromInteraction, true);
      document.removeEventListener("keydown", enableSoundFromInteraction, true);
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.muted) {
      video.muted = true;
      setIsMuted(true);
      return;
    }

    video.currentTime = 0;
    video.volume = 1;
    video.defaultMuted = false;
    video.muted = false;

    try {
      await video.play();
      setIsMuted(false);
    } catch {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div ref={layerRef} className="hero-video-layer">
      <video
        ref={videoRef}
        className="hero-background-video"
        src={VIDEO_SOURCE}
        poster={VIDEO_POSTER}
        autoPlay
        playsInline
        preload="auto"
        aria-label="Animated introduction by Yashasvini Bhanuraj"
      />
      <button
        type="button"
        className="hero-sound-toggle"
        onClick={toggleSound}
        aria-label={isMuted ? "Play introduction with sound" : "Mute introduction"}
        title={isMuted ? "Unmute introduction" : "Mute introduction"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}

export default VideoIntro;
