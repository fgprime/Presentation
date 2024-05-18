"use server";

import { promises as fs } from "fs";

const getMarkdownFiles = async () => {
  const files = await fs.readdir("./markdown");
  return files;
};

export { getMarkdownFiles };
