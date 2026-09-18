"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  theme: "light" | "dark";
  compact: boolean;
}

export default function Navbar({ theme, compact }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dark = theme === "dark";

  const navH = compact ? "62px" : "78px";
  const navBg = compact
    ? dark
      ? "rgba(11, 11, 11, 0.82)"
      : "rgba(247, 247, 245, 0.85)"
    : "transparent";
  const navBorder = compact
    ? dark
      ? "rgba(247, 247, 245, 0.08)"
      : "rgba(11, 11, 11, 0.08)"
    : "transparent";
  const navBlur = compact ? "12px" : "0px";
  const navColor = dark ? "#F7F7F5" : "#0B0B0B";
  const btnBg = dark ? "#F7F7F5" : "#0B0B0B";
  const btnFg = dark ? "#0B0B0B" : "#F7F7F5";
  const logoFilter = dark ? "invert(1)" : "none";

  return (
    <>
      <header
        className="nav-header"
        style={{
          position: "fixed",
          zIndex: 60,
          top: 0,
          left: 0,
          right: 0,
          height: navH,
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          boxSizing: "border-box",
          background: navBg,
          color: navColor,
          borderBottom: `1px solid ${navBorder}`,
          backdropFilter: `blur(${navBlur})`,
          WebkitBackdropFilter: `blur(${navBlur})`,
          transition:
            "height 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.6s, color 0.6s, border-color 0.6s",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          aria-label="EXIT home"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/exit.svg"
            alt="EXIT"
            className="nav-logo-img"
            width="115"
            height="26"
            style={{
              display: "block",
              width: "115px",
              height: "26px",
              filter: logoFilter,
              transition: "filter 0.6s ease",
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary"
          className="nav-links-desktop"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "34px",
          }}
        >
          <a className="nl" href="#founders">
            For Founders
          </a>
          <a className="nl" href="#investors">
            For Investors
          </a>
          <a className="nl" href="#how">
            How It Works
          </a>
          <a className="nl" href="#verify">
            Verification
          </a>
        </nav>

        {/* Right Actions */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <a
            className="nl nav-cta-desktop"
            href="#final"
            style={{
              display: "inline-block",
            }}
          >
            Login
          </a>
          <a
            className="pill nav-cta-desktop"
            href="#video"
            style={{
              padding: "10px 18px",
              background: btnBg,
              color: btnFg,
              fontSize: "12.5px",
            }}
          >
            Get Started <span className="ar">→</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="hamburger-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "4px",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: navColor,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: mobileOpen
                  ? "rotate(45deg) translate(4px, 4px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: navColor,
                transition: "opacity 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: navColor,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: 55,
            top: navH,
            left: 0,
            right: 0,
            background: dark ? "#111111" : "#FFFFFF",
            color: dark ? "#F7F7F5" : "#0B0B0B",
            borderBottom: `1px solid ${dark ? "#262626" : "rgba(11,11,11,.1)"}`,
            padding: "24px 20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
        >
          <a
            className="nl"
            href="#founders"
            style={{ fontSize: "16px", padding: "8px 0" }}
            onClick={() => setMobileOpen(false)}
          >
            For Founders
          </a>
          <a
            className="nl"
            href="#investors"
            style={{ fontSize: "16px", padding: "8px 0" }}
            onClick={() => setMobileOpen(false)}
          >
            For Investors
          </a>
          <a
            className="nl"
            href="#how"
            style={{ fontSize: "16px", padding: "8px 0" }}
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            className="nl"
            href="#verify"
            style={{ fontSize: "16px", padding: "8px 0" }}
            onClick={() => setMobileOpen(false)}
          >
            Verification
          </a>
          <a
            className="nl"
            href="#final"
            style={{ fontSize: "16px", padding: "8px 0" }}
            onClick={() => setMobileOpen(false)}
          >
            Login
          </a>
          <a
            className="pill"
            href="#video"
            style={{
              marginTop: "8px",
              padding: "14px 20px",
              background: btnBg,
              color: btnFg,
              fontSize: "14px",
              justifyContent: "center",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Get Started <span className="ar">→</span>
          </a>
        </div>
      )}
    </>
  );
}
