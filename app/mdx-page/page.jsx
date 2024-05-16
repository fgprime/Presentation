"use client";

import { useState, useEffect } from "react";
import { useMDXComponents } from "@mdx-js/react";
import { getMarkdownFiles } from "@/app/actions/getMarkdownFiles";

function MDX({ component }) {
  return useMDXComponents(component);
}

export default function Page() {
  const [mdxComponents, setMdxComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const files = await getMarkdownFiles();
      const mdxs = await Promise.all(
        files.map((file) => import(`@/markdown/${file}`))
      );
      const mdxsCmps = mdxs.map((mdx) => mdx.default);
      setMdxComponents(mdxsCmps);
    };

    fetchComponents();
  }, []);

  return (
    <>
      {mdxComponents.map((component, index) => (
        <div key={index} className="flex flex-col">
          <div className={`mx-auto min-h-screen w-[1024px]`}>
            <MDX component={component} />
          </div>
        </div>
      ))}
    </>
  );
}
