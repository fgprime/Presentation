"use client";

import { useState, useEffect } from "react";
import { useMDXComponents } from "@mdx-js/react";
import { getMarkdownFiles } from "@/app/actions/getMarkdownFiles";

function MDX({ component }) {
  return ;
}

export default function Page() {
  const [mdxComponents, setMdxComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const files = await getMarkdownFiles();
      files.forEach(async (file) => {
        const mdx = await import(`@/markdown/${file}`);
        setMdxComponents([...mdxComponents, mdx.default]);
      });
    };

    fetchComponents();
  }, []);

  console.log(mdxComponents);

  return (
    <>
      {mdxComponents.map((component, index) => (
        <div key={index} className="flex flex-col">
          <div className={`mx-auto min-h-screen w-[1024px]`}>
            {/* <MDX component={component} /> */}
            Test
          </div>
        </div>
      ))}
    </>
  );
}
