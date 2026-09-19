"use strict";
"use client";

import React, { useState } from "react";

interface PricingProps {
  magneticRef?: React.Ref<HTMLAnchorElement>;
}

export default function PricingSection({ magneticRef }: PricingProps) {
  const [selectedPlan, setSelectedPlan] = useState(1); // 0: Launch, 1: Scale, 2: EXIT

  const plansData = [
    { n: "01", name: "Launch", price: "₹2,999", credits: 50 },
    { n: "02", name: "Scale", price: "₹3,999", credits: 100 },
    { n: "03", name: "EXIT", price: "₹4,999", credits: 200 },
  ];

  const lines = [
    "For founders taking their first step into the room.",
    "For companies ready to widen the conversation.",
    "For founders who want every door open.",
  ];

  const cur = plansData[selectedPlan];
  const planRows = [
    { k: "Plan", v: cur.name },
    { k: "Credits", v: `${cur.credits} / month` },
    { k: "Investor connections", v: selectedPlan === 0 ? "5 per month" : selectedPlan === 1 ? "15 per month" : "Unlimited" },
    { k: "Funding posts", v: selectedPlan === 0 ? "1 active round" : selectedPlan === 1 ? "3 active rounds" : "Priority placement" },
    { k: "Company listing", v: "Verified listing" },
    { k: "Boosts", v: selectedPlan === 0 ? "1 boost included" : selectedPlan === 1 ? "3 boosts included" : "Weekly automated boost" },
  ];

  return (
    <section
      id="pricing"
      className="pricing-section"
      data-theme="light"
      aria-label="Choose your move"
      style={{
        position: "relative",
        minHeight: "1080px",
        overflow: "clip",
        background: "#F7F7F5",
        paddingBottom: "100px",
      }}
    >
      {/* Subtle Background Grid */}
      <div className="grid" aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />

      {/* Section Header */}
      <div
        className="pricing-header-wrap"
        style={{
          position: "relative",
          paddingTop: "130px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <span className="lab rv" style={{ color: "#6B6B6B" }}>
          Plans
        </span>
        <h2
          className="serif rv"
          style={{
            margin: "22px 0 0",
            fontSize: "clamp(46px, 5.2vw, 78px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
          }}
        >
          Choose your <span className="i">move.</span>
        </h2>
        <p className="rv" style={{ margin: "18px 0 0", fontSize: "15px", color: "#6B6B6B" }}>
          Credits power every connection, post and boost.
        </p>
      </div>

      {/* 3 Pricing Plan Cards */}
      <div
        role="radiogroup"
        aria-label="Plans"
        className="pricing-grid-container"
        style={{
          position: "relative",
          maxWidth: "1040px",
          margin: "60px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          borderTop: "1px solid rgba(11,11,11,.14)",
          borderBottom: "1px solid rgba(11,11,11,.14)",
          background: "rgba(247,247,245,0.6)",
        }}
      >
        {plansData.map((pl, i) => {
          const on = i === selectedPlan;
          const numDots = Math.floor(pl.credits / 5);

          return (
            <button
              key={pl.name}
              type="button"
              role="radio"
              aria-checked={on}
              className="plan"
              onClick={() => setSelectedPlan(i)}
              style={{
                position: "relative",
                padding: "30px 30px 28px",
                borderLeft: i === 0 ? "none" : "1px solid rgba(11,11,11,.1)",
                opacity: on ? 1 : 0.42,
                color: "#0B0B0B",
              }}
            >
              {/* Active top bar indicator */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "-1px",
                  height: "2px",
                  background: "#0B0B0B",
                  transform: `scaleX(${on ? 1 : 0})`,
                  transformOrigin: "left",
                  transition: "transform 1.1s cubic-bezier(.16,1,.3,1)",
                }}
              />

              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", color: "#6B6B6B" }}>{pl.n}</span>
                <span style={{ fontSize: "11px", color: "#6B6B6B" }}>{pl.credits} credits</span>
              </span>

              <span
                className="serif plan-name"
                style={{
                  display: "block",
                  marginTop: "18px",
                  fontSize: on ? "64px" : "48px",
                  lineHeight: 1,
                  fontStyle: on ? "italic" : "normal",
                  transition: "font-size 1s cubic-bezier(.16,1,.3,1)",
                }}
              >
                {pl.name}
              </span>

              <span style={{ display: "block", marginTop: "16px", fontSize: "15px" }}>
                {pl.price} <span style={{ color: "#6B6B6B", fontSize: "12px" }}>/ month</span>
              </span>

              {/* Credit Dots Matrix */}
              <span
                aria-hidden="true"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                  marginTop: "20px",
                  maxWidth: "220px",
                }}
              >
                {Array.from({ length: numDots }).map((_, dIdx) => (
                  <span
                    key={dIdx}
                    className="cr"
                    style={{
                      display: "block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: on ? "#0B0B0B" : "#C9C9C5",
                    }}
                  />
                ))}
              </span>
            </button>
          );
        })}
      </div>

      {/* Plan Breakdown & Call to Action */}
      <div
        className="pricing-rows-grid"
        style={{
          maxWidth: "1040px",
          margin: "44px auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "80px",
          alignItems: "end",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {planRows.map((pr) => (
            <div
              key={pr.k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "11px 0",
                fontSize: "13px",
                borderBottom: "1px solid rgba(11,11,11,.08)",
              }}
            >
              <span style={{ color: "#6B6B6B" }}>{pr.k}</span>
              <span>{pr.v}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "22px" }}>
          <p className="serif" style={{ margin: 0, fontSize: "26px", lineHeight: 1.3 }}>
            {lines[selectedPlan]}
          </p>
          <a
            ref={magneticRef}
            className="pill"
            href="#final"
            style={{ padding: "15px 24px", background: "#0B0B0B", color: "#F7F7F5" }}
          >
            Start with {cur.name} <span className="ar">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
