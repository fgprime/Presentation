"use client";

import { useEffect, useRef, useState } from "react";

function setBackground(element) {
  element.className = `bg-cover bg-no-repeat bg-[linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.2)),url('../public/start.jpg')]`;
}

export default function Background() {
  const element = useRef();

  useEffect(() => {
    setBackground(element.current.parentElement.parentElement);
  });

  return <div ref={element}></div>;
}
