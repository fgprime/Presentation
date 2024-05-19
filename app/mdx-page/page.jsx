"use client";

import { getMarkdownFiles } from "@/app/actions/getMarkdownFiles";
import { useMDXComponents } from "@mdx-js/react";
import { useEffect, useState } from "react";

function MDX({ component }) {
  return useMDXComponents(component);
}

export default function Page() {
  const [mdxComponents, setMdxComponents] = useState([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const files = await getMarkdownFiles();
      const mdxs = await Promise.all(
        files.map((file) => import(`@/markdown/${file}`)),
      );
      const mdxsCmps = mdxs.map((mdx) => mdx.default);
      setMdxComponents(mdxsCmps);
    };

    fetchComponents();
  }, []);

  return (
    <>
      {mdxComponents.map((component, index) => (
          <div key={index} className="mx-auto content-center min-h-screen w-[1024px]">
            <MDX component={component} />
          </div>
      ))}
    </>
  );
}
