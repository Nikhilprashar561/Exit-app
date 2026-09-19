"use strict";
"use client";

import React, { useEffect, useRef } from "react";

interface NoiseSectionProps {
  progress: number;
}

function NoiseSection({ progress }: NoiseSectionProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const coreRef = useRef<HTMLSpanElement>(null);
  const sigRef = useRef<HTMLDivElement>(null);
  const vlineRef = useRef<HTMLSpanElement>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const labelTexts = [
    "Advisors",
    "Cold emails",
    "Founder",
    "Events",
    "Referrals",
    "Mentors",
    "Buyers",
    "Investor",
    "Opportunities",
    "Capital",
  ];

  // Helper clamp & ease
  const cl = (v: number) => Math.max(0, Math.min(1, v));
  const ease = (v: number) => {
    v = cl(v);
    return 1 - Math.pow(1 - v, 3);
  };

  useEffect(() => {
    if (!frameRef.current || !svgRef.current) return;
    const w = frameRef.current.clientWidth || 1440;
    const h = frameRef.current.clientHeight || 800;

    const isMob = w < 768;
    svgRef.current.setAttribute("viewBox", `0 0 ${w} ${h}`);
    const cx = w / 2;
    const cy = isMob ? h * 0.62 : h * 0.58;

    const ys = isMob
      ? [0.28, 0.34, 0.40, 0.46, 0.52, 0.58, 0.64, 0.70, 0.76, 0.82, 0.88]
      : [0.2, 0.27, 0.34, 0.41, 0.48, 0.55, 0.62, 0.69, 0.76, 0.83, 0.9];
    const bend = ease((progress - 0.04) / 0.42);
    const cleanT = cl((progress - 0.5) / 0.25);

    // Map labels to lines
    const labPairs = [
      [0, 1],
      [1, 3],
      [2, 4],
      [3, 7],
      [4, 9],
      [5, 12],
      [6, 14],
      [7, 17],
      [8, 19],
      [9, 21],
    ];

    const linesInfo: { side: string; y0: number; op: number; draw: number; sig: boolean }[] = [];

    // Draw all 22 curves
    for (let i = 0; i < 22; i++) {
      const path = pathsRef.current[i];
      if (!path) continue;
      const side = i < 11 ? "L" : "R";
      const y0 = (side === "L" ? ys[i] : ys[i - 11] + 0.035) * h;
      const ye = y0 + (cy - y0) * bend;
      const r = ((i * 37) % 11) / 11;
      const isSig = i === 4 || i === 17;

      const d =
        side === "L"
          ? `M 0 ${y0} C ${w * 0.32} ${y0} ${cx - w * 0.16} ${ye} ${cx} ${ye}`
          : `M ${w} ${y0} C ${w * 0.68} ${y0} ${cx + w * 0.16} ${ye} ${cx} ${ye}`;

      path.setAttribute("d", d);
      const draw = ease((progress - (i % 11) * 0.007) / 0.24);
      path.setAttribute("stroke-dashoffset", String(1 - draw));

      let op = 0.8;
      let sw = isMob ? 1.1 : 0.8;
      if (isSig) {
        op = 0.35 + 0.65 * cleanT;
        sw = isMob ? (1.5 + 0.8 * cleanT) : (0.8 + 0.5 * cleanT);
      } else {
        op = (isMob ? 0.38 : 0.3) * (1 - cl((progress - 0.5 - r * 0.14) / 0.14));
      }

      path.setAttribute("stroke-opacity", op.toFixed(3));
      path.setAttribute("stroke-width", sw.toFixed(2));
      linesInfo.push({ side, y0, op, draw, sig: isSig });
    }

    // Position the 10 labels along the curves
    labPairs.forEach(([labIdx, lineIdx]) => {
      const label = labelsRef.current[labIdx];
      const path = pathsRef.current[lineIdx];
      const line = linesInfo[lineIdx];
      if (!label || !path || !line) return;

      let len = 0;
      try {
        len = path.getTotalLength();
      } catch {
        return;
      }

      const t = line.sig
        ? (isMob ? 0.36 : 0.1) + (isMob ? 0.42 : 0.62) * ease((progress - 0.12) / 0.66)
        : (isMob ? 0.22 : 0.08) + (isMob ? 0.46 : 0.5) * cl((progress - 0.12) / 0.5);

      const pt = path.getPointAtLength(len * t);
      label.style.transform = `translate(${pt.x.toFixed(1)}px, ${pt.y.toFixed(1)}px) translate(-50%, -50%)`;

      const o = line.sig ? line.draw : Math.min(line.draw, line.op / (isMob ? 0.38 : 0.3));
      if (line.sig && progress > 0.55) {
        label.style.color = "#F7F7F5";
      } else {
        label.style.color = "#C9C9C5";
      }
      label.style.opacity = o.toFixed(3);
    });

    // Core pulsing scale
    if (coreRef.current) {
      const s = 1 + (isMob ? 0.6 : 0.5) * ease((progress - 0.72) / 0.2);
      coreRef.current.style.transform = `scale(${s.toFixed(3)})`;
    }
    if (sigRef.current) {
      sigRef.current.style.top = `${cy}px`;
    }
    if (vlineRef.current) {
      vlineRef.current.style.top = `${cy + 8}px`;
      vlineRef.current.style.height = `${((h - cy - 8) * ease((progress - 0.84) / 0.16)).toFixed(1)}px`;
    }
  }, [progress]);

  return (
    <section
      id="noise"
      className="noise-section"
      data-theme="dark"
      aria-label="Too much noise"
      style={{
        position: "relative",
        height: "2400px",
        background: "#0B0B0B",
        color: "#F7F7F5",
      }}
    >
      <div className="stick" ref={frameRef} data-frame="1">
        {/* Responsive Canvas Wrapper for Radar, Curves and Pills */}
        <div className="noise-canvas-wrap" style={{ position: "absolute", inset: 0 }}>
          {/* SVG Bezier Noise/Signal Lines */}
          <svg
            ref={svgRef}
            data-nsvg="1"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          >
            {Array.from({ length: 22 }).map((_, i) => (
              <path
                key={i}
                ref={(el) => {
                  pathsRef.current[i] = el;
                }}
                fill="none"
                stroke="#F7F7F5"
                strokeDasharray="1"
                strokeDashoffset="1"
                pathLength="1"
              />
            ))}
          </svg>

          {/* 10 Category Pills along Curves */}
          {labelTexts.map((txt, i) => (
            <span
              key={txt}
              ref={(el) => {
                labelsRef.current[i] = el;
              }}
              className="npill"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 0,
                willChange: "transform, opacity",
              }}
            >
              {txt}
            </span>
          ))}

          {/* Pulsing Signal Core (Convergence Target) */}
          <div
            ref={sigRef}
            data-nsig="1"
            style={{
              position: "absolute",
              left: "50%",
              top: "58%",
              width: 0,
              height: 0,
            }}
          >
            <span className="halo" />
            <span className="halo halo2" />
            <span
              ref={coreRef}
              data-ncore="1"
              className="sig"
              style={{ boxShadow: "0 0 0 7px rgba(247,247,245,.12)" }}
            />
          </div>
        </div>

        {/* Vertical Light Trace Extending Down */}
        <span
          ref={vlineRef}
          data-nvline="1"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            width: "1px",
            marginLeft: "-0.5px",
            background: "#F7F7F5",
            top: "58%",
            height: 0,
          }}
        />

        {/* Section Header Content */}
        <div
          className="sec-header-wrap"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "clamp(96px, 13vh, 130px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "none",
            padding: "0 20px",
          }}
        >
          <div style={{ position: "relative", height: "14px", width: "300px" }}>
            <span
              className="lab"
              style={{
                position: "absolute",
                inset: 0,
                color: "#9A9A96",
                opacity: 1 - cl((progress - 0.6) * 6),
                transition: "opacity 0.4s ease",
              }}
            >
              The old way
            </span>
            <span
              className="lab"
              style={{
                position: "absolute",
                inset: 0,
                color: "#F7F7F5",
                opacity: cl((progress - 0.66) * 6),
                transition: "opacity 0.4s ease",
              }}
            >
              The signal
            </span>
          </div>

          <h2
            className="serif sec-heading-noise"
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(30px, 6vw, 80px)",
              lineHeight: 1.02,
              letterSpacing: "-.01em",
              color: "#F7F7F5",
            }}
          >
            Too much <span className="i">noise.</span>
          </h2>

          <p
            className="sec-sub-text"
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(13px, 3.8vw, 15px)",
              lineHeight: 1.65,
              color: "#B5B5B1",
              maxWidth: "460px",
            }}
          >
            There are endless people, opportunities and connections.
            <br />
            But finding the right ones isn’t easy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(NoiseSection);
