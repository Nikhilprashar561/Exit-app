"use strict";
"use client";

import React, { useRef, useState, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);

  // Attempt automatic autoplay when mounted
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented by browser policy, keep muted and wait for user interaction
          setIsPlaying(false);
        });
    }

    const handleTimeUpdate = () => {
      if (v.duration) {
        setProgressPercent((v.currentTime / v.duration) * 100);
      }
    };

    v.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      v.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTogglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) {
      v.requestFullscreen();
    }
  };

  return (
    <section
      id="video"
      data-theme="dark"
      aria-label="See EXIT in motion"
      style={{
        position: "relative",
        background: "#090909",
        color: "#F7F7F5",
        padding: "110px 20px 60px",
        overflow: "hidden",
      }}
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(247,247,245,.06) 0%, rgba(247,247,245,.015) 50%, rgba(0,0,0,0) 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid texture */}
      <div
        className="grid"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
      />

      {/* Section Header */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          className="lab"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(247,247,245,.08)",
            border: "1px solid rgba(247,247,245,.14)",
            color: "#F7F7F5",
            fontSize: "10.5px",
            letterSpacing: ".2em",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#F7F7F5",
              boxShadow: "0 0 10px #F7F7F5",
            }}
          />
          See EXIT in motion
        </span>

        <h2
          className="serif"
          style={{
            fontSize: "clamp(42px, 5.4vw, 78px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            color: "#F7F7F5",
          }}
        >
          Watch how Exit <span className="i">works.</span>
        </h2>

        <p
          style={{
            marginTop: "18px",
            fontSize: "15.5px",
            lineHeight: 1.6,
            color: "#B5B5B1",
            maxWidth: "540px",
          }}
        >
          From first connection to a closed deal — the entire ecosystem in under a minute.
        </p>
      </div>

      {/* Video Frame Presentation Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1040px",
          margin: "48px auto 0",
          width: "100%",
        }}
      >
        <div
          className="video-frame"
          style={{
            cursor: "pointer",
            aspectRatio: "16/9",
            maxWidth: "100%",
            borderRadius: "24px",
            background: "#000000",
            border: "1px solid rgba(247,247,245,.16)",
            boxShadow:
              "0 40px 100px -20px rgba(0,0,0,0.9), 0 0 60px rgba(247,247,245,0.04)",
          }}
          onClick={handleTogglePlay}
        >
          <video
            ref={videoRef}
            id="exitVideo"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              background: "#000000",
            }}
          >
            <source src="/video/Exit_edited_logo_replaced.mp4" type="video/mp4" />
          </video>

          {/* Large Center Play Overlay (when paused) */}
          <div
            className={`video-play ${isPlaying ? "hidden" : ""}`}
            aria-label="Play video"
          >
            <div className="play-btn">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="#0B0B0B">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Floating Glassmorphic Control Bar */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 5,
              pointerEvents: "none",
            }}
          >
            {/* Play/Pause Button Pill */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleTogglePlay();
              }}
              style={{
                pointerEvents: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "rgba(11, 11, 11, 0.75)",
                border: "1px solid rgba(247, 247, 245, 0.2)",
                color: "#F7F7F5",
                fontSize: "12px",
                fontWeight: 500,
                backdropFilter: "blur(10px)",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
            >
              {isPlaying ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </>
              )}
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Sound Toggle Button Pill */}
              <button
                type="button"
                onClick={handleToggleMute}
                style={{
                  pointerEvents: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  background: isMuted
                    ? "rgba(11, 11, 11, 0.75)"
                    : "rgba(247, 247, 245, 0.95)",
                  border: "1px solid rgba(247, 247, 245, 0.2)",
                  color: isMuted ? "#F7F7F5" : "#0B0B0B",
                  fontSize: "12px",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  transition: "background 0.25s, color 0.25s, transform 0.2s",
                }}
              >
                {isMuted ? (
                  <>
                    {/* Muted Speaker Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                    Sound: Off
                  </>
                ) : (
                  <>
                    {/* Unmuted Sound Wave Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    Sound: On
                  </>
                )}
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={handleFullscreen}
                aria-label="Fullscreen"
                style={{
                  pointerEvents: "auto",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "rgba(11, 11, 11, 0.75)",
                  border: "1px solid rgba(247, 247, 245, 0.2)",
                  color: "#F7F7F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thin Progress Bar at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "rgba(247, 247, 245, 0.15)",
              zIndex: 4,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#F7F7F5",
                width: `${progressPercent}%`,
                transition: "width 0.15s linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
