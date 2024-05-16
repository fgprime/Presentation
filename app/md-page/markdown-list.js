"use server";
import { readFileSync } from "fs";
import { join } from "path";

export async function Markdowns() {
  const text = readFileSync(
    join(__dirname, "../../../../markdown/welcome.mdx"),
    "utf8",
  );
  console.dir(join(__dirname, "../../../../markdown/welcome.mdx"));

  return [text, text];
}
