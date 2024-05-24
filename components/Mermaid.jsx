"use client";
import mermaid from "mermaid";

import { useEffect, useRef, useState } from "react";

export default function Mermaid({ chart }) {
  const chartRef = useRef();

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        fontFamily: "Work Sans",
        // fontSize: "2rem",
        darkMode: true,
        primaryColor: "#333",
        primaryTextColor: "#eee",
        primaryBorderColor: "#666",
        lineColor: "#eee",
        secondaryColor: "#28f",
        tertiaryColor: "#222",
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
    });

    if (chartRef.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="w-full flex justify-center mt-24">
      <div ref={chartRef} className="mermaid w-full justify-center flex">
        {chart}
      </div>
    </div>
  );
}
