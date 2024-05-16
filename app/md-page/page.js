"use client";
import style from "./page.module.css";

import { Markdowns } from "./markdown-list";
import { useEffect, useState } from "react";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

async function markdownToHtml(markdown) {
  return String(
    await unified()
      .use(remarkParse) // Parse markdown content to a syntax tree
      .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
      .use(rehypeStringify) // Serialize HTML syntax tree
      .process(markdown),
  );
}

export default function Page() {
  const [markdowns, setMarkdowns] = useState([]);

  const fetchMarkdownList = async () => {
    const markdownList = await Markdowns();

    let htmlList = [];
    for (let index = 0; index < markdownList.length; index++) {
      const markdown = markdownList[index];
      const html = await markdownToHtml(markdown);
      htmlList.push(html);
    }
    setMarkdowns(htmlList);
  };

  useEffect(() => {
    fetchMarkdownList();
    return () => {};
  }, []);

  return (
    <div className="flex flex-col">
      {markdowns.length > 0 &&
        markdowns.map((page, index) => {
          return (
            <div className="w-full h-screen" key={index}>
              <div className={`${style.content} w-[1024px]`}>
                <div dangerouslySetInnerHTML={{ __html: page }} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
