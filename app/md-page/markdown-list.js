"use server";
import { readFileSync } from "fs";
import { readdir } from "node:fs/promises";
import { join } from "path";

async function getMarkdownFileNames() {
  try {
    const path = join(__dirname, "../../../../markdown");
    let files = await readdir(path);
    files.sort();

    return files;
  } catch (err) {
    console.error(err);
  }
}
export async function Markdowns() {
  const files = await getMarkdownFileNames();

  let markdownList = [];
  for (const file of files) {
    const text = readFileSync(
      join(__dirname, "../../../../markdown/", file),
      "utf8",
    );
    markdownList.push(text);
  }

  return markdownList;
}
