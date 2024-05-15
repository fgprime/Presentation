"use client";
import Welcome from "@/markdown/welcome.mdx";
import Welcome2 from "@/markdown/welcome2.mdx";
import style from "./page.module.css";
import { useMDXComponents } from "@mdx-js/react";

function MDX({ page }) {
  return useMDXComponents(page);
}

export default function Page() {
  const pages = [Welcome, Welcome2];

  return (
    <div className="flex flex-col">
      {pages.map((page, index) => {
        return (
          <div className="w-full h-screen" key={index}>
            <div className={`${style.content} w-[1024px]`}>
              <MDX page={page} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
